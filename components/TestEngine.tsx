
import React, { useState, useEffect, useRef } from 'react';
import { Brain, RefreshCcw, Cpu, CheckCircle2, ChevronRight, ArrowRight, ShieldAlert, Phone, MessageSquare, ArrowLeft } from 'lucide-react';
import { TestConfig, LeadData } from '../types/assessment';
import { useI18n } from '../contexts/I18nContext';
import { useTestSession } from '../hooks/useTestSession';
import { validationService } from '../services/validation.service';

interface TestEngineProps {
  config: TestConfig;
  onSave: (data: any, lead: LeadData) => void;
  onCancel: () => void;
}

const TestEngine: React.FC<TestEngineProps> = ({ config, onSave, onCancel }) => {
  const { t, tl } = useI18n();
  const [phase, setPhase] = useState<'intro' | 'calculator' | 'test' | 'calculating' | 'lead-capture' | 'safety-alert'>('intro');
  const [calcData, setCalcData] = useState<Record<string, number>>({});
  const [lead, setLead] = useState<LeadData>({ name: '', email: '' });
  const [animClass, setAnimClass] = useState("opacity-100 translate-x-0");
  const [loadingStep, setLoadingStep] = useState(0);

  const [timings, setTimings] = useState<Record<number, number>>({});
  const questionStartTime = useRef<number>(Date.now());

  const session = useTestSession(config);

  const steps = [
    t('common.calculating'),
    t('common.mapping_triggers'),
    t('common.finalizing_protocol')
  ];

  useEffect(() => {
    if (phase === 'calculating') {
      const interval = setInterval(() => {
        setLoadingStep(prev => (prev < steps.length - 1 ? prev + 1 : prev));
      }, 700);
      return () => clearInterval(interval);
    }
  }, [phase, steps.length]);

  const handleAnswerClick = (value: number) => {
    if (config.safetyTrigger && session.currentQuestion) {
      if (config.safetyTrigger(session.currentQuestion.id, value)) {
        setPhase('safety-alert');
        return;
      }
    }

    const timeSpent = Date.now() - questionStartTime.current;

    if (session.currentQuestion) {
      const currentQuestionId = session.currentQuestion.id;
      setTimings(prev => ({ ...prev, [currentQuestionId]: timeSpent }));
    }

    setAnimClass("opacity-0 -translate-x-8");
    setTimeout(() => {
      const finished = session.answerQuestion(value);
      if (finished) {
        setPhase('calculating');
        setTimeout(() => setPhase('lead-capture'), 2000);
      } else {
        questionStartTime.current = Date.now();
        setAnimClass("opacity-0 translate-x-8");
        setTimeout(() => setAnimClass("opacity-100 translate-x-0"), 50);
      }
    }, 250);
  };

  const handleBack = () => {
    setAnimClass("opacity-0 translate-x-8");
    setTimeout(() => {
      session.goBack();
      setAnimClass("opacity-0 -translate-x-8");
      setTimeout(() => setAnimClass("opacity-100 translate-x-0"), 50);
    }, 250);
  };

  const handleFinalSave = (e: React.FormEvent) => {
    e.preventDefault();
    const scores = session.calculateScores();
    const reliability = validationService.calculateSessionReliability(session.answers, timings);

    onSave({
      scores,
      calculator: calcData,
      metadata: {
        timings,
        reliability,
        version: "4.7.0-retrospective-navigation",
        timestamp: new Date().toISOString()
      }
    }, lead);
  };

  if (phase === 'safety-alert') {
    return (
      <div className="min-h-screen bg-red-950 flex items-center justify-center p-6 text-white text-center">
        <div className="max-w-xl animate-fade-in-up">
          <ShieldAlert size={80} className="mx-auto text-red-400 mb-8" />
          <h1 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
            {tl(config.safetyAlert?.title)}
          </h1>
          <p className="text-red-200/80 text-lg mb-12 leading-relaxed">
            {tl(config.safetyAlert?.description)}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href={config.safetyAlert?.ctaLink} className="bg-white text-red-900 font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-2xl">
              <Phone size={24} /> {tl(config.safetyAlert?.ctaText)}
            </a>
            <button onClick={onCancel} className="border border-white/20 hover:bg-white/10 font-bold py-5 rounded-2xl flex items-center justify-center gap-3">
              <MessageSquare size={24} /> {t('test_engine.safety_back')}
            </button>
          </div>
          <p className="mt-12 text-xs text-red-300/40 uppercase tracking-widest font-black">{t('test_engine.protocol_version')}</p>
        </div>
      </div>
    );
  }

  const currentQuestion = session.currentQuestion;
  const questionText = tl(currentQuestion?.text);
  const currentOptions = currentQuestion?.options || config.scale || [];

  return (
    <div className="min-h-screen bg-offwhite text-darkgray pt-20">
      {phase === 'intro' && (
        <div className="max-w-4xl mx-auto px-4 py-12 text-center animate-fade-in-up">
          <div className="inline-block p-4 bg-white rounded-full mb-6 shadow-sm border-2 border-sage/10 text-petroleum">
            <Brain size={48} />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-darkgray mb-6 tracking-tight">
            {tl(config.title)} <br />
            <span className={`text-sage italic text-4xl md:text-5xl`}>{tl(config.subtitle)}</span>
          </h1>
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4">
              <button
                onClick={() => {
                  questionStartTime.current = Date.now();
                  setPhase(config.calculator ? 'calculator' : 'test');
                }}
                className="bg-petroleum text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl transition-all hover:-translate-y-1"
              >
                {t('strategy.start')}
              </button>
              <button onClick={onCancel} className="text-gray-400 font-bold hover:text-darkgray transition-colors">{t('nav.back')}</button>
            </div>
          </div>
        </div>
      )}

      {phase === 'calculator' && config.calculator && (
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-white p-10 rounded-[3.5rem] shadow-xl border border-gray-100">
            <h2 className="font-serif text-3xl mb-8 text-center">{tl(config.calculator.title)}</h2>
            <div className="space-y-8 mb-12">
              {config.calculator.inputs.map(input => (
                <div key={input.id}>
                  <div className="flex justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">{tl(input.label)}</label>
                    <span className="font-bold text-petroleum">{calcData[input.id] || 0}{input.unit}</span>
                  </div>
                  <input
                    type="range"
                    min={input.min}
                    max={input.max}
                    step={input.step || 1}
                    value={calcData[input.id] || 0}
                    onChange={(e) => setCalcData({ ...calcData, [input.id]: Number(e.target.value) })}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-petroleum"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() => {
                questionStartTime.current = Date.now();
                setPhase('test');
              }}
              className="w-full bg-petroleum text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black transition-all"
            >
              {t('strategy.start')} <ArrowRight size={20} />
            </button>
          </div>
        </div>
      )}

      {phase === 'test' && currentQuestion && (
        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex flex-col">
              {config.parts && (
                <span className="text-[10px] font-black text-sage uppercase tracking-widest mb-1">
                  {tl(config.parts.find(p => p.id === currentQuestion.part)?.title)}
                </span>
              )}
              <div className="flex items-center gap-4">
                {session.currentIdx > 0 && (
                  <button onClick={handleBack} className="text-gray-300 hover:text-petroleum transition-colors flex items-center gap-1 group">
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{t('test_engine.previous')}</span>
                  </button>
                )}
                <span className={`text-xs font-bold text-petroleum uppercase tracking-widest`}>
                  {t('test_engine.question')} {session.currentIdx + 1}/{session.totalQuestions}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-24 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full bg-petroleum transition-all duration-300`} style={{ width: `${session.progress}%` }}></div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-xl border border-gray-100 text-center min-h-[450px] flex flex-col justify-center">
            <h3 className={`font-serif text-2xl md:text-3xl text-darkgray mb-12 leading-tight transition-all duration-300 ${animClass}`}>
              "{questionText}"
            </h3>
            <div className="space-y-3">
              {currentOptions.map((s, idx) => (
                <button key={idx} onClick={() => handleAnswerClick(s.value)} className="w-full py-5 px-6 rounded-2xl font-medium text-lg border border-gray-100 hover:border-petroleum hover:bg-petroleum/5 transition-all flex justify-between items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">{tl(s.label)}</span>
                  <ChevronRight size={18} className="text-gray-200 group-hover:text-petroleum" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {phase === 'calculating' && (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
          <Cpu className="text-petroleum animate-spin-slow mb-8" size={80} />
          <div className="bg-darkgray text-sage p-6 rounded-2xl shadow-2xl font-mono text-left max-w-sm w-full border border-white/10">
            <p className="text-xs mb-1 text-gray-300 animate-pulse">&gt; {steps[loadingStep]}</p>
          </div>
        </div>
      )}

      {phase === 'lead-capture' && (
        <div className="max-w-md mx-auto px-4 py-12 animate-fade-in-up">
          <div className="bg-white p-8 rounded-3xl shadow-xl text-center border-t-4 border-petroleum">
            <div className="w-16 h-16 bg-petroleum/10 text-petroleum rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={32} />
            </div>
            <h2 className="font-serif text-3xl mb-6 text-darkgray">{t('common.analysis_complete')}</h2>
            <form onSubmit={handleFinalSave}>
              <input
                type="text"
                required
                placeholder={t('common.full_name')}
                className="w-full p-5 rounded-2xl border border-gray-100 mb-4 focus:border-petroleum outline-none bg-offwhite transition-all text-center"
                value={lead.name}
                onChange={e => setLead({ ...lead, name: e.target.value })}
              />
              <button type="submit" className="w-full bg-petroleum text-white py-5 rounded-2xl font-bold shadow-lg transition-all hover:bg-black hover:-translate-y-1">
                {t('common.reveal_results')}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestEngine;
