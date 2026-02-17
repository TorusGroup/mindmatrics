import React from 'react';
import { Milestone, CheckCircle2, Sparkles, Database, Globe, Scale } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';

const Roadmap: React.FC = () => {
  const { t } = useI18n();

  const steps = [
    {
      month: t('roadmap.m1'),
      title: t('roadmap.m1Title'),
      description: t('roadmap.m1Desc'),
      items: t('roadmap.items_m1'),
      icon: Database
    },
    {
      month: t('roadmap.m2'),
      title: t('roadmap.m2Title'),
      description: t('roadmap.m2Desc'),
      items: t('roadmap.items_m2'),
      icon: Sparkles
    },
    {
      month: t('roadmap.m3'),
      title: t('roadmap.m3Title'),
      description: t('roadmap.m3Desc'),
      items: t('roadmap.items_m3'),
      icon: Globe
    },
    {
      month: t('roadmap.m4'),
      title: t('roadmap.m4Title'),
      description: t('roadmap.m4Desc'),
      items: t('roadmap.items_m4'),
      icon: Scale
    }
  ];

  return (
    <section className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-petroleum/5 rounded-full border border-petroleum/10 text-petroleum text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            <Milestone size={16} /> {t('roadmap.tag')}
          </div>
          <h2 className="font-serif text-5xl md:text-7xl text-darkgray mb-6 leading-tight">{t('roadmap.title')} <br /><span className="text-terracotta italic font-light">{t('roadmap.titleAccent')}</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light italic">"{t('roadmap.quote')}"</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="group relative bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 hover:border-petroleum/20 transition-all hover:-translate-y-2">
              <div className="absolute -top-6 left-10 w-12 h-12 bg-petroleum text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-terracotta transition-colors">
                <step.icon size={24} />
              </div>

              <div className="mt-4">
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] block mb-2">{step.month}</span>
                <h3 className="font-serif text-2xl text-darkgray mb-4 leading-tight">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-8 font-light">{step.description}</p>
              </div>

              <div className="space-y-3 pt-6 border-t border-gray-50">
                {step.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-[10px] text-gray-600 font-bold uppercase tracking-tight">
                    <CheckCircle2 size={12} className="text-sage mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;