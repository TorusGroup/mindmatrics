
import { useState, useCallback } from 'react';
import { TestConfig } from '../types/assessment';

export const useTestSession = (config: TestConfig) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isComplete, setIsComplete] = useState(false);

  const answerQuestion = useCallback((value: number) => {
    setAnswers(prev => ({ ...prev, [config.questions[currentIdx].id]: value }));
    
    if (currentIdx < config.questions.length - 1) {
      setCurrentIdx(prev => prev + 1);
      return false;
    } else {
      setIsComplete(true);
      return true;
    }
  }, [currentIdx, config]);

  const goBack = useCallback(() => {
    if (currentIdx > 0) {
      setCurrentIdx(prev => prev - 1);
    }
  }, [currentIdx]);

  const calculateScores = useCallback(() => {
    const rawScores: Record<string, { sum: number; count: number }> = {};
    
    const maxVal = config.scale 
        ? Math.max(...config.scale.map(s => s.value)) 
        : Math.max(...(config.questions[0]?.options?.map(o => o.value) || [5]));

    config.questions.forEach(q => {
      if (!rawScores[q.dimension]) rawScores[q.dimension] = { sum: 0, count: 0 };
      const val = answers[q.id] !== undefined ? answers[q.id] : 0;
      rawScores[q.dimension].sum += val;
      rawScores[q.dimension].count += 1;
    });

    const final: Record<string, number> = {};
    let totalSum = 0;
    let totalCount = 0;

    Object.keys(rawScores).forEach(dim => {
      const { sum, count } = rawScores[dim];
      const maxPossibleForDim = count * maxVal;
      final[dim] = (sum / maxPossibleForDim) * 100;
      totalSum += sum;
      totalCount += count;
    });

    final['globalScore'] = (totalSum / (totalCount * maxVal)) * 100;

    return final;
  }, [answers, config]);

  const reset = () => {
    setCurrentIdx(0);
    setAnswers({});
    setIsComplete(false);
  };

  return {
    currentIdx,
    answers,
    currentQuestion: config.questions[currentIdx],
    progress: ((currentIdx + 1) / config.questions.length) * 100,
    isComplete,
    answerQuestion,
    goBack,
    calculateScores,
    reset,
    totalQuestions: config.questions.length
  };
};
