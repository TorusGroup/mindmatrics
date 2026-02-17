
import { Language } from '../i18n/translations';

export type ReportType = 'bigfive' | 'adhd' | 'digital_addiction' | 'burnout' | 'eq' | 'depression' | 'impostor' | 'gad7' | 'riasec';

export interface LocalizedText {
  pt: string;
  en: string;
  es: string;
  fr: string;
  de: string;
}

export interface QuestionOption {
  label: LocalizedText;
  value: number;
}

export interface Question {
  id: number;
  text: LocalizedText;
  dimension: string;
  part?: 'A' | 'B';
  options?: QuestionOption[];
}

export interface CalculatorInput {
  id: string;
  label: LocalizedText;
  min: number;
  max: number;
  unit: string;
  step?: number;
}

export interface TechnicalData {
  instrument: string;
  citation: string;
  reliabilityIndex: string;
  normativeData: string;
}

export interface SafetyAlert {
  title: LocalizedText;
  description: LocalizedText;
  ctaText: LocalizedText;
  ctaLink: string;
}

export interface TestConfig {
  id: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  category: LocalizedText;
  questions: Question[];
  scale?: QuestionOption[];
  parts?: {
    id: 'A' | 'B';
    title: LocalizedText;
  }[];
  calculator?: {
    title: LocalizedText;
    inputs: CalculatorInput[];
  };
  technicalData?: TechnicalData;
  accentColor: string;
  reportType: ReportType;
  // Novo: Lógica modular de segurança
  safetyTrigger?: (questionId: number, value: number) => boolean;
  safetyAlert?: SafetyAlert;
}

export interface LeadData {
  name: string;
  email: string;
  phone?: string;
}

export interface AssessmentResult {
  type: string;
  data: any;
  lead: LeadData;
  date: string;
  metadata?: {
    reliability: number;
    version: string;
    timestamp: string;
    timings: Record<number, number>;
  };
}
