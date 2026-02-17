
import React, { useState } from 'react';
import { Brain, Zap, Smartphone, Flame, Users, Activity, ShieldCheck, HeartPulse, Layers, Star, ArrowRight, Filter, Wind, Compass } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';

interface StrategyProps {
  onSelectTest: (id: string) => void;
}

const Strategy: React.FC<StrategyProps> = ({ onSelectTest }) => {
  const { t } = useI18n();
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: t('strategy.all') },
    { id: 'personality', label: t('strategy.personality') },
    { id: 'leadership', label: t('strategy.leadership') },
    { id: 'mental', label: t('strategy.mentalHealth') }
  ];

  const tests = [
    {
      id: "bigfive",
      title: t('strategy.card_bigfive_title'),
      category: t('strategy.personality'),
      categoryId: 'personality',
      desc: t('strategy.card_bigfive_desc'),
      badge: "Framework OCEAN",
      color: "bg-petroleum",
      icon: Brain,
      count: 50
    },
    {
      id: "eq",
      title: t('strategy.card_eq_title'),
      category: t('strategy.leadership'),
      categoryId: 'leadership',
      desc: t('strategy.card_eq_desc'),
      badge: "Goleman Standard",
      color: "bg-sage",
      icon: Users,
      premium: true,
      count: 25
    },
    {
      id: "adhd",
      title: t('strategy.card_adhd_title'),
      category: t('strategy.neurodiversity'),
      categoryId: 'personality',
      desc: t('strategy.card_adhd_desc'),
      badge: "ASRS-v1.1 OMS",
      color: "bg-terracotta",
      icon: Zap,
      count: 18
    },
    {
      id: "burnout",
      title: t('strategy.card_burnout_title'),
      category: t('strategy.corporate'),
      categoryId: 'leadership',
      desc: t('strategy.card_burnout_desc'),
      badge: "MBI-GS Validation",
      color: "bg-darkgray",
      icon: Flame,
      count: 22
    },
    {
      id: "digital_addiction",
      title: t('strategy.card_digital_title'),
      category: t('strategy.mentalHealth'),
      categoryId: 'mental',
      desc: t('strategy.card_digital_desc'),
      badge: "IAT Protocol",
      color: "bg-petroleum",
      icon: Smartphone,
      count: 20
    },
    {
      id: "depression",
      title: t('strategy.card_depression_title'),
      category: t('strategy.mentalHealth'),
      categoryId: 'mental',
      desc: t('strategy.card_depression_desc'),
      badge: "Beck Clinical",
      color: "bg-darkgray",
      icon: HeartPulse,
      count: 21
    },
    {
      id: "impostor",
      title: "Decodificador do Impostor", // Hardcoded fallback until i18n
      category: t('strategy.career'),
      categoryId: 'leadership',
      desc: "Você é uma fraude ou um gênio inseguro? Descubra com a Escala Clance (CIPS).",
      badge: "CIPS Validated",
      color: "bg-indigo-600",
      icon: ShieldCheck,
      count: 20
    },
    {
      id: "gad7",
      title: "The Calm Meter (GAD-7)", // Hardcoded fallback until i18n
      category: t('strategy.mentalHealth'),
      categoryId: 'mental',
      desc: "Avalie seu nível de ansiedade e aprenda a controlar o sistema nervoso com respiração guiada.",
      badge: "Clinical GAD-7",
      color: "bg-terracotta",
      icon: Wind,
      count: 7
    },
    {
      id: "riasec",
      title: "Career Compass 360", // Hardcoded fallback until i18n
      category: t('strategy.career'),
      categoryId: 'leadership',
      desc: "Descubra sua vocação baseada no padrão global O*NET. Relatório com Código Holland.",
      badge: "O*NET Official",
      color: "bg-petroleum",
      icon: Compass, // Need to import Compass
      count: 60
    }
  ];

  const filteredTests = filter === 'all' ? tests : tests.filter(t => t.categoryId === filter);

  return (
    <section className="py-32 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-terracotta"></div>
              <h2 className="text-terracotta font-bold tracking-[0.4em] text-[10px] uppercase">Neural Hub Library</h2>
            </div>
            <h3 className="font-serif text-6xl md:text-7xl text-petroleum mb-8 tracking-tighter">{t('strategy.title')}</h3>
            <p className="text-gray-400 text-xl font-light leading-relaxed max-w-2xl">{t('strategy.subtitle')}</p>
          </div>

          <div className="flex flex-wrap gap-2 bg-offwhite p-1.5 rounded-2xl border border-gray-100">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${filter === cat.id ? 'bg-petroleum text-white shadow-xl' : 'text-gray-400 hover:text-petroleum'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTests.map((test, idx) => (
            <div key={idx} className="group relative bg-offwhite p-12 rounded-[4rem] border border-transparent hover:border-sage/20 hover:bg-white hover:shadow-3xl transition-all duration-700 flex flex-col h-[520px]">

              {test.premium && (
                <div className="absolute top-8 right-8 bg-sage text-white text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.2em] uppercase flex items-center gap-2 shadow-lg z-10">
                  <Star size={10} fill="currentColor" /> {t('strategy.premium')}
                </div>
              )}

              <div className="mb-12">
                <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center shadow-2xl transition-all duration-700 group-hover:rotate-12 group-hover:scale-110 ${test.color} text-white`}>
                  <test.icon size={40} />
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-sage">{test.category}</span>
                <h4 className="font-serif text-4xl font-bold text-petroleum leading-tight">{test.title}</h4>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/60 rounded-full border border-gray-100 text-[9px] font-black text-gray-500 uppercase tracking-widest">
                  <ShieldCheck size={12} className="text-sage" /> {test.badge}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed font-light line-clamp-3 pt-4">{test.desc}</p>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-gray-100 mt-auto">
                <div className="flex flex-col">
                  <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-1">{t('strategy.neural_load')}</span>
                  <span className="text-sm font-serif font-bold text-darkgray">{test.count} {t('strategy.questions')}</span>
                </div>
                <button
                  onClick={() => onSelectTest(test.id)}
                  className="flex items-center gap-3 py-5 px-10 bg-petroleum text-white rounded-2xl font-bold transition-all text-[11px] uppercase tracking-widest hover:bg-black hover:gap-6 shadow-2xl"
                >
                  {t('strategy.start')} <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}

          {/* Scalability Placeholder */}
          <div className="bg-white/40 border-4 border-dashed border-sage/10 p-12 rounded-[4rem] flex flex-col items-center justify-center text-center group cursor-default h-[520px]">
            <div className="w-20 h-20 rounded-full bg-sage/5 flex items-center justify-center text-sage/40 mb-8">
              <Layers size={40} />
            </div>
            <h4 className="font-serif text-3xl text-gray-300 mb-4">{t('strategy.new_protocols')}</h4>
            <p className="text-[10px] text-gray-300 uppercase tracking-[0.3em] font-black leading-relaxed">
              {t('strategy.continuous_development')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
