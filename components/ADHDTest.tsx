import React, { useState, useEffect } from 'react';
import { Brain, ArrowRight, CheckCircle2, RefreshCcw, AlertCircle, Zap, Cpu, Sparkles, Terminal } from 'lucide-react';
import ADHDReport from './ADHDReport';

interface Question {
  id: number;
  text: string;
  part: 'A' | 'B';
  dimension: 'inattention' | 'hyperactivity' | 'impulsivity';
}

interface ADHDTestProps {
    onFinish?: () => void;
    onSave?: (data: any, lead: any) => void;
}

const questions: Question[] = [
  { id: 1, text: "Com que frequência você tem dificuldade para terminar os detalhes finais de um projeto, depois que as partes desafiadoras foram concluídas?", part: 'A', dimension: 'inattention' },
  { id: 2, text: "Com que frequência você tem dificuldade para organizar tarefas e atividades?", part: 'A', dimension: 'inattention' },
  { id: 3, text: "Com que frequência você tem problemas para lembrar de compromissos ou obrigações?", part: 'A', dimension: 'inattention' },
  { id: 4, text: "Quando você precisa fazer algo que exige muito raciocínio, com que frequência você evita ou adia começar?", part: 'A', dimension: 'inattention' },
  { id: 5, text: "Com que frequência você se mexe na cadeira ou torce as mãos ou os pés quando precisa ficar sentado por muito tempo?", part: 'A', dimension: 'hyperactivity' },
  { id: 6, text: "Com que frequência você se sente excessivamente ativo e impelido a fazer coisas, como se estivesse sendo conduzido por um motor?", part: 'A', dimension: 'hyperactivity' },
];

const ADHDTest: React.FC<ADHDTestProps> = ({ onFinish, onSave }) => {
  const [phase, setPhase] = useState<'intro' | 'test' | 'calculating' | 'lead-capture' | 'result'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [lead, setLead] = useState({ name: '', email: '', phone: '' });
  const [animClass, setAnimClass] = useState("opacity-100 translate-x-0");
  const [loadingStep, setLoadingStep] = useState(0);

  const steps = ["Mapeando padrões neurais...", "Correlacionando com base ASRS...", "Calculando índices executivos...", "Finalizando diagnóstico..."];

  useEffect(() => {
    if (phase === 'calculating') {
      const interval = setInterval(() => {
        setLoadingStep(prev => (prev < steps.length - 1 ? prev + 1 : prev));
      }, 600);
      return () => clearInterval(interval);
    }
  }, [phase]);

  const handleReset = () => {
    if (window.confirm("Reiniciar avaliação?")) {
        setPhase('intro');
        setCurrentQuestionIndex(0);
        setAnswers({});
    }
  };

  const handleAnswer = (value: number) => {
    setAnimClass("opacity-0 -translate-x-8");
    setTimeout(() => {
      const newAnswers = { ...answers, [questions[currentQuestionIndex].id]: value };
      setAnswers(newAnswers);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setAnimClass("opacity-0 translate-x-8");
        setTimeout(() => setAnimClass("opacity-100 translate-x-0"), 50);
      } else {
        setPhase('calculating');
        setTimeout(() => setPhase('lead-capture'), 2500); 
      }
    }, 250);
  };

  const calculateScores = () => {
    let partAScore = 0;
    let inattention = 0, hyperactivity = 0, impulsivity = 0;

    questions.forEach(q => {
        const val = answers[q.id] || 0;
        if (q.part === 'A') partAScore += val;
        if (q.dimension === 'inattention') inattention += val;
        if (q.dimension === 'hyperactivity') hyperactivity += val;
        if (q.dimension === 'impulsivity') impulsivity += val;
    });

    const maxInattention = questions.filter(q => q.dimension === 'inattention').length * 4;
    const maxHyper = questions.filter(q => q.dimension === 'hyperactivity').length * 4;
    const maxImpulse = questions.filter(q => q.dimension === 'impulsivity').length * 4 || 1;

    return {
        partA: partAScore,
        inattention: (inattention / maxInattention) * 100,
        hyperactivity: (hyperactivity / (maxHyper || 1)) * 100,
        impulsivity: (impulsivity / (maxImpulse || 1)) * 100,
        answers: answers
    };
  };

  // Fix: Added 'scores' definition to solve "Cannot find name 'scores'" error on line 180
  const scores = (phase === 'result') ? calculateScores() : { partA: 0, inattention: 0, hyperactivity: 0, impulsivity: 0, answers: {} };

  return (
    <div className="min-h-screen bg-offwhite text-darkgray pt-20">
      
      {phase === 'intro' && (
        <div className="max-w-4xl mx-auto px-4 py-12 text-center animate-fade-in-up">
           <div className="inline-block p-4 bg-white rounded-full mb-6 shadow-sm text-terracotta border-2 border-terracotta/10">
            <Zap size={48} strokeWidth={1.5} />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-darkgray mb-6 tracking-tight">
            Avaliação de TDAH <br/> <span className="text-terracotta italic text-4xl md:text-5xl">Em Adultos</span>
          </h1>
          <button 
            onClick={() => setPhase('test')}
            className="bg-petroleum hover:bg-petroleum/90 text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl transition-all hover:-translate-y-1"
          >
            Iniciar Avaliação
          </button>
        </div>
      )}

      {phase === 'test' && (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <div className="mb-4 flex items-center justify-between">
                <div>
                    <span className="text-xs font-bold text-terracotta uppercase tracking-widest block mb-1">Questão {currentQuestionIndex + 1}/{questions.length}</span>
                </div>
                <button onClick={handleReset}><RefreshCcw size={16} className="text-gray-300" /></button>
            </div>
            
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 text-center min-h-[400px] flex flex-col justify-center">
                 <h3 className={`font-serif text-2xl md:text-3xl text-darkgray mb-12 leading-tight transition-all duration-300 ${animClass}`}>
                    "{questions[currentQuestionIndex].text}"
                </h3>
                <div className="space-y-3">
                    {["Nunca", "Raramente", "Às vezes", "Frequentemente", "Muito Frequentemente"].map((label, val) => (
                        <button key={val} onClick={() => handleAnswer(val)} className="w-full py-4 px-6 rounded-xl font-medium text-lg border hover:border-terracotta hover:bg-terracotta/5 hover:text-terracotta transition-all flex justify-between items-center group">
                            <span>{label}</span>
                            <div className="w-4 h-4 rounded-full border-2 border-gray-300 group-hover:border-terracotta"></div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
      )}

      {phase === 'calculating' && (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
             <div className="relative mb-8">
                <Cpu className="text-terracotta animate-spin-slow" size={80} />
                <Sparkles className="absolute -top-2 -right-2 text-petroleum animate-pulse" size={24} />
            </div>
            <div className="bg-darkgray text-sage p-6 rounded-2xl shadow-2xl font-mono text-left max-w-sm w-full border border-white/10">
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2 text-terracotta">
                    <Terminal size={14} />
                    <span className="text-[10px] uppercase tracking-widest font-bold">NeuroMetrics Analyzer</span>
                </div>
                <p className="text-xs mb-1 text-gray-300">&gt; {steps[loadingStep]}</p>
                <div className="w-full bg-white/5 h-1 rounded-full mt-4 overflow-hidden">
                    <div className="h-full bg-terracotta transition-all duration-500" style={{ width: `${(loadingStep + 1) * 25}%` }}></div>
                </div>
            </div>
        </div>
      )}

      {phase === 'lead-capture' && (
        <div className="max-w-md mx-auto px-4 py-12 animate-fade-in-up">
            <div className="bg-white p-8 rounded-3xl shadow-xl text-center border-t-4 border-petroleum">
                <CheckCircle2 size={48} className="text-petroleum mx-auto mb-4" />
                <h2 className="font-serif text-2xl mb-2">Avaliação Concluída</h2>
                <form onSubmit={(e) => { 
                    e.preventDefault(); 
                    if (onSave) onSave(calculateScores(), lead);
                    setPhase('result'); 
                }}>
                    <input type="text" required placeholder="Nome Completo" className="w-full p-4 rounded-lg border border-gray-200 mt-4 focus:border-petroleum outline-none bg-offwhite" value={lead.name} onChange={e => setLead({...lead, name: e.target.value})} />
                    <button type="submit" className="w-full bg-terracotta hover:bg-terracotta/90 text-white py-4 rounded-lg font-bold shadow-lg transition-transform hover:-translate-y-1 mt-4">
                        Ver Diagnóstico
                    </button>
                </form>
            </div>
        </div>
      )}

      {phase === 'result' && (
        <div className="animate-fade-in-up">
            <ADHDReport data={scores} lead={lead} />
            <div className="text-center py-12 bg-offwhite">
                 <button onClick={handleReset} className="text-gray-500 underline hover:text-petroleum">Fazer o teste novamente</button>
            </div>
        </div>
      )}

    </div>
  );
};

export default ADHDTest;