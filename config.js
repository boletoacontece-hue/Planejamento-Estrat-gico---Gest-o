/* ============================================================
   CONFIGURAÇÃO — PAINEL ESTRATÉGICO ACONTECE
   ------------------------------------------------------------
   Use o MESMO projeto Supabase do sistema de vendas para
   aproveitar os usuários já criados (auth.users).

   1. Cole a URL e a anon key do projeto (Settings → API)
   2. Rode o setup-supabase.sql no SQL Editor (cria 1 tabela só)
   3. Publique — o login passa a ser exigido automaticamente

   Se os dois campos ficarem vazios (""), o painel roda em
   MODO LOCAL: sem login, dados salvos apenas no navegador.
   ============================================================ */

const CONFIG = {
  supabaseUrl: "https://wckjaoiyuxshkhahzkco.supabase.co",      
  supabaseAnonKey: "sb_publishable_ugJ3-zZ4RoW1NJPl_Eb-Qg_iKMhf0cL"
};
