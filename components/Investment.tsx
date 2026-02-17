import React from 'react';
import { Check, Info, ShieldCheck, Zap, BarChart3, TrendingUp, Sparkles } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';

const Investment: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          <div className="bg-petroleum text-white rounded-[3.5rem] p-12 shadow-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-sage text-darkgray text-[10px] font-black px-8 py-3 rounded-bl-3xl tracking-[0.2em] uppercase">
              {t('investment.tag')}
            </div>

            <div className="relative z-10">
              <h2 className="text-sage font-bold tracking-[0.4em] text-xs uppercase mb-8">{t('investment.title')}</h2>

              <div className="mb-12 pb-10 border-b border-white/10">
                <p className="text-xs text-sage font-black uppercase tracking-widest mb-4">{t('investment.setup')}</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-6xl md:text-7xl font-bold">R$ 3.500</span>
                  <span className="text-sage/60 font-serif text-2xl italic">/mês</span>
                </div>
                <p className="text-xs text-white/40 mt-4 leading-relaxed max-w-xs font-light">
                  {t('investment.setupDesc')}
                </p>
              </div>

              <div className="mb-12">
                <p className="text-xs text-sage font-black uppercase tracking-widest mb-4">{t('investment.success')}</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-4xl md:text-5xl font-bold">R$ 20.000</span>
                </div>
                <p className="text-xs text-white/40 mt-4 leading-relaxed font-light">
                  {t('investment.successDesc')}
                </p>
              </div>

              <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-md">
                <h4 className="font-bold text-white mb-6 flex items-center gap-2 uppercase text-xs tracking-widest">
                  <Zap size={16} className="text-sage" />
                  {t('investment.techTitle')}
                </h4>
                <ul className="space-y-4">
                  {(t('investment.items') as string[]).map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-xs text-white/70">
                      <ShieldCheck size={14} className="text-sage mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-10">
            <h2 className="font-serif text-5xl md:text-6xl text-darkgray mb-8 leading-tight">{t('investment.roiTitle')}</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-12 font-light">
              {t('investment.roiDesc')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="p-8 bg-offwhite rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                <BarChart3 className="text-petroleum mb-4" size={32} />
                <h5 className="font-serif text-2xl font-bold mb-2">{t('investment.roi_label')}</h5>
                <p className="text-3xl font-bold text-petroleum mb-2">3.5x - 8x</p>
                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">{t('investment.roi_sub')}</p>
              </div>
              <div className="p-8 bg-offwhite rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                <TrendingUp className="text-terracotta mb-4" size={32} />
                <h5 className="font-serif text-2xl font-bold mb-2">{t('investment.lead_label')}</h5>
                <p className="text-3xl font-bold text-terracotta mb-2">+92%</p>
                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">{t('investment.lead_sub')}</p>
              </div>
            </div>

            <div className="p-10 bg-darkgray text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5"><Sparkles size={100} /></div>
              <p className="text-sage font-black uppercase tracking-[0.3em] text-[10px] mb-4">{t('investment.guarantee')}</p>
              <p className="text-sm font-light leading-relaxed mb-6">
                {t('investment.guaranteeDesc')}
              </p>
              <div className="flex items-center gap-3 text-xs font-bold text-white/50">
                <Info size={16} />
                <span>{t('investment.terms')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;