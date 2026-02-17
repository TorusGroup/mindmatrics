
// RIASEC Career Database (O*NET based)
// Simplified for MVP with Primary + Secondary matching logic

export interface CareerSuggestion {
    title: string;
    description: string;
    traits: string[]; // e.g., ['R', 'I']
}

export const CAREER_DATABASE: Record<string, CareerSuggestion[]> = {
    // REALISTIC (R) - The Doers
    'R-I': [
        { title: 'Engenheiro Civil', description: 'Projetar e supervisionar grandes construções e infraestruturas.', traits: ['R', 'I'] },
        { title: 'Desenvolvedor de Software', description: 'Criar sistemas e aplicações resolvendo problemas lógicos.', traits: ['R', 'I'] }, // Modern interpretation
        { title: 'Técnico de Laboratório', description: 'Operar equipamentos para testes e diagnósticos.', traits: ['R', 'I'] },
    ],
    'R-A': [
        { title: 'Arquiteto', description: 'Unir técnica de construção com design estético.', traits: ['R', 'A'] },
        { title: 'Chef de Cozinha', description: 'Execução prática com toque criativo na gastronomia.', traits: ['R', 'A'] },
        { title: 'Designer de Produtos', description: 'Criar objetos funcionais e estéticos.', traits: ['R', 'A'] }
    ],
    'R-S': [
        { title: 'Fisioterapeuta', description: 'Trabalho físico direto para reabilitação de pacientes.', traits: ['R', 'S'] },
        { title: 'Bombeiro', description: 'Ação física intensa para proteção da comunidade.', traits: ['R', 'S'] },
        { title: 'Personal Trainer', description: 'Instrução prática de exercícios físicos.', traits: ['R', 'S'] }
    ],
    'R-E': [
        { title: 'Engenheiro de Produção', description: 'Otimizar processos industriais e de negócios.', traits: ['R', 'E'] },
        { title: 'Construtor / Empreiteiro', description: 'Gerenciar obras e projetos físicos.', traits: ['R', 'E'] },
        { title: 'Gerente de Logística', description: 'Coordenação prática da cadeia de suprimentos.', traits: ['R', 'E'] }
    ],
    'R-C': [
        { title: 'Piloto de Avião', description: 'Operação de máquinas complexas seguindo protocolos rígidos.', traits: ['R', 'C'] },
        { title: 'Analista de Qualidade', description: 'inspeção técnica baseada em normas.', traits: ['R', 'C'] },
        { title: 'Contador Técnico', description: 'Gestão precisa de registros financeiros.', traits: ['R', 'C'] }
    ],

    // INVESTIGATIVE (I) - The Thinkers
    'I-R': [
        { title: 'Cientista de Dados', description: 'Análise profunda de dados para resolver problemas.', traits: ['I', 'R'] },
        { title: 'Engenheiro Eletricista', description: 'Desenvolvimento de sistemas elétricos complexos.', traits: ['I', 'R'] },
        { title: 'Médico (Cirurgião)', description: 'Diagnóstico preciso e intervenção técnica.', traits: ['I', 'R'] }
    ],
    'I-A': [
        { title: 'Psicólogo', description: 'Análise profunda da mente humana e comportamento.', traits: ['I', 'A'] },
        { title: 'Escritor Técnico', description: 'Traduzir conceitos complexos de forma clara.', traits: ['I', 'A'] },
        { title: 'UX Researcher', description: 'Investigar comportamento do usuário para design.', traits: ['I', 'A'] }
    ],
    'I-S': [
        { title: 'Médico (Geral)', description: 'Diagnóstico clínico focado no cuidado ao paciente.', traits: ['I', 'S'] },
        { title: 'Professor Universitário', description: 'Pesquisa acadêmica e ensino.', traits: ['I', 'S'] },
        { title: 'Nutricionista', description: 'Ciência dos alimentos aplicada à saúde das pessoas.', traits: ['I', 'S'] }
    ],
    'I-E': [
        { title: 'Consultor de Estratégia', description: 'Análise de mercado para decisões de negócios.', traits: ['I', 'E'] },
        { title: 'Gestor de Investimentos', description: 'Análise financeira para maximizar lucros.', traits: ['I', 'E'] },
        { title: 'CTO (Chief Tech Officer)', description: 'Liderança executiva de tecnologia.', traits: ['I', 'E'] }
    ],
    'I-C': [
        { title: 'Analista Financeiro', description: 'Avaliação lógica de dados econômicos.', traits: ['I', 'C'] },
        { title: 'Atuário', description: 'Cálculo de riscos e estatísticas.', traits: ['I', 'C'] },
        { title: 'Auditor', description: 'Verificação minuciosa de conformidade.', traits: ['I', 'C'] }
    ],

    // ARTISTIC (A) - The Creators
    'A-R': [
        { title: 'Fotógrafo', description: 'Expressão visual usando equipamento técnico.', traits: ['A', 'R'] },
        { title: 'Designer de Interiores', description: 'Criação de espaços físicos e estéticos.', traits: ['A', 'R'] },
        { title: 'Editor de Vídeo', description: 'Narrativa criativa através de software técnico.', traits: ['A', 'R'] }
    ],
    'A-I': [
        { title: 'Arquiteto de Software', description: 'Design estrutural de sistemas complexos.', traits: ['A', 'I'] },
        { title: 'Gerente de Inovação', description: 'Criar novas soluções baseadas em pesquisa.', traits: ['A', 'I'] },
        { title: 'Filósofo / Teórico', description: 'Exploração criativa de ideias abstratas.', traits: ['A', 'I'] }
    ],
    'A-S': [
        { title: 'Professor de Artes', description: 'Ensinar expressão criativa.', traits: ['A', 'S'] },
        { title: 'Terapeuta Ocupacional', description: 'Reabilitação através de atividades criativas.', traits: ['A', 'S'] },
        { title: 'Diretor de RH (Cultura)', description: 'Moldar a cultura e ambiente humano da empresa.', traits: ['A', 'S'] }
    ],
    'A-E': [
        { title: 'Diretor de Marketing', description: 'Criatividade aplicada à persuasão e vendas.', traits: ['A', 'E'] },
        { title: 'Empreendedor Criativo', description: 'Liderar negócios em moda, mídia ou design.', traits: ['A', 'E'] },
        { title: 'Jornalista', description: 'Comunicação influente e narrativa.', traits: ['A', 'E'] }
    ],
    'A-C': [
        { title: 'Editor de Texto', description: 'Criatividade dentro de regras gramaticais.', traits: ['A', 'C'] },
        { title: 'Bibliotecário', description: 'Organização de conhecimento e cultura.', traits: ['A', 'C'] },
        { title: 'Designer Gráfico (Editorial)', description: 'Layout criativo com estrutura rígida.', traits: ['A', 'C'] }
    ],

    // SOCIAL (S) - The Helpers
    'S-R': [
        { title: 'Enfermeiro', description: 'Cuidado humano com procedimentos técnicos.', traits: ['S', 'R'] },
        { title: 'Veterinário', description: 'Cuidado médico de animais.', traits: ['S', 'R'] },
        { title: 'Atendente de Emergência', description: 'Ajuda direta em situações físicas críticas.', traits: ['S', 'R'] }
    ],
    'S-I': [
        { title: 'Psicólogo Clínico', description: 'Diagnóstico e tratamento de saúde mental.', traits: ['S', 'I'] },
        { title: 'Assistente Social', description: 'Análise de casos e suporte comunitário.', traits: ['S', 'I'] },
        { title: 'Orientador Vocacional', description: 'Ajudar outros a encontrar seu caminho com análise.', traits: ['S', 'I'] }
    ],
    'S-A': [
        { title: 'Professor (Humanas)', description: 'Inspirar alunos através de literatura e história.', traits: ['S', 'A'] },
        { title: 'Conselheiro Tutelar', description: 'Proteção criativa do bem-estar de jovens.', traits: ['S', 'A'] },
        { title: 'Relações Públicas', description: 'Gestão da imagem e relacionamento com o público.', traits: ['S', 'A'] }
    ],
    'S-E': [
        { title: 'Gerente de RH', description: 'Liderança focada em pessoas e talentos.', traits: ['S', 'E'] },
        { title: 'Diretor de Escola', description: 'Gestão educacional e liderança comunitária.', traits: ['S', 'E'] },
        { title: 'Vendedor Consultivo', description: 'Vendas focadas em relacionamento e ajuda.', traits: ['S', 'E'] }
    ],
    'S-C': [
        { title: 'Secretário Executivo', description: 'Organização e suporte pessoal a liderança.', traits: ['S', 'C'] },
        { title: 'Recepcionista', description: 'Primeiro contato humano com organização.', traits: ['S', 'C'] },
        { title: 'Analista de Treinamento', description: 'Organizar e aplicar programas de ensino.', traits: ['S', 'C'] }
    ],

    // ENTERPRISING (E) - The Persuaders
    'E-R': [
        { title: 'Gerente de Obras', description: 'Liderança em ambientes de construção.', traits: ['E', 'R'] },
        { title: 'Comprador Industrial', description: 'Negociação de materiais técnicos.', traits: ['E', 'R'] },
        { title: 'Fazendeiro / Agronegócio', description: 'Gestão de negócios rurais.', traits: ['E', 'R'] }
    ],
    'E-I': [
        { title: 'Advogado Corporativo', description: 'Estratégia legal e argumentação.', traits: ['E', 'I'] },
        { title: 'Gerente de TI', description: 'Liderança de equipes técnicas.', traits: ['E', 'I'] },
        { title: 'Consultor de Gestão', description: 'Resolução de problemas de negócios.', traits: ['E', 'I'] }
    ],
    'E-A': [
        { title: 'Diretor de Criação', description: 'Liderança de equipes artísticas.', traits: ['E', 'A'] },
        { title: 'Produtor de Eventos', description: 'Coordenação criativa e logística.', traits: ['E', 'A'] },
        { title: 'Publicitário', description: 'Criação de campanhas persuasivas.', traits: ['E', 'A'] }
    ],
    'E-S': [
        { title: 'Gerente de Hotel', description: 'Liderança em hospitalidade.', traits: ['E', 'S'] },
        { title: 'Político', description: 'Liderança comunitária e persuasão pública.', traits: ['E', 'S'] },
        { title: 'Corretor de Imóveis', description: 'Vendas através de networking.', traits: ['E', 'S'] }
    ],
    'E-C': [
        { title: 'Gerente Financeiro', description: 'Liderança sobre fluxo de caixa e relatórios.', traits: ['E', 'C'] },
        { title: 'Gerente Bancário', description: 'Gestão de contas e relacionamentos financeiros.', traits: ['E', 'C'] },
        { title: 'Administrador de Empresas', description: 'Gestão geral e processos.', traits: ['E', 'C'] }
    ],

    // CONVENTIONAL (C) - The Organizers
    'C-R': [
        { title: 'Inspetor de Segurança', description: 'Verificação rigorosa de normas em campo.', traits: ['C', 'R'] },
        { title: 'Operador de Dados', description: 'Entrada e processamento preciso de dados.', traits: ['C', 'R'] },
        { title: 'Técnico de Contabilidade', description: 'Registros financeiros práticos.', traits: ['C', 'R'] }
    ],
    'C-I': [
        { title: 'Analista de Sistemas', description: 'Documentação e lógica de software.', traits: ['C', 'I'] },
        { title: 'Estatístico', description: 'Organização e análise de dados numéricos.', traits: ['C', 'I'] },
        { title: 'Perito Criminal', description: 'Análise forense detalhada.', traits: ['C', 'I'] }
    ],
    'C-A': [
        { title: 'Editor (Revisão)', description: 'Correção detalhada de textos criativos.', traits: ['C', 'A'] },
        { title: 'Arquivista de Museu', description: 'Catalogação de obras de arte.', traits: ['C', 'A'] },
        { title: 'Designer Web (Front-end)', description: 'Implementação precisa de layouts.', traits: ['C', 'A'] }
    ],
    'C-S': [
        { title: 'Assistente Administrativo', description: 'Suporte organizacional a equipes.', traits: ['C', 'S'] },
        { title: 'Caixa Bancário', description: 'Atendimento e precisão financeira.', traits: ['C', 'S'] },
        { title: 'Agente de Viagens', description: 'Organização detalhada de roteiros para clientes.', traits: ['C', 'S'] }
    ],
    'C-E': [
        { title: 'Contador', description: 'Gestão fiscal e tributária de negócios.', traits: ['C', 'E'] },
        { title: 'Analista de Crédito', description: 'Avaliação de risco financeiro.', traits: ['C', 'E'] },
        { title: 'Gerente de Qualidade', description: 'Implementação de processos ISO.', traits: ['C', 'E'] }
    ]
};
