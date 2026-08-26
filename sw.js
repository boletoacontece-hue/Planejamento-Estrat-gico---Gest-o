/* Service Worker — Painel Estratégico Acontece
   Estáticos: cache-first (abre offline)
   data.js / config.js: network-first (dados sempre atualizados, fallback cache)
   Supabase: sempre rede (nunca cachear API/auth) */

const CACHE = "painel-acontece-v4";
const ESTATICOS = [
  "./",
  "./index.html",
  "./config.js",
  "./data.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ESTATICOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);

  /* Supabase e outras origens: rede direta, sem cache */
  if (url.origin !== location.origin) {
    if (url.hostname.includes("fonts.g") || url.hostname.includes("jsdelivr")) {
      /* fontes e CDN: cache-first */
      e.respondWith(
        caches.match(e.request).then(hit => hit || fetch(e.request).then(resp => {
          const clone = resp.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return resp;
        }))
      );
    }
    return; /* supabase.co etc.: passa direto */
  }

  /* dados: network-first para pegar atualizações */
  if (url.pathname.endsWith("data.js") || url.pathname.endsWith("config.js")) {
    e.respondWith(
      fetch(e.request).then(resp => {
        const clone = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return resp;
      }).catch(() => caches.match(e.request))
    );
    return;
  }

  /* estáticos: cache-first com atualização em segundo plano */
  e.respondWith(
    caches.match(e.request).then(hit => {
      const rede = fetch(e.request).then(resp => {
        const clone = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return resp;
      }).catch(() => hit);
      return hit || rede;
    })
  );
});
