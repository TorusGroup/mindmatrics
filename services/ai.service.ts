
import { GoogleGenAI } from "@google/genai";
import { Language } from '../i18n/translations';
import { AssessmentResult } from '../types/assessment';

export const AI_MODELS = {
  FLASH: 'gemini-3-flash-preview',
  PRO: 'gemini-3-pro-preview'
};

const langNames: Record<string, string> = { 
  pt: 'Português', en: 'English', es: 'Español', fr: 'Français', de: 'Deutsch' 
};

export class AIService {
  private getBaseSystemInstruction(userName: string, language: Language, isHighRisk: boolean = false): string {
    const targetLang = langNames[language] || 'Português';
    let base = `Você é o Mindbot v4.5, uma Inteligência Artificial especializada em Psicometria e Neurociência. 
    Seu objetivo é ajudar ${userName} a entender sua própria arquitetura mental.
    Sempre responda em ${targetLang}. 
    Seja empático, clínico, mas extremamente prático em seus conselhos.
    Use formatação Markdown para facilitar a leitura.`;

    if (isHighRisk) {
      base += `\n\n🚨 AVISO DE SEGURANÇA CRÍTICO: Os dados do usuário indicam alto risco de depressão ou sofrimento mental severo. 
      Sua prioridade número 1 é ser extremamente acolhedor, validar os sentimentos dele e SEMPRE reforçar que a ajuda profissional é necessária. 
      Nunca dê diagnósticos definitivos, foque em 'padrões observados' e 'próximos passos de cuidado'.`;
    }

    return base;
  }

  async getPsychometricInsight(
    userName: string, 
    testType: string, 
    scores: any, 
    language: Language,
    history: { role: 'user' | 'bot', content: string }[] = []
  ) {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Check for high risk in depression tests
    const isHighRisk = testType === 'depression' && (scores.globalScore > 60 || scores.suicidability > 0);

    const systemInstruction = `${this.getBaseSystemInstruction(userName, language, isHighRisk)}
    CONTEXTO ATUAL: O usuário acabou de finalizar o teste ${testType}.
    DADOS DO TESTE: ${JSON.stringify(scores)}.
    Foque sua análise inicial nestes resultados específicos.`;

    const contents = history.map(m => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    if (contents.length === 0) {
      contents.push({ role: 'user', parts: [{ text: `Gere uma análise profunda inicial dos meus resultados de ${testType}.` }] });
    }

    try {
      const response = await ai.models.generateContent({
        model: AI_MODELS.FLASH,
        contents,
        config: { systemInstruction }
      });
      return response.text || "Análise indisponível no momento.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      throw new Error("Falha na conexão neural.");
    }
  }

  async getGlobalInsight(
    userName: string,
    results: AssessmentResult[],
    language: Language,
    history: { role: 'user' | 'bot', content: string }[] = []
  ) {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const depressionResult = results.find(r => r.type === 'depression');
    const isHighRisk = !!(depressionResult && (depressionResult.data.scores?.globalScore > 60));

    const resultsSummary = results.map(r => ({
      teste: r.type,
      data: r.date,
      scores: r.data.scores || r.data
    }));

    const systemInstruction = `${this.getBaseSystemInstruction(userName, language, isHighRisk)}
    MEMÓRIA NEURAL (Histórico Completo): ${JSON.stringify(resultsSummary)}.
    Você tem acesso a todos os testes realizados pelo usuário. Seu papel agora é cruzar esses dados.
    Por exemplo, se o usuário tem alto TDAH e alta Amabilidade, como isso se manifesta na vida dele?
    Foque em Sinergia e Desenvolvimento Holístico.`;

    const contents = history.map(m => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    if (contents.length === 0) {
      contents.push({ role: 'user', parts: [{ text: "Mindbot, com base em todos os meus testes, qual é o meu maior ponto cego e minha maior força estratégica hoje?" }] });
    }

    try {
      const response = await ai.models.generateContent({
        model: AI_MODELS.FLASH,
        contents,
        config: { systemInstruction }
      });
      return response.text || "Memória neural indisponível.";
    } catch (error) {
      console.error("Global AI Error:", error);
      throw new Error("Erro na integração holística.");
    }
  }
}

export const aiService = new AIService();
