/* ============================================================
   PAINEL ESTRATÉGICO ACONTECE 2026-2027 — DADOS
   ------------------------------------------------------------
   Para atualizar o status de qualquer item, edite o campo
   "status" com um destes valores:
     "entregue"  |  "andamento"  |  "pendente"
   Depois faça commit — o Cloudflare Pages publica sozinho.
   ============================================================ */

const DADOS = {

  meta: {
    titulo: "Painel Estratégico Acontece",
    horizonte: "Agosto/2026 – Julho/2027",
    responsavel: "Michel Christian (Gerente Executivo)",
    diretoria: "Rogério L. A. Silva · Mariana · Cláudia Holanda · Alehandro Lopes",
    atualizadoEm: "2026-08-12"
  },

  /* ---------- TRILHO DE FASES (hero) ---------- */
  fases: [
    { id: "etapa1", rotulo: "Etapa 1", sub: "Diagnóstico e Fundamentos", periodo: "Jun–Jul/2026", status: "entregue" },
    { id: "fase0",  rotulo: "Fase 0",  sub: "Fundação — 4 semanas", periodo: "Ago/2026", status: "andamento" },
    { id: "q1",     rotulo: "Q1 · Fase 1", sub: "Estabilização", periodo: "Ago–Out/2026", status: "andamento" },
    { id: "q2",     rotulo: "Q2 · Fase 2", sub: "Expansão", periodo: "Nov/26–Jan/27", status: "pendente" },
    { id: "q3",     rotulo: "Q3 · Fase 3", sub: "Integração", periodo: "Fev–Abr/2027", status: "pendente" },
    { id: "q4",     rotulo: "Q4 · Fase 4", sub: "Consolidação", periodo: "Mai–Jul/2027", status: "pendente" }
  ],

  /* ---------- ETAPA 1 — ENTREGUE (treinamento + diagnósticos) ---------- */
  etapa1: {
    diagnosticos: [
      { nome: "Branding — Iceberg da Marca", score: "41/50", leitura: "Marca em desenvolvimento", status: "entregue" },
      { nome: "Marketing — Papel do Empresário", score: "3/6", leitura: "Gaps críticos (lead qualificado + leitura semanal)", status: "entregue" },
      { nome: "Vendas — Mapa de Consciência Comercial", score: "75/100", leitura: "Vendas 3.0 — Marketing e Conteúdo", status: "entregue" },
      { nome: "Stack Tecnológico Comercial", score: "3/9", leitura: "Automação 100% · CRM 0% · Análise 0%", status: "entregue" },
      { nome: "Playbook Comercial", score: "54/100", leitura: "Rascunho — consolidar, não criar", status: "entregue" },
      { nome: "Site aconteceimobiliaria.com.br", score: "54/100", leitura: "Regular — catálogo sem narrativa", status: "entregue" }
    ],
    entregaveis: [
      { nome: "Identidade estratégica refinada (Missão · Visão · 3 Valores · Propósito)", origem: "Módulo 2", status: "entregue" },
      { nome: "Posicionamento V1 + ICP \"Carlos\" + Anti-persona", origem: "Módulo 2", status: "entregue" },
      { nome: "5 Metas SMART de 6 meses", origem: "Módulo 3", status: "entregue" },
      { nome: "Oferta Irresistível + copy de landing page", origem: "Módulo 3", status: "entregue" },
      { nome: "Mapa de 9 atritos da jornada + plano 90 dias", origem: "Módulo 3", status: "entregue" },
      { nome: "Acordo MQL / SQL / SLA — V1.1", origem: "Módulo 4", status: "entregue" },
      { nome: "8 objeções decodificadas + Script WhatsApp 5 etapas", origem: "Módulo 4 + Ferramentas", status: "entregue" },
      { nome: "Régua de pós-venda D1/D3/D7/D30/D45 (desenho)", origem: "Módulo 4", status: "entregue" },
      { nome: "Perfil do Vendedor Ideal + 2 Job Descriptions (Atendimento e CS)", origem: "Ferramentas", status: "entregue" },
      { nome: "Plano de contratação do Customer Success (10 semanas)", origem: "Módulo 4", status: "entregue" },
      { nome: "Biblioteca de Prompts — 25+ templates", origem: "Módulo 1", status: "entregue" },
      { nome: "Fila ICE de sprints priorizados", origem: "Módulo 3", status: "entregue" },
      { nome: "Cronograma de educação continuada (12 semanas)", origem: "Módulo 4", status: "entregue" },
      { nome: "Plano Estratégico 2026-2027 + Escopo de Implantação", origem: "Consolidação", status: "entregue" }
    ]
  },

  /* ---------- ETAPA 2 — CRONOGRAMA DE IMPLANTAÇÃO ---------- */
  cronograma: [

    /* FASE 0 — semanas */
    { fase: "fase0", grupo: "Semana 1 (1–7 Ago)", titulo: "CRM com pipeline de 5-7 etapas e SLA por fase", responsavel: "Keith Laurent + Michel", status: "andamento" },
    { fase: "fase0", grupo: "Semana 1 (1–7 Ago)", titulo: "Documentar critérios MQL/SQL", responsavel: "Keith Laurent + Michel", status: "andamento" },
    { fase: "fase0", grupo: "Semana 1 (1–7 Ago)", titulo: "Ativar régua de follow-up pós-proposta (Realmate)", responsavel: "Keith Laurent + Michel", status: "andamento" },
    { fase: "fase0", grupo: "Semana 1 (1–7 Ago)", titulo: "Corrigir bio/CTA do Instagram", responsavel: "Keith Laurent + Michel", status: "andamento" },
    { fase: "fase0", grupo: "Semana 2 (8–14 Ago)", titulo: "Publicar conteúdo de autoridade (3 Reels)", responsavel: "Claudia Holanda + Marketing", status: "andamento" },
    { fase: "fase0", grupo: "Semana 2 (8–14 Ago)", titulo: "Lançar isca digital + landing page", responsavel: "Claudia Holanda + Marketing", status: "andamento" },
    { fase: "fase0", grupo: "Semana 2 (8–14 Ago)", titulo: "Protocolo de resolução de problemas (base de conhecimento)", responsavel: "Claudia Holanda + Marketing", status: "andamento" },
    { fase: "fase0", grupo: "Semana 2 (8–14 Ago)", titulo: "Roteiro de captação ativa via carteira", responsavel: "Claudia Holanda + Marketing", status: "andamento" },
    { fase: "fase0", grupo: "Semana 3 (15–21 Ago)", titulo: "Ativar Meta Ads segmentado", responsavel: "Keith Laurent + Viviane Oliveira", status: "pendente" },
    { fase: "fase0", grupo: "Semana 3 (15–21 Ago)", titulo: "Publicar Playbook Comercial v1.0", responsavel: "Keith Laurent + Viviane Oliveira", status: "pendente" },
    { fase: "fase0", grupo: "Semana 3 (15–21 Ago)", titulo: "Implementar régua de pós-venda D1/D3/D7/D30/D45", responsavel: "Keith Laurent + Viviane Oliveira", status: "pendente" },
    { fase: "fase0", grupo: "Semana 3 (15–21 Ago)", titulo: "Treinar SDRs em MQL/SQL", responsavel: "Keith Laurent + Viviane Oliveira", status: "pendente" },
    { fase: "fase0", grupo: "Semana 4 (22–30 Ago)", titulo: "Dashboard de marketing e vendas", responsavel: "Michel (facilitação)", status: "pendente" },
    { fase: "fase0", grupo: "Semana 4 (22–30 Ago)", titulo: "Primeira revisão formal com liderança", responsavel: "Michel (facilitação)", status: "pendente" },
    { fase: "fase0", grupo: "Semana 4 (22–30 Ago)", titulo: "Publicar Brand Story", responsavel: "Michel (facilitação)", status: "pendente" },
    { fase: "fase0", grupo: "Semana 4 (22–30 Ago)", titulo: "Relatório de captação ativa", responsavel: "Michel (facilitação)", status: "pendente" },
    { fase: "fase0", grupo: "Paralelo à Fase 0", titulo: "KPIs base de Financeiro e Atendimento", responsavel: "Michel + Alehandro", status: "andamento" },
    { fase: "fase0", grupo: "Paralelo à Fase 0", titulo: "Protocolo de resposta a reclamações em 48h (kickoff)", responsavel: "Atendimento/Administrativo", status: "andamento" },
    { fase: "fase0", grupo: "Paralelo à Fase 0", titulo: "Início da estruturação de controle de Seguros", responsavel: "Michel", status: "andamento" },

    /* FASE 1 — Q1 */
    { fase: "q1", grupo: "Q1 · Estabilização", titulo: "Consolidar régua de pós-venda e medir NPS dos primeiros 30 contratos (meta ≥ 50)", responsavel: "Viviane Oliveira (interina)", status: "pendente" },
    { fase: "q1", grupo: "Q1 · Estabilização", titulo: "Estruturar controle sistemático de Seguros (planilha → sistema + dono do processo)", responsavel: "Michel", status: "andamento" },
    { fase: "q1", grupo: "Q1 · Estabilização", titulo: "Protocolo de reputação: 100% de resposta a reclamações em 48h", responsavel: "Atendimento", status: "andamento" },
    { fase: "q1", grupo: "Q1 · Estabilização", titulo: "Abrir processo seletivo do Customer Success (sourcing 4 sem + entrevistas 2 sem)", responsavel: "Claudia + RH", status: "pendente" },
    { fase: "q1", grupo: "Q1 · Estabilização", titulo: "Designar responsável provisório de pós-venda (Viviane Oliveira)", responsavel: "Diretoria", status: "andamento" },

    /* FASE 2 — Q2 */
    { fase: "q2", grupo: "Q2 · Expansão", titulo: "CS em ramp-up: 100 contatos mapeados + 5 propostas + 2-3 imóveis captados (30 dias)", responsavel: "Customer Success (novo)", status: "pendente" },
    { fase: "q2", grupo: "Q2 · Expansão", titulo: "Expandir KPIs para Comercial/Vendas, RH e Manutenção", responsavel: "Michel", status: "pendente" },
    { fase: "q2", grupo: "Q2 · Expansão", titulo: "Finalizar workflows do WhatsApp Realmate (D1/D3/D7/D30/D45 automatizados)", responsavel: "Michel + TI", status: "pendente" },
    { fase: "q2", grupo: "Q2 · Expansão", titulo: "Bitrix: concluir fase de Vendas", responsavel: "Keith + TI", status: "pendente" },
    { fase: "q2", grupo: "Q2 · Expansão", titulo: "Análise mensal de motivos de perda (5-10 entrevistas/mês) — evolução Vendas 4.0", responsavel: "Keith", status: "pendente" },

    /* FASE 3 — Q3 */
    { fase: "q3", grupo: "Q3 · Integração", titulo: "Avaliar unificação C2S + Vista/Loft (decisão registrada em decisions/)", responsavel: "Michel + Diretoria", status: "pendente" },
    { fase: "q3", grupo: "Q3 · Integração", titulo: "Decisão formal sobre Intranet Soft (manter com integrações vs. migrar)", responsavel: "Diretoria", status: "pendente" },
    { fase: "q3", grupo: "Q3 · Integração", titulo: "Bitrix: concluir fases de Financeiro e Cobrança", responsavel: "Alehandro + TI", status: "pendente" },
    { fase: "q3", grupo: "Q3 · Integração", titulo: "Manual de Procedimentos em 70% (captação ativa, pós-venda, Seguros)", responsavel: "Michel + gestores", status: "pendente" },
    { fase: "q3", grupo: "Q3 · Integração", titulo: "Revisão do Playbook Comercial para v2.0", responsavel: "Keith", status: "pendente" },

    /* FASE 4 — Q4 */
    { fase: "q4", grupo: "Q4 · Consolidação", titulo: "Dashboard consolidado com dados reais de todos os departamentos", responsavel: "Michel + Alehandro", status: "pendente" },
    { fase: "q4", grupo: "Q4 · Consolidação", titulo: "Manual de Procedimentos 100% concluído", responsavel: "Michel + gestores", status: "pendente" },
    { fase: "q4", grupo: "Q4 · Consolidação", titulo: "Revisão anual do plano com a diretoria", responsavel: "Diretoria completa", status: "pendente" }
  ],

  /* ---------- GARGALOS CRÍTICOS ---------- */
  gargalos: [
    { n: 1, nome: "Pós-venda / Customer Success inexistente", severidade: "Crítico", custo: "Churn silencioso · LTV de R$ 950 mil inexplorado · indicação em 5% (potencial 22%)", plano: "Régua D1→D45 no Realmate + CRM · Viviane interina até contratação do CS", status: "andamento" },
    { n: 2, nome: "Captação ativa de imóveis inexistente", severidade: "Crítico", custo: "Funil gera demanda que a carteira não supre; concorrentes captam a base", plano: "SDRs em regime misto (50% locatários + 50% captação) · meta +10 imóveis/semana a partir da S3", status: "andamento" },
    { n: 3, nome: "Reputação online crítica (Reclame Aqui sem resposta)", severidade: "Crítico", custo: "Dano à marca · perda de clientes · sem monitoramento formal", plano: "Monitoramento diário + resposta em 48h + playbook de resolução de conflito", status: "andamento" },
    { n: 4, nome: "Seguros — controles limitados", severidade: "Crítico (prioridade #1)", custo: "Receita de comissão inexplorada · sem visibilidade de carteira", plano: "Controle sistemático de apólices Q1 · integração com Vista/Loft · upsell no D+45 da régua", status: "andamento" },
    { n: 5, nome: "CRM sem pipeline estruturado / sem SLA", severidade: "Alto", custo: "Leads perdidos silenciosamente · sem dashboard de conversão", plano: "Pipeline 5-7 etapas + SLA por fase + registro diário 15 min (Semana 1)", status: "andamento" },
    { n: 6, nome: "Playbook comercial em rascunho (54/100)", severidade: "Alto", custo: "Ramp-up lento de contratações · gargalos não diagnosticáveis", plano: "Playbook v1.0 até D+21 · metas individuais · régua pós-proposta · onboarding", status: "pendente" },
    { n: 7, nome: "Organograma com 2 cadeiras vazias (Atendimento + CS)", severidade: "Alto", custo: "Leads desorganizados · clientes sem gestão pós-contrato", plano: "Atendimento em contratação · CS: processo seletivo no Q1 (contratado até Q2)", status: "andamento" },
    { n: 8, nome: "Marketing operando sem dados (3/6)", severidade: "Médio-Alto", custo: "Budget desperdiçado em canais ineficientes", plano: "MQL/SQL formalizado + revisão semanal por canal (Semanas 1-2)", status: "andamento" },
    { n: 9, nome: "SEO / presença digital fraca", severidade: "Alto", custo: "Invisibilidade em busca local · poucos acessos qualificados", plano: "Correção técnica do site + Google Meu Negócio + calendário de conteúdo (Q1-Q2)", status: "pendente" },
    { n: 10, nome: "Unificação de sistemas (Intranet Soft, C2S, Vista/Loft)", severidade: "Médio", custo: "Sem visão 360º do cliente · dificuldade de automação", plano: "Avaliação formal no Q3 · registrado em decisions/", status: "pendente" }
  ],

  /* ---------- ROADMAP DE AUTOMAÇÃO ---------- */
  automacao: [
    { prioridade: 1, frente: "Seguros", acao: "Controle sistemático de apólices (planilha → sistema), dono do processo, integração com Vista/Loft", trimestre: "Q1", status: "andamento" },
    { prioridade: 2, frente: "Reputação / Atendimento", acao: "Monitoramento diário Reclame Aqui/Google, protocolo 48h, playbook de conflito", trimestre: "Q1", status: "andamento" },
    { prioridade: 3, frente: "WhatsApp Realmate", acao: "Finalizar workflows de atendimento com IA, medir tempo de resposta e satisfação", trimestre: "Q1–Q2", status: "andamento" },
    { prioridade: 4, frente: "Bitrix", acao: "Concluir fases pendentes (Vendas, Financeiro, Cobrança)", trimestre: "Q2–Q3", status: "pendente" },
    { prioridade: 5, frente: "Unificação de CRM", acao: "Avaliar unificação C2S + Vista/Loft ou integração via API", trimestre: "Q3", status: "pendente" },
    { prioridade: 6, frente: "Intranet Soft", acao: "Decisão formal: manter com integrações pontuais vs. iniciar migração", trimestre: "Q3–Q4", status: "pendente" },
    { prioridade: 7, frente: "Presença digital / SEO", acao: "Corrigir site, estruturar Google Meu Negócio, calendário de conteúdo", trimestre: "Q2–Q3", status: "pendente" }
  ],

  /* ---------- KPIs POR DEPARTAMENTO ---------- */
  kpis: [
    { depto: "Financeiro", critico: false, indicadores: [
      "Fluxo de caixa realizado vs. projetado — mensal",
      "Inadimplência de locação (%) — mensal",
      "Margem operacional por unidade — mensal",
      "Custo por processo administrativo — trimestral"
    ]},
    { depto: "Comercial / Vendas", critico: true, indicadores: [
      "Taxa de conversão do funil (C2S) — mensal",
      "Ticket médio de venda — mensal",
      "Pipeline ativo por corretor — semanal",
      "Cross-sell locação → seguros/financiamento — mensal"
    ]},
    { depto: "Administrativo", critico: false, indicadores: [
      "SLA de processos internos — mensal",
      "% de processos formalizados no Manual — trimestral",
      "Backlog de tarefas pendentes — semanal"
    ]},
    { depto: "Manutenção (Reparos)", critico: false, indicadores: [
      "Tempo médio de atendimento de chamado — mensal",
      "Custo médio de reparo por imóvel — mensal",
      "% de chamados reabertos (retrabalho) — mensal"
    ]},
    { depto: "Jurídico", critico: false, indicadores: [
      "Tempo médio de resolução de processos/contratos — mensal",
      "Volume de contratos revisados/pendentes — mensal",
      "Casos de inadimplência escalados — mensal"
    ]},
    { depto: "Atendimento (Recepção)", critico: true, indicadores: [
      "Taxa de resposta a reclamações — meta 100% em 48h — semanal",
      "Tempo médio de 1ª resposta via WhatsApp (Realmate) — semanal",
      "CSAT / NPS de atendimento — mensal"
    ]},
    { depto: "RH", critico: false, indicadores: [
      "Tempo médio de contratação (R&S) — mensal",
      "% de colaboradores com onboarding concluído — mensal",
      "Cobertura de avaliação de desempenho — trimestral"
    ]},
    { depto: "Assessoria (Empreendimentos)", critico: false, indicadores: [
      "Nº de assessorias formalizadas vs. informais — trimestral",
      "Receita gerada por assessoria — trimestral"
    ]},
    { depto: "Lançamentos", critico: false, indicadores: [
      "Volume de unidades em lançamento ativo — mensal",
      "Velocidade de vendas de lançamento (VSO) — mensal"
    ]},
    { depto: "Seguros", critico: true, indicadores: [
      "Nº de apólices ativas vs. potencial da carteira — mensal",
      "% de imóveis administrados com seguro vinculado — mensal",
      "Receita de comissão de seguros — mensal",
      "Implantação de controle sistêmico (marco de projeto)"
    ]}
  ],

  /* ---------- MÉTRICAS DO PROJETO ---------- */
  metricas: [
    { nome: "Imóveis captados ativamente/mês", baseline: "~0 (captação passiva)", meta30: "≥ 20", meta1ano: "Fluxo estável mensal" },
    { nome: "Taxa de conversão lead → contrato", baseline: "68%", meta30: "Manter ≥ 68%", meta1ano: "≥ 70%" },
    { nome: "NPS pós-contrato (30 dias)", baseline: "Sem medição", meta30: "≥ 50", meta1ano: "≥ 60" },
    { nome: "Taxa de indicação sobre novos contratos", baseline: "5%", meta30: "10%", meta1ano: "22%" },
    { nome: "Score do Playbook Comercial", baseline: "54/100", meta30: "—", meta1ano: "≥ 85/100" },
    { nome: "Cadeiras vazias no organograma comercial", baseline: "2", meta30: "1 (Atendimento)", meta1ano: "0" },
    { nome: "Taxa de resposta a reclamações em 48h", baseline: "<50%", meta30: "100%", meta1ano: "100% sustentado" }
  ],

  /* ---------- PAPÉIS ---------- */
  papeis: [
    { papel: "Sponsor executivo", responsavel: "Rogério Lúcio Artiaga Silva", situacao: "Ativo" },
    { papel: "Coordenação geral do projeto", responsavel: "Michel Christian", situacao: "Ativo" },
    { papel: "Gestor Comercial", responsavel: "Keith Laurent", situacao: "Ativo" },
    { papel: "Líder Comercial", responsavel: "Claudia Holanda", situacao: "Ativo" },
    { papel: "Carteira Premium / pós-venda interino", responsavel: "Viviane Oliveira", situacao: "Ativo (interino)" },
    { papel: "SDRs", responsavel: "Nicole e Ana", situacao: "Ativo (regime misto proposto)" },
    { papel: "Closers", responsavel: "Ana Beatriz e Laís Fernandes", situacao: "Ativo" },
    { papel: "Administrativo de Contratos", responsavel: "Graziella Alves", situacao: "Ativo" },
    { papel: "Atendimento / Recepção de leads", responsavel: "—", situacao: "Em contratação" },
    { papel: "Customer Success / Gestor de Relacionamento", responsavel: "—", situacao: "Processo seletivo no Q1" }
  ],

  /* ---------- GOVERNANÇA ---------- */
  governanca: [
    { cadencia: "Mensal", atividade: "Revisão do progresso de KPIs e automações (sessão interna)", participantes: "Michel + gestores" },
    { cadencia: "Trimestral", atividade: "Revisão com a diretoria alinhada ao cronograma", participantes: "Rogério · Mariana · Cláudia · Alehandro" },
    { cadencia: "Contínua", atividade: "Decisões de arquitetura de sistemas registradas em decisions/", participantes: "Michel + Diretoria" }
  ]
};
