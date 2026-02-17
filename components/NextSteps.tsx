
import React from 'react';
import { ArrowRight, MessageSquare, FileCheck, Rocket, ShieldCheck, PhoneCall, Zap, Brain } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';

const NextSteps: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-darkgray text-white relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '60px 60px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-sage text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              <Zap size={14} className="text-sage" /> {t('nextSteps.tag')}
          </div>
          <h2 className="font-serif text-6xl md:text-8xl mb-8 leading-tight tracking-tighter">{t('nextSteps.title')} <br/><span className="text-sage italic font-light">{t('nextSteps.titleAccent')}</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            {t('nextSteps.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {[
            { icon: MessageSquare, title: t('nextSteps.s1Title'), desc: t('nextSteps.s1Desc'), color: "border-white/10" },
            { icon: FileCheck, title: t('nextSteps.s2Title'), desc: t('nextSteps.s2Desc'), color: "border-sage/30" },
            { icon: Brain, title: t('nextSteps.s3Title'), desc: t('nextSteps.s3Desc'), color: "border-terracotta/30" },
            { icon: Rocket, title: t('nextSteps.s4Title'), desc: t('nextSteps.s4Desc'), color: "border-white/10" }
          ].map((step, idx) => (
            <div key={idx} className={`bg-white/5 p-10 rounded-[2.5rem] border ${step.color} backdrop-blur-md transition-all hover:bg-white/10 group`}>
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white mb-8 border border-white/10 group-hover:bg-white group-hover:text-darkgray transition-all">
                <step.icon size={24} />
              </div>
              <h3 className="font-serif text-xl mb-4">{step.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-tighter font-bold">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#1A1A1A] to-black p-12 md:p-24 rounded-[4rem] text-center border border-white/5 shadow-3xl">
            <h3 className="font-serif text-4xl md:text-6xl mb-12 leading-tight">{t('nextSteps.cta_title')}</h3>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                className="group inline-flex items-center gap-4 bg-sage text-darkgray font-bold py-6 px-16 rounded-3xl text-xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:bg-white transition-all transform hover:-translate-y-2"
              >
                {t('nextSteps.cta_button')}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="flex items-center gap-3 text-gray-400 hover:text-white transition-all font-bold uppercase tracking-widest text-xs">
                  <PhoneCall size={18} /> {t('nextSteps.cta_call')}
              </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
