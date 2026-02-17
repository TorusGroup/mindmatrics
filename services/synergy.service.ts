
import { AssessmentResult } from '../types/assessment';

export interface SynergyMap {
  cognitiveControl: number;
  emotionalStability: number;
  socialResonance: number;
  dynamicEnergy: number;
  executiveFocus: number;
}

export const synergyService = {
  calculateSynergy: (results: AssessmentResult[]): SynergyMap => {
    const scores: Record<string, number[]> = {
      cognitive: [],
      stability: [],
      social: [],
      energy: [],
      focus: []
    };

    results.forEach(res => {
      const data = res.data.scores || res.data;
      
      if (res.type === 'bigfive') {
        scores.focus.push(data.conscientiousness || 50);
        scores.stability.push(data.stability || 50);
        scores.social.push(data.agreeableness || 50);
        scores.energy.push(data.extraversion || 50);
      }
      
      if (res.type === 'adhd') {
        scores.cognitive.push(100 - (data.impulsivity || 50));
        scores.focus.push(100 - (data.inattention || 50));
        scores.energy.push(data.hyperactivity || 50);
      }

      if (res.type === 'eq') {
        scores.cognitive.push(data.self_regulation || 50);
        scores.stability.push(data.self_awareness || 50);
        scores.social.push(data.empathy || 50);
        scores.social.push(data.social_skills || 50);
      }

      if (res.type === 'digital_addiction') {
        scores.cognitive.push(data.control || 50);
        scores.focus.push(data.control || 50);
      }

      if (res.type === 'burnout') {
        scores.stability.push(100 - (data.exhaustion || 50));
        scores.focus.push(data.accomplishment || 50);
      }
    });

    const average = (arr: number[]) => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 50;

    return {
      cognitiveControl: average(scores.cognitive),
      emotionalStability: average(scores.stability),
      socialResonance: average(scores.social),
      dynamicEnergy: average(scores.energy),
      executiveFocus: average(scores.focus)
    };
  }
};
