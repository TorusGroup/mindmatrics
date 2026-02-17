
export type Language = 'pt' | 'en' | 'es' | 'fr' | 'de';

const pt = {
  nav: {
    tests: "Catálogo",
    dashboard: "Meu Perfil",
    approve: "Consultoria",
    back: "Voltar",
    mindbot: "Mindbot AI"
  },
  dev: {
    title: "Neural Lab v4.7",
    inject: "Injetar Mock Report:",
    mode: "Neural Lab Mode"
  },
  hero: {
    title: "A Ciência por trás da sua",
    titleAccent: "Excelência Mental",
    subtitle: "A plataforma definitiva de inteligência comportamental. Protocolos científicos para decodificar performance, saúde e dinâmica de equipes.",
    protocol: "Hub de Inteligência Psicofísica v7.2",
    career: "Performance Executiva",
    leadership: "Dinâmicas Sociais",
    mentalHealth: "Ecossistema Clínico",
    focush1: "Eixo de Análise",
    explore: "Explorar Biblioteca"
  },
  science: {
    tag: "Metodologia Evidence-Based",
    title: "Rigor Psicométrico,",
    titleAccent: "Visão Tecnológica",
    desc: "Não somos apenas testes. Somos uma engine de processamento de vetores comportamentais validada pelos maiores órgãos de saúde e psicologia do mundo.",
    database: "Base Normativa Global",
    databaseDesc: "Comparações estatísticas com amostras populacionais diversificadas para precisão absoluta.",
    privacy: "Segurança de Nível Bancário",
    privacyDesc: "Dados criptografados de ponta a ponta em conformidade rigorosa com a LGPD e GDPR.",
    items: ["Validação Cronbach's α > 0.85", "Cálculo de Latência Neural", "Mapeamento IPIP-NEO", "Algoritmos de Detecção de Viés"],
    latency_label: "Latência Neural",
    latency_value: "Resposta 12ms",
    accuracy_label: "Precisão da Amostra",
    accuracy_value: "Fidelidade 99.8%",
    calibration: "Calibração Normativa: ATIVA",
    global_standards: "Neuro-Padrões Globais",
    live_decoding: "Decodificação IA ao Vivo"
  },
  strategy: {
    title: "Protocolos de Alta Densidade",
    subtitle: "Nossa biblioteca modular permite que você escolha o eixo de análise exato para o seu momento atual.",
    personality: "Traços Core",
    leadership: "Soft Skills",
    neurodiversity: "Espectros",
    corporate: "Cultura & Clima",
    mentalHealth: "Clínico",
    start: "Explorar Protocolo",
    card_bigfive_title: "Modelo Big Five",
    card_bigfive_desc: "Mapeamento exaustivo dos 5 grandes fatores da personalidade (OCEAN).",
    card_eq_title: "Quociente Emocional",
    card_eq_desc: "Análise profunda de resiliência, empatia e gestão de conflitos sob pressão.",
    card_adhd_title: "Neurofoco TDAH",
    card_adhd_desc: "Triagem clínica baseada no padrão ouro da OMS (ASRS-v1.1).",
    card_burnout_title: "Matriz de Burnout",
    card_burnout_desc: "Indicador precoce de estresse crônico e exaustão ocupacional.",
    card_digital_title: "Higiene Dopaminérgica",
    card_digital_desc: "Cálculo do impacto dos algoritmos na sua capacidade de foco profundo.",
    card_depression_title: "Protocolo BDI-II",
    card_depression_desc: "Inventário de Depressão de Beck para triagem clínica profunda e acompanhamento.",
    all: "Todos",
    questions: "Questões",
    premium: "Premium",
    neural_load: "Carga Neural",
    new_protocols: "Novos Protocolos",
    continuous_development: "Desenvolvimento Contínuo de Funções Executivas"
  },
  business: {
    tag: "MindMetrics for Enterprise",
    title: "Inteligência de Dados para",
    titleAccent: "Gestão de Talentos",
    desc: "Reduza o turnover e otimize o clima organizacional com dados psicométricos reais em vez de suposições.",
    retention: "Retenção Preditiva",
    retentionDesc: "Identifique riscos de burnout e desengajamento antes que eles virem desligamentos.",
    dataCulture: "Cultura Data-Driven",
    dataCultureDesc: "Decisões de promoção e contratação baseadas em fit cultural e técnico mensurável.",
    cta: "Solicitar Demo Enterprise",
    team_analytics: "Team Analytics",
    engineering_dept: "DEPT ENGENHARIA",
    balance_index: "Índice de Equilíbrio",
    burnout_risk: "Risco de Burnout",
    burnout_value: "Baixo (12%)",
    cultural_fit: "Fit Cultural",
    cultural_value: "Excelente"
  },
  investment: {
    tag: "Planos & Expansão",
    title: "Invista na sua Infraestrutura Mental",
    setup: "Setup Individual",
    setupDesc: "Acesso vitalício ao dashboard e atualizações constantes dos algoritmos de IA.",
    success: "Módulo Enterprise",
    successDesc: "Dashboards agregados para times de até 50 pessoas com consultoria de RH inclusa.",
    techTitle: "Tecnologia de Ponta",
    roiTitle: "O Retorno da Inteligência",
    roiDesc: "Cada insight gerado economiza horas de tentativa e erro na carreira e protege sua saúde mental.",
    guarantee: "Compromisso com a Precisão",
    guaranteeDesc: "Nossos relatórios são calibrados semanalmente para garantir a menor margem de erro estatístico do mercado.",
    items: ["Motor de Insights IA Generativa", "5 Relatórios de Ultra-Alta Densidade", "Team Dashboard (Módulo Enterprise)", "Gestão de Tráfego de Alta Performance", "Consultoria Estratégica Quinzenal", "Segurança de Dados Nível Bancário (LGPD)"],
    roi_label: "ROI Projetado",
    roi_sub: "Retorno Médio / 6 Meses",
    lead_label: "Qualidade do Lead",
    lead_sub: "Alta Intenção de Compra",
    terms: "Termos aplicáveis baseados em metas de investimento de mídia."
  },
  nextSteps: {
    tag: "Onboarding Imediato",
    title: "Pronto para sua",
    titleAccent: "Evolução?",
    desc: "Escolha um protocolo abaixo e receba seu primeiro dossiê de alta densidade em menos de 10 minutos.",
    s1Title: "Escolha o Foco",
    s1Desc: "Selecione entre carreira, clínica ou liderança.",
    s2Title: "Avaliação Neural",
    s2Desc: "Responda ao questionário calibrado por IA.",
    s3Title: "Análise Profunda",
    s3Desc: "A IA Mindbot cruza seus dados em segundos.",
    s4Title: "Plano de Ação",
    s4Desc: "Receba estratégias práticas e personalizadas.",
    cta_title: "Sua nova arquitetura mental começa aqui.",
    cta_button: "Iniciar Primeiro Teste",
    cta_call: "Falar com Consultor"
  },
  reports: {
    common: {
      confidential: "Documento Confidencial",
      patient: "Paciente",
      summary: "Sumário Executivo",
      attention: "Pontos de Atenção",
      interpret: "Consultoria via IA",
      risk_indicator: "Indicador de Risco Clínico",
      cognitive_signature: "Assinatura Cognitiva",
      benchmarkTitle: "Comparativo de Mercado",
      deepInsights: "Análise Profunda Mindbot",
      neuralSynergy: "Sinergia Neural",
      focus: "Foco",
      energy: "Energia",
      control: "Controle",
      career_match: "Afinidade de Carreira"
    },
    adhd: {
      title: "ADHD Neurofocus",
      subtitle: "Relatório de Funções Executivas",
      domains: {
        inattention: "Desatenção",
        hyperactivity: "Hiperatividade",
        impulsivity: "Impulsividade"
      },
      archetypes: {
        creative_tornado: { title: "O Tornado Criativo", desc: "Alta energia e criatividade, mas com desafios severos de finalização e organização." },
        silent_architect: { title: "O Arquiteto Silencioso", desc: "Mente hiperativa internamente, porém com baixa agitação física. Risco de 'paralisia por análise'." },
        turbo_engine: { title: "Motor Turbo", desc: "Perfil predominantemente hiperativo-impulsivo. Age antes de processar todos os dados." }
      },
      dopamine_menu: {
        title: "Dopamine Menu (Estratégias)",
        healthy: "Estímulos Saudáveis",
        unhealthy: "Estímulos de Risco",
        h1: "Caminhada Rápida (10min)",
        h2: "Música Lo-fi / Ruído Marrom",
        h3: "Micro-metas de 15min",
        u1: "Scroll Infinito (Social Media)",
        u2: "Multitarefa Excessiva",
        u3: "Consumo de Açúcar Refinado"
      }
    },
    bigfive: {
      title: "Dossiê de Arquitetura",
      subtitle: "Psicométrica da Personalidade",
      traits: {
        openness: "Abertura",
        conscientiousness: "Conscienciosidade",
        extraversion: "Extroversão",
        agreeableness: "Amabilidade",
        stability: "Estabilidade"
      },
      archetypes: {
        creator: "O Criador Empático",
        architect: "O Arquiteto Estratégico",
        explorer: "O Explorador Versátil"
      }
    }
  },
  common: {
    archetype_dominant: "Assinatura Mental Dominante",
    calculating: "Processando Sinais...",
    mapping_triggers: "Mapeando Gatilhos...",
    finalizing_protocol: "Finalizing Protocol...",
    analysis_complete: "Mapeamento Finalizado",
    full_name: "Seu Nome Completo",
    reveal_results: "Gerar Dossiê de Alta Densidade",
    back: "Voltar ao Catálogo"
  },
  ai_consultation: {
    title: "Análise Profunda Mindbot",
    desc: "Nossa IA interpretará seus vetores psicométricos para gerar um plano de ação personalizado.",
    loading: "Analisando Vetores...",
    button: "Solicitar Consultoria IA",
    placeholder: "Pergunte sobre seus resultados...",
    error_connect: "Ocorreu um erro na conexão neural. Tente novamente.",
    error_network: "Conexão interrompida. Verifique sua rede.",
    bot_version: "Mindbot v4.5"
  },
  testimonials: {
    tag: "Prova Social",
    title: "Quem usa MindMetrics",
    t1: {
      name: "Dra. Sarah Conner",
      role: "Diretora de RH, TechCorp",
      text: "A precisão dos dados mudou completamente nossa estratégia de retenção de talentos."
    },
    t2: {
      name: "Marcos Andrade",
      role: "CEO, StartupFlow",
      text: "Investimento essencial para qualquer time que busca alta performance com saúde mental."
    }
  },
  roadmap: {
    tag: "Roadmap 2024",
    title: "O Futuro da",
    titleAccent: "Inteligência",
    quote: "Construindo o sistema operacional definitivo para a mente humana.",
    m1: "Q1 2024",
    m1Title: "Fundação Neural",
    m1Desc: "Estabelecendo os pilares da identidade e precisão.",
    m2: "Q2 2024",
    m2Title: "Expansão de Protocolos",
    m2Desc: "Novas ferramentas para neurodiversidade e bem-estar digital.",
    m3: "Q3 2024",
    m3Title: "Ecossistema Enterprise",
    m3Desc: "Ferramentas massivas para gestão de capital humano.",
    m4: "Q4 2024",
    m4Title: "Saúde Mental 2.0",
    m4Desc: "Integração clínica profunda com profissionais de saúde.",
    items_m1: ["Brand Identity Premium", "Relatórios de Ultra-Alta Densidade", "Deploy de Infraestrutura IA"],
    items_m2: ["Lançamento Protocolo TDAH", "Calculadora de Perda de Vida", "Módulo Detox Digital"],
    items_m3: ["Team Dashboard Alpha", "API de Integração RH", "Dashboards Departamentais"],
    items_m4: ["Triagem Burnout v2", "Análise de Ansiedade/Depressão", "Portal do Psicólogo"],
    placeholder: "Não encontrou?"
  },
  newsletter: {
    title: "Mantenha sua mente afiada.",
    desc: "Receba insights semanais sobre neurociência, produtividade e saúde mental baseada em evidências.",
    success_title: "Bem-vindo à MindMetrics!",
    success_desc: "Sua jornada começa agora.",
    placeholder: "Seu melhor e-mail",
    button: "Inscrever",
    disclaimer: "Sem spam. Cancele quando quiser."
  },
  faq: {
    title: "Perguntas Frequentes",
    subtitle: "Tudo que você precisa saber sobre a metodologia.",
    q1: "Como funciona a calibração por IA?",
    a1: "Nossos algoritmos comparam suas respostas com uma base normativa global...",
    q2: "Os dados são confidenciais?",
    a2: "Sim, utilizamos criptografia de ponta a ponta...",
    q3: "Posso usar para recrutamento?",
    a3: "Absolutamente. O módulo Enterprise é focado nisso...",
    q4: "Qual a validade científica?",
    a4: "Baseado no Big Five, IPIP-NEO e outros frameworks validados..."
  },
  dashboard: {
    welcome: "Bem-vindo de volta, {name}",
    workspace: "Neural Workspace",
    synergy: {
      score: "Synergy Score",
      cognitive: "Controle Cognitivo",
      stability: "Estabilidade",
      social: "Ressonância Social",
      energy: "Energia Dinâmica",
      focus: "Foco Executivo",
      map_title: "Neural Synergy Map v1.0",
      holistic: "Sinergia Holística",
      desc: "Este mapa cruza dados de todos os seus protocolos ativos. Ele representa o equilíbrio atual do seu 'Digital Twin' entre controle, estabilidade e energia."
    },
    pillars: {
      energy: "Pilar de Energia",
      energy_status: "Consistência: 92%",
      resilience: "Pilar de Resiliência",
      resilience_status: "Nível: Ótimo",
      focus: "Pilar de Foco",
      focus_status: "Status: Em Evolução"
    },
    active_protocols: "Protocolos Ativos",
    no_protocols: "Nenhum protocolo finalizado ainda.",
    unlock_enterprise: "Complete mais 3 testes para desbloquear o Relatório Enterprise."
  },
  global: {
    back: "Voltar ao Painel",
    synergy_active: "Sinergia Holística Ativa",
    data_loaded: "Dados Carregados",
    analyzed_on: "Analisado em",
    version: "Gemini 3 Flash v4.5",
    placeholder: "Pergunte qualquer coisa sobre sua arquitetura mental...",
    error_glitch: "Desculpe, tive um soluço nos meus circuitos neurais. Podemos tentar de novo?",
    error_db: "Minha conexão com o banco de dados falhou. Tente novamente.",
    prompts: {
      career: "Meu Plano de Carreira",
      career_prompt: "Com base no meu Big Five e EQ, quais carreiras seriam mais naturais para mim?",
      stress: "Gestão de Estresse",
      stress_prompt: "Cruze meu risco de Burnout com meu TDAH. Como posso evitar colapsos?",
      relationships: "Relacionamentos",
      relationships_prompt: "Analise minha Amabilidade e Inteligência Emocional para melhorar minha comunicação social."
    }
  },
  booking: {
    success_title: "Sessão Agendada",
    success_desc: "Em breve você receberá um email com o link do Google Meet.",
    close: "Fechar Janela",
    title: "Agendar Especialista",
    subtitle: "Consultoria Humana de Alta Performance",
    subject: "Assunto",
    date: "Data Preferencial",
    obs: "Observações Adicionais",
    info: "Todas as sessões são gravadas para análise posterior de IA.",
    cta: "Confirmar Agendamento",
    options: {
      report: "Interpretação de Relatório",
      b2b: "Consultoria Empresarial (B2B)",
      support: "Suporte Técnico Avançado"
    }
  },
  test_engine: {
    safety_back: "Voltar com Segurança",
    protocol_version: "MindMetrics Care Protocol v1.0",
    question: "Questão",
    previous: "Anterior"
  },
  bigfive_test: {
    title: "Descubra Sua Personalidade",
    subtitle: "Mapeamento científico baseado no modelo OCEAN.",
    start: "Iniciar Teste",
    question_label: "Questão",
    agree: "Concordo",
    disagree: "Discordo",
    steps: ["Correlacionando traços...", "Analisando vetores comportamentais...", "Gerando mapa de personalidade...", "Finalizando relatório..."],
    engine_version: "MindMetrics Engine v1.0",
    lead_title: "Análise Pronta!",
    lead_desc: "Insira seu nome para gerar o relatório.",
    placeholder: "Seu Nome",
    reveal: "Revelar Resultados",
    retry: "Fazer o teste novamente",
    questions: {
      q1: "Eu tenho uma imaginação vívida e ativa.",
      q2: "Eu frequentemente experimento coisas novas só para variar.",
      q3: "Eu gosto de refletir sobre ideias abstratas.",
      q11: "Eu sempre completo as tarefas que começo.",
      q12: "Eu gosto de manter meu espaço organizado.",
      q21: "Eu me sinto energizado com outras pessoas.",
      q22: "Eu gosto de ser o centro das atenções.",
      q31: "Eu geralmente confio nas intenções das pessoas.",
      q32: "Eu evito conflitos e busco harmonia.",
      q41: "Eu me preocupo com coisas que podem dar errado."
    }
  },
  projections: {
    section_title: "ROI e Crescimento",
    main_title: "Projeções de Resultado (6 Meses)",
    metrics: {
      leads_label: "Leads Totais",
      leads_cost: "Custo por Lead: R$ 15-30",
      sched_label: "Agendamentos",
      sched_conv: "Taxa conv.: 15-25%",
      patients_label: "Novos Pacientes",
      patients_close: "Fechamento: 40-60%"
    },
    chart_title: "Potencial de Receita em 6 Meses (Ticket R$ 250)",
    scenarios: {
      conserv: "Conservador",
      mod: "Moderado",
      opt: "Otimista"
    },
    media_dist: "Distribuição de Mídia (R$ 1.500/mês)",
    media_items: ["TDAH: R$ 400", "Depressão: R$ 350", "Carreira: R$ 300", "Vícios: R$ 250", "Imigração: R$ 200"]
  }
};

const en = {
  nav: {
    tests: "Catalog",
    dashboard: "My Profile",
    approve: "Consultancy",
    back: "Back",
    mindbot: "Mindbot AI"
  },
  dev: {
    title: "Neural Lab v4.7",
    inject: "Inject Mock Report:",
    mode: "Neural Lab Mode"
  },
  hero: {
    title: "The Science Behind Your",
    titleAccent: "Mental Excellence",
    subtitle: "The ultimate behavioral intelligence platform. Scientific protocols to decode performance, health, and team dynamics.",
    protocol: "Psychophysical Intelligence Hub v7.2",
    career: "Executive Performance",
    leadership: "Social Dynamics",
    mentalHealth: "Clinical Ecosystem",
    focush1: "Analysis Axis",
    explore: "Explore Library"
  },
  science: {
    tag: "Evidence-Based Methodology",
    title: "Psychometric Rigor,",
    titleAccent: "Technological Vision",
    desc: "We are not just tests. We are a behavioral vector processing engine validated by the world's leading health and psychology organizations.",
    database: "Global Normative Base",
    databaseDesc: "Statistical comparisons with diverse population samples for absolute precision.",
    privacy: "Bank-Level Security",
    privacyDesc: "End-to-end encrypted data in strict compliance with GDPR and LGPD.",
    items: ["Cronbach's α Validation > 0.85", "Neural Latency Calculation", "IPIP-NEO Mapping", "Bias Detection Algorithms"],
    latency_label: "Neural Latency",
    latency_value: "12ms Response",
    accuracy_label: "Sample Accuracy",
    accuracy_value: "99.8% Fidelity",
    calibration: "Normative Calibration: ACTIVE",
    global_standards: "Global Neuro-Standards",
    live_decoding: "Live AI Decoding"
  },
  strategy: {
    title: "High-Density Protocols",
    subtitle: "Our modular library allows you to choose the exact axis of analysis for your current moment.",
    personality: "Core Traits",
    leadership: "Soft Skills",
    neurodiversity: "Spectrums",
    corporate: "Culture & Climate",
    mentalHealth: "Clinical",
    start: "Explore Protocol",
    card_bigfive_title: "Big Five Model",
    card_bigfive_desc: "Exhaustive mapping of the Big 5 personality factors (OCEAN).",
    card_eq_title: "Emotional Quotient",
    card_eq_desc: "Deep analysis of resilience, empathy, and conflict management under pressure.",
    card_adhd_title: "ADHD Neurofocus",
    card_adhd_desc: "Clinical screening based on the WHO gold standard (ASRS-v1.1).",
    card_burnout_title: "Burnout Matrix",
    card_burnout_desc: "Early indicator of chronic stress and occupational exhaustion.",
    card_digital_title: "Dopaminergic Hygiene",
    card_digital_desc: "Calculating the impact of algorithms on your deep focus capacity.",
    card_depression_title: "BDI-II Protocol",
    card_depression_desc: "Beck Depression Inventory for deep clinical screening and monitoring.",
    all: "All",
    questions: "Questions",
    premium: "Premium",
    neural_load: "Neural Load",
    new_protocols: "New Protocols",
    continuous_development: "Continuous Development of Executive Functions"
  },
  business: {
    tag: "MindMetrics for Enterprise",
    title: "Data Intelligence for",
    titleAccent: "Talent Management",
    desc: "Reduce turnover and optimize organizational climate with real psychometric data instead of assumptions.",
    retention: "Predictive Retention",
    retentionDesc: "Identify risks of burnout and disengagement before they become terminations.",
    dataCulture: "Data-Driven Culture",
    dataCultureDesc: "Promotion and hiring decisions based on measurable cultural and technical fit.",
    cta: "Request Enterprise Demo",
    team_analytics: "Team Analytics",
    engineering_dept: "ENGINEERING DEPT",
    balance_index: "Team Balance Index",
    burnout_risk: "Burnout Risk",
    burnout_value: "Low (12%)",
    cultural_fit: "Cultural Fit",
    cultural_value: "Excellent"
  },
  investment: {
    tag: "Plans & Expansion",
    title: "Invest in Your Mental Infrastructure",
    setup: "Individual Setup",
    setupDesc: "Lifetime access to the dashboard and constant updates of AI algorithms.",
    success: "Enterprise Module",
    successDesc: "Aggregated dashboards for teams up to 50 people with included HR consultancy.",
    techTitle: "Cutting-Edge Technology",
    roiTitle: "The Return of Intelligence",
    roiDesc: "Every generated insight saves hours of trial and error in your career and protects your mental health.",
    guarantee: "Commitment to Precision",
    guaranteeDesc: "Our reports are calibrated weekly to ensure the lowest statistical margin of error on the market.",
    items: ["Generative IA Insight Engine", "5 Ultra-High Density Reports", "Team Dashboard (Enterprise Module)", "High Performance Traffic Management", "Bi-weekly Strategy Consulting", "Bank-Level Data Security (GDPR)"],
    roi_label: "ROI Projected",
    roi_sub: "Average Return / 6 Months",
    lead_label: "Lead Quality",
    lead_sub: "High Purchase Intent",
    terms: "Terms applicable based on media investment goals."
  },
  nextSteps: {
    tag: "Immediate Onboarding",
    title: "Ready for Your",
    titleAccent: "Evolution?",
    desc: "Choose a protocol below and receive your first high-density dossier in less than 10 minutes.",
    s1Title: "Choose Focus",
    s1Desc: "Select between career, clinical, or leadership.",
    s2Title: "Neural Assessment",
    s2Desc: "Answer the AI-calibrated questionnaire.",
    s3Title: "Deep Analysis",
    s3Desc: "Mindbot AI crosses your data in seconds.",
    s4Title: "Action Plan",
    s4Desc: "Receive practical and personalized strategies.",
    cta_title: "Your new mental architecture starts here.",
    cta_button: "Start First Test",
    cta_call: "Talk to Consultant"
  },
  reports: {
    common: {
      confidential: "Confidential Document",
      patient: "Patient",
      summary: "Executive Summary",
      attention: "Attention Points",
      interpret: "AI Consultancy",
      risk_indicator: "Clinical Risk Indicator",
      cognitive_signature: "Cognitive Signature",
      benchmarkTitle: "Market Benchmark",
      deepInsights: "Mindbot Deep Analysis",
      neuralSynergy: "Neural Synergy",
      focus: "Focus",
      energy: "Energy",
      control: "Control",
      career_match: "Career Affinity"
    },
    adhd: {
      title: "ADHD Neurofocus",
      subtitle: "Executive Functions Report",
      domains: {
        inattention: "Inattention",
        hyperactivity: "Hyperactivity",
        impulsivity: "Impulsivity"
      },
      archetypes: {
        creative_tornado: { title: "The Creative Tornado", desc: "High energy and creativity, but with severe challenges in finishing and organization." },
        silent_architect: { title: "The Silent Architect", desc: "Internally hyperactive mind, but with low physical agitation. Risk of 'analysis paralysis'." },
        turbo_engine: { title: "Turbo Engine", desc: "Predominantly hyperactive-impulsive profile. Acts before processing all data." }
      },
      dopamine_menu: {
        title: "Dopamine Menu (Strategies)",
        healthy: "Healthy Stimuli",
        unhealthy: "Risk Stimuli",
        h1: "Brisk Walk (10min)",
        h2: "Lo-fi Music / Brown Noise",
        h3: "15min Micro-goals",
        u1: "Infinite Scroll (Social Media)",
        u2: "Excessive Multitasking",
        u3: "Refined Sugar Consumption"
      }
    },
    bigfive: {
      title: "Architecture Dossier",
      subtitle: "Personality Psychometrics",
      traits: {
        openness: "Openness",
        conscientiousness: "Conscientiousness",
        extraversion: "Extraversion",
        agreeableness: "Agreeableness",
        stability: "Stability"
      },
      archetypes: {
        creator: "The Empathic Creator",
        architect: "The Strategic Architect",
        explorer: "The Versatile Explorer"
      }
    }
  },
  common: {
    archetype_dominant: "Dominant Mental Signature",
    calculating: "Processing Signals...",
    mapping_triggers: "Mapping Triggers...",
    finalizing_protocol: "Finalizing Protocol...",
    analysis_complete: "Mapping Finished",
    full_name: "Your Full Name",
    reveal_results: "Generate High Density Dossier",
    back: "Back to Catalog"
  },
  ai_consultation: {
    title: "Mindbot Deep Analysis",
    desc: "Our AI will interpret your psychometric vectors to generate a personalized action plan.",
    loading: "Analyzing Vectors...",
    button: "Request AI Consultancy",
    placeholder: "Ask about your results...",
    error_connect: "An error occurred in the neural connection. Try again.",
    error_network: "Connection interrupted. Check your network.",
    bot_version: "Mindbot v4.5"
  },
  testimonials: {
    tag: "Social Proof",
    title: "Who uses MindMetrics",
    t1: {
      name: "Dr. Sarah Conner",
      role: "HR Director, TechCorp",
      text: "Data precision completely changed our talent retention strategy."
    },
    t2: {
      name: "Marcos Andrade",
      role: "CEO, StartupFlow",
      text: "Essential investment for any team seeking high performance with mental health."
    }
  },
  roadmap: {
    tag: "Roadmap 2024",
    title: "The Future of",
    titleAccent: "Intelligence",
    quote: "Building the ultimate operating system for the human mind.",
    m1: "Q1 2024",
    m1Title: "Neural Foundation",
    m1Desc: "Establishing the pillars of identity and precision.",
    m2: "Q2 2024",
    m2Title: "Protocol Expansion",
    m2Desc: "New tools for neurodiversity and digital well-being.",
    m3: "Q3 2024",
    m3Title: "Enterprise Ecosystem",
    m3Desc: "Massive tools for human capital management.",
    m4: "Q4 2024",
    m4Title: "Mental Health 2.0",
    m4Desc: "Deep clinical integration with health professionals.",
    items_m1: ["Brand Identity Premium", "Ultra-High Density Reports", "AI Infrastructure Deploy"],
    items_m2: ["ADHD Protocol Launch", "Life Loss Calculator", "Digital Detox Module"],
    items_m3: ["Team Dashboard Alpha", "HR Integration API", "Departmental Dashboards"],
    items_m4: ["Burnout Screening v2", "Anxiety/Depression Analysis", "Psychologist Portal"],
    placeholder: "Not found?"
  },
  newsletter: {
    title: "Keep your mind sharp.",
    desc: "Receive weekly insights on neuroscience, productivity, and evidence-based mental health.",
    success_title: "Welcome to MindMetrics!",
    success_desc: "Your journey starts now.",
    placeholder: "Your best email",
    button: "Subscribe",
    disclaimer: "No spam. Cancel anytime."
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about the methodology.",
    q1: "How does AI calibration work?",
    a1: "Our algorithms compare your answers with a global normative base...",
    q2: "Are the data confidential?",
    a2: "Yes, we use end-to-end encryption...",
    q3: "Can I use it for recruitment?",
    a3: "Absolutely. The Enterprise module is focused on that...",
    q4: "What is the scientific validity?",
    a4: "Based on Big Five, IPIP-NEO, and other validated frameworks..."
  },
  dashboard: {
    welcome: "Welcome back, {name}",
    workspace: "Neural Workspace",
    synergy: {
      score: "Synergy Score",
      cognitive: "Cognitive Control",
      stability: "Stability",
      social: "Social Resonance",
      energy: "Dynamic Energy",
      focus: "Executive Focus",
      map_title: "Neural Synergy Map v1.0",
      holistic: "Holistic Synergy",
      desc: "This map crosses data from all your active protocols. It represents the current balance of your 'Digital Twin' between control, stability, and energy."
    },
    pillars: {
      energy: "Energy Pillar",
      energy_status: "Consistency: 92%",
      resilience: "Resilience Pillar",
      resilience_status: "Level: Optimal",
      focus: "Focus Pillar",
      focus_status: "Status: Evolving"
    },
    active_protocols: "Active Protocols",
    no_protocols: "No protocols finished yet.",
    unlock_enterprise: "Complete 3 more tests to unlock the Enterprise Report."
  },
  global: {
    back: "Back to Dashboard",
    synergy_active: "Active Holistic Synergy",
    data_loaded: "Data Loaded",
    analyzed_on: "Analyzed on",
    version: "Gemini 3 Flash v4.5",
    placeholder: "Ask anything about your mental architecture...",
    error_glitch: "Sorry, I had a hiccup in my neural circuits. Can we try again?",
    error_db: "My connection to the database failed. Try again.",
    prompts: {
      career: "My Career Plan",
      career_prompt: "Based on my Big Five and EQ, which careers would be most natural for me?",
      stress: "Stress Management",
      stress_prompt: "Cross-reference my Burnout risk with my ADHD. How can I avoid collapse?",
      relationships: "Relationships",
      relationships_prompt: "Analyze my Agreeableness and Emotional Intelligence to improve my social communication."
    }
  },
  booking: {
    success_title: "Session Scheduled",
    success_desc: "You will receive an email shortly with the Google Meet link.",
    close: "Close Window",
    title: "Schedule Specialist",
    subtitle: "High Performance Human Consulting",
    subject: "Subject",
    date: "Preferred Date",
    obs: "Additional Notes",
    info: "All sessions are recorded for later AI analysis.",
    cta: "Confirm Schedule",
    options: {
      report: "Report Interpretation",
      b2b: "Enterprise Consulting (B2B)",
      support: "Advanced Technical Support"
    }
  },
  test_engine: {
    safety_back: "Return Safely",
    protocol_version: "MindMetrics Care Protocol v1.0",
    question: "Question",
    previous: "Previous"
  },
  bigfive_test: {
    title: "Discover Your Personality",
    subtitle: "Scientific mapping based on the OCEAN model.",
    start: "Start Test",
    question_label: "Question",
    agree: "Agree",
    disagree: "Disagree",
    steps: ["Correlating traits...", "Analyzing behavioral vectors...", "Generating personality map...", "Finalizing report..."],
    engine_version: "MindMetrics Engine v1.0",
    lead_title: "Analysis Ready!",
    lead_desc: "Enter your name to generate the report.",
    placeholder: "Your Name",
    reveal: "Reveal Results",
    retry: "Take the test again",
    questions: {
      q1: "I have a vivid and active imagination.",
      q2: "I often try new things just for variety.",
      q3: "I like to reflect on abstract ideas.",
      q11: "I always complete the tasks I start.",
      q12: "I like to keep my space organized.",
      q21: "I feel energized around other people.",
      q22: "I like to be the center of attention.",
      q31: "I generally trust people's intentions.",
      q32: "I avoid conflict and seek harmony.",
      q41: "I worry about things that might go wrong."
    }
  },
  projections: {
    section_title: "ROI and Growth",
    main_title: "Result Projections (6 Months)",
    metrics: {
      leads_label: "Total Leads",
      leads_cost: "Cost per Lead: R$ 15-30",
      sched_label: "Appointments",
      sched_conv: "Conv. Rate: 15-25%",
      patients_label: "New Patients",
      patients_close: "Closing: 40-60%"
    },
    chart_title: "Revenue Potential in 6 Months (Ticket R$ 250)",
    scenarios: {
      conserv: "Conservative",
      mod: "Moderate",
      opt: "Optimistic"
    },
    media_dist: "Media Distribution (R$ 1.500/mo)",
    media_items: ["ADHD: R$ 400", "Depression: R$ 350", "Career: R$ 300", "Addiction: R$ 250", "Immigration: R$ 200"]
  }
};

export const translations = { pt, en, es: en, fr: en, de: en };
export type TranslationKeys = string;
