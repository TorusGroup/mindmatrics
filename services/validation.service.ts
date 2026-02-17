
import { TestConfig } from '../types/assessment';

export const validationService = {
  /**
   * Calcula um índice de confiabilidade da sessão de teste (0-100)
   * Baseado em: Latência de resposta e padrões de repetição excessiva.
   */
  calculateSessionReliability: (answers: Record<number, number>, timings: Record<number, number>): number => {
    const values = Object.values(answers);
    const times = Object.values(timings);
    
    if (values.length < 5) return 100;

    // 1. Checar respostas idênticas seguidas (Straight-lining)
    let straightLiningCount = 0;
    for (let i = 1; i < values.length; i++) {
      if (values[i] === values[i - 1]) straightLiningCount++;
    }
    const straightLiningPenalty = (straightLiningCount / values.length) * 40;

    // 2. Checar tempo médio de resposta (muito rápido = falta de leitura)
    const avgTime = times.reduce((a, b) => a + b, 0) / times.length;
    const speedPenalty = avgTime < 1500 ? 30 : 0; // Penaliza se média < 1.5s por questão

    const reliability = 100 - straightLiningPenalty - speedPenalty;
    return Math.max(0, Math.min(100, reliability));
  },

  getTechnicalMetadata: (testId: string) => {
    const registry: Record<string, any> = {
      adhd: {
        source: "World Health Organization (WHO)",
        instrument: "ASRS-v1.1",
        reliability: "Cronbach's α: 0.88 - 0.94",
        population: "Global Adult Population",
        methodology: "Self-report Likert Scale"
      },
      bigfive: {
        source: "Goldberg et al. (1992) / Costa & McCrae",
        instrument: "IPIP-NEO Framework",
        reliability: "Cronbach's α: 0.79 - 0.87",
        population: "General Adult",
        methodology: "OCEAN Dimensional Mapping"
      },
      depression: {
        source: "Aaron T. Beck (1996)",
        instrument: "BDI-II (Beck Depression Inventory)",
        reliability: "Cronbach's α: 0.92",
        population: "Clinical and General",
        methodology: "Symptom Severity Assessment"
      }
    };
    return registry[testId] || { source: "General Psychometric Standard", instrument: "Validated Instrument" };
  }
};
