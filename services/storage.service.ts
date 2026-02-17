import { AssessmentResult } from '../types/assessment';

const STORAGE_KEY = 'mindmetrics_results';

export const storageService = {
  saveResult: (result: AssessmentResult): AssessmentResult[] => {
    const history = storageService.getResults();
    const updated = [result, ...history].slice(0, 20); // Mantém os últimos 20
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  },

  getResults: (): AssessmentResult[] => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  },

  clearHistory: () => {
    localStorage.removeItem(STORAGE_KEY);
  }
};