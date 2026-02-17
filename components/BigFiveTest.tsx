
import React, { useState, useEffect } from 'react';
import { Brain, RefreshCcw, Cpu, CheckCircle2, Terminal, Sparkles } from 'lucide-react';
import BigFiveReport from './BigFiveReport';
import { useI18n } from '../contexts/I18nContext';

interface Question {
  id: number;
  textKey: string;
  dimension: 'openness' | 'conscientiousness' | 'extraversion' | 'agreeableness' | 'neuroticism';
}

interface BigFiveTestProps {
  onFinish?: () => void;
  onSave?: (data: any, lead: any) => void;
}

const questionsConfig: Question[] = [
  { id: 1, textKey: "reports.bigfive_test.questions.q1", dimension: 'openness' },
  { id: 2, textKey: "reports.bigfive_test.questions.q2", dimension: 'openness' },
  { id: 3, textKey: "reports.bigfive_test.questions.q3", dimension: 'openness' },
  { id: 11, textKey: "reports.bigfive_test.questions.q11", dimension: 'conscientiousness' },
  { id: 12, textKey: "reports.bigfive_test.questions.q12", dimension: 'conscientiousness' },
  { id: 21, textKey: "reports.bigfive_test.questions.q21", dimension: 'extraversion' },
  { id: 22, textKey: "reports.bigfive_test.questions.q22", dimension: 'extraversion' },
  { id: 31, textKey: "reports.bigfive_test.questions.q31", dimension: 'agreeableness' },
  { id: 32, textKey: "reports.bigfive_test.questions.q32", dimension: 'agreeableness' },
  { id: 41, textKey: "reports.bigfive_test.questions.q41", dimension: 'neuroticism' },
];

const BigFiveTest: React.FC<BigFiveTestProps> = ({ onFinish, onSave }) => {
  const { t } = useI18n();
  const [phase, setPhase] = useState<'intro' | 'test' | 'calculating' | 'lead-capture' | 'result'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [lead, setLead] = useState({ name: '', email: '', phone: '' });
  const [animClass, setAnimClass] = useState("opacity-100 translate-x-0");
  const [loadingStep, setLoadingStep] = useState(0);

  const steps = t('bigfive_test.steps') as string[];

  const questions = questionsConfig.map(q => ({
    ...q,
    text: t(q.textKey.replace('reports.', '') as any) // Small fix to match key structure if needed, but assuming direct key usage
  }));

  useEffect(() => {
    if (phase === 'calculating') {
      const interval = setInterval(() => {
        setLoadingStep(prev => (prev < steps.length - 1 ? prev + 1 : prev));
      }, 600);
      return () => clearInterval(interval);
    }
  }, [phase, steps.length]);

  const handleReset = () => {
    if (window.confirm(t('bigfive_test.retry') + "?")) {
      setPhase('intro');
      setCurrentQuestionIndex(0);
      setAnswers({});
    }
  };

  const handleAnswer = (value: number) => {
    setAnimClass("opacity-0 -translate-x-8");
    setTimeout(() => {
      const newAnswers = { ...answers, [questionsConfig[currentQuestionIndex].id]: value };
      setAnswers(newAnswers);

      if (currentQuestionIndex < questionsConfig.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setAnimClass("opacity-0 translate-x-8");
        setTimeout(() => setAnimClass("opacity-100 translate-x-0"), 50);
      } else {
        setPhase('calculating');
        setTimeout(() => setPhase('lead-capture'), 2500);
      }
    }, 300);
  };

  const calculateScores = () => {
    const scores = { openness: 0, conscientiousness: 0, extraversion: 0, agreeableness: 0, neuroticism: 0 };
    let counts = { openness: 0, conscientiousness: 0, extraversion: 0, agreeableness: 0, neuroticism: 0 };

    questionsConfig.forEach(q => {
      if (answers[q.id]) {
        scores[q.dimension] += answers[q.id];
        counts[q.dimension] += 1;
      }
    });

    return {
      openness: (scores.openness / (counts.openness * 5)) * 100 || 50,
      conscientiousness: (scores.conscientiousness / (counts.conscientiousness * 5)) * 100 || 50,
      extraversion: (scores.extraversion / (counts.extraversion * 5)) * 100 || 50,
      agreeableness: (scores.agreeableness / (counts.agreeableness * 5)) * 100 || 50,
      stability: 100 - ((scores.neuroticism / (counts.neuroticism * 5)) * 100 || 50)
    };
  };

  const scores = (phase === 'result') ? calculateScores() : { openness: 0, conscientiousness: 0, extraversion: 0, agreeableness: 0, stability: 0 };

  return (
    <div className="min-h-screen bg-offwhite text-darkgray pt-20">

      {phase === 'intro' && (
        <div className="max-w-4xl mx-auto px-4 py-12 text-center animate-fade-in-up">
          <div className="inline-block p-4 bg-white rounded-full mb-6 shadow-sm text-petroleum">
            <Brain size={48} strokeWidth={1.5} />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-petroleum mb-6 tracking-tight">
            {t('bigfive_test.title')}
          </h1>
          <p className="text-xl text-sage mb-12 max-w-2xl mx-auto">
            {t('bigfive_test.subtitle')}
          </p>
          <button
            onClick={() => setPhase('test')}
            className="bg-terracotta hover:bg-terracotta/90 text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl transition-all hover:-translate-y-1"
          >
            {t('bigfive_test.start')}
          </button>
        </div>
      )}

      {phase === 'test' && (
        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="mb-8 flex items-center justify-between">
            <span className="text-sm font-bold text-gray-400">{t('bigfive_test.question_label')} {currentQuestionIndex + 1}/{questionsConfig.length}</span>
            <button onClick={handleReset}><RefreshCcw size={16} className="text-gray-300" /></button>
          </div>

          <div className="bg-white p-8 md:p-16 rounded-3xl shadow-xl border border-gray-100 text-center">
            <h3 className={`font-serif text-3xl md:text-4xl text-darkgray mb-16 leading-tight transition-all duration-300 ${animClass}`}>
              "{t(`bigfive_test.questions.q${questionsConfig[currentQuestionIndex].id}` as any)}"
            </h3>
            <div className="grid grid-cols-5 gap-3 md:gap-6">
              {[1, 2, 3, 4, 5].map((val) => (
                <button
                  key={val}
                  onClick={() => handleAnswer(val)}
                  className="py-6 rounded-xl font-bold text-xl border-2 hover:border-petroleum hover:bg-petroleum/5 transition-all"
                >
                  {val}
                </button>
              ))}
            </div>
            <div className="flex justify-between px-4 mt-6 text-xs text-gray-400 font-bold uppercase tracking-widest">
              <span>{t('bigfive_test.disagree')}</span>
              <span>{t('bigfive_test.agree')}</span>
            </div>
          </div>
        </div>
      )}

      {phase === 'calculating' && (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
          <div className="relative mb-8">
            <Cpu className="text-petroleum animate-spin-slow" size={80} />
            <Sparkles className="absolute -top-2 -right-2 text-terracotta animate-pulse" size={24} />
          </div>
          <div className="bg-darkgray text-sage p-6 rounded-2xl shadow-2xl font-mono text-left max-w-sm w-full border border-white/10">
            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
              <Terminal size={14} />
              <span className="text-[10px] uppercase tracking-widest font-bold">{t('bigfive_test.engine_version')}</span>
            </div>
            <p className="text-xs mb-1">&gt; {steps[loadingStep]}</p>
            <div className="w-full bg-white/5 h-1 rounded-full mt-4 overflow-hidden">
              <div className="h-full bg-sage transition-all duration-500" style={{ width: `${(loadingStep + 1) * 25}%` }}></div>
            </div>
          </div>
        </div>
      )}

      {phase === 'lead-capture' && (
        <div className="max-w-md mx-auto px-4 py-12">
          <div className="bg-white p-8 rounded-3xl shadow-xl text-center">
            <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
            <h2 className="font-serif text-2xl mb-2">{t('bigfive_test.lead_title')}</h2>
            <p className="text-gray-500 mb-6">{t('bigfive_test.lead_desc')}</p>
            <form onSubmit={(e) => {
              e.preventDefault();
              if (onSave) onSave(calculateScores(), lead);
              setPhase('result');
            }}>
              <input
                type="text" required placeholder={t('bigfive_test.placeholder')}
                className="w-full p-4 rounded-lg border border-gray-200 mb-4 focus:border-petroleum outline-none bg-offwhite"
                value={lead.name} onChange={e => setLead({ ...lead, name: e.target.value })}
              />
              <button type="submit" className="w-full bg-petroleum text-white py-4 rounded-lg font-bold">
                {t('bigfive_test.reveal')}
              </button>
            </form>
          </div>
        </div>
      )}

      {phase === 'result' && (
        <div className="animate-fade-in-up">
          <BigFiveReport data={scores} lead={lead} />
          <div className="text-center py-12">
            <button onClick={handleReset} className="text-gray-500 underline">{t('bigfive_test.retry')}</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default BigFiveTest;