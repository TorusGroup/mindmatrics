
import React from 'react';
import { Brain, Sparkles, Target, Zap, Shield, ChevronDown, Activity, ArrowRight } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';

interface HeroProps {
  scrollToStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToStart }) => {
  const { t } = useI18n();

  const objectives = [
    { label: t('hero.career'), icon: Target, color: "text-petroleum", bg: "bg-petroleum/10" },
    { label: t('hero.leadership'), icon: Sparkles, color: "text-sage", bg: "bg-sage/10" },
    { label: t('hero.mentalHealth'), icon: Zap, color: "text-terracotta", bg: "bg-terracotta/10" }
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-offwhite overflow-hidden pt-32 pb-20">
      {/* Neural Background Elements */}
      <div className="absolute top-0 right-0 w-[70%] h-[70%] bg-petroleum/5 rounded-bl-[500px] blur-[180px] -z-0 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-terracotta/5 rounded-tr-[500px] blur-[150px] -z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Floating Badge */}
        <div className="mb-12 inline-flex items-center gap-3 px-8 py-3 bg-white/40 backdrop-blur-xl rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-white/60 animate-fade-in-up">
          <Shield size={16} className="text-petroleum" />
          <span className="text-petroleum text-[10px] md:text-xs font-black tracking-[0.4em] uppercase">
            {t('hero.protocol')}
          </span>
        </div>

        {/* Main Title Architecture */}
        <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] text-darkgray mb-12 leading-[0.82] tracking-tighter animate-fade-in-up">
          {t('hero.title')} <br />
          <span className="text-petroleum italic font-light relative inline-block group">
            {t('hero.titleAccent')}
            <div className="absolute -bottom-4 left-0 w-0 h-1 bg-terracotta group-hover:w-full transition-all duration-700"></div>
          </span>
        </h1>

        <p className="text-xl md:text-3xl text-gray-400 max-w-3xl mx-auto leading-tight font-light mb-24 px-4 opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {t('hero.subtitle')}
        </p>

        {/* Scalable Strategy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-24 px-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {objectives.map((obj, i) => (
            <div
              key={i}
              className="group bg-white/20 backdrop-blur-sm p-12 rounded-[4rem] border border-white/40 shadow-[0_40px_80px_rgba(0,0,0,0.02)] hover:bg-white hover:shadow-2xl transition-all duration-700 text-left flex flex-col justify-between h-80 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 p-12 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity group-hover:rotate-12 duration-1000">
                <obj.icon size={250} />
              </div>

              <div className={`p-6 rounded-[2rem] ${obj.bg} shadow-sm inline-flex ${obj.color} group-hover:scale-110 transition-transform duration-500 w-fit`}>
                <obj.icon size={36} />
              </div>

              <div className="relative z-10 mt-8">
                <div className="flex items-center gap-2 mb-3">
                  <Activity size={14} className="text-sage" />
                  <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">{t('hero.focush1')}</span>
                </div>
                <h4 className="font-serif text-4xl text-darkgray group-hover:text-petroleum transition-colors leading-tight">{obj.label}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Action */}
        <button
          onClick={scrollToStart}
          className="group flex flex-col items-center gap-6 text-gray-300 hover:text-petroleum transition-colors"
        >
          <div className="flex items-center gap-4 bg-white px-8 py-4 rounded-full shadow-xl border border-gray-100 group-hover:border-petroleum/30 transition-all">
            <span className="text-xs font-black uppercase tracking-[0.3em]">{t('hero.explore')}</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </div>
          <div className="animate-bounce">
            <ChevronDown size={24} />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
