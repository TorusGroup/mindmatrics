
import React from 'react';
import { ArrowRight, Sparkles, Activity, Layers, Zap, Target } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';

interface BusinessProps {
  onContact: () => void;
}

const Business: React.FC<BusinessProps> = ({ onContact }) => {
  const { t } = useI18n();

  return (
    <section className="py-32 bg-darkgray text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12 transform origin-top translate-x-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage/10 rounded-full border border-sage/20 text-sage text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              <Sparkles size={14} /> {t('business.tag')}
            </div>
            <h3 className="font-serif text-5xl md:text-7xl mb-8 leading-[0.9] tracking-tighter">
              {t('business.title')} <br />
              <span className="italic font-light text-sage text-4xl md:text-6xl">{t('business.titleAccent')}</span>
            </h3>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed font-light">{t('business.desc')}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="flex gap-4 p-6 bg-white/[0.03] border border-white/5 rounded-3xl">
                <div className="bg-sage/20 p-3 rounded-2xl text-sage h-fit"><Activity size={24} /></div>
                <div>
                  <h5 className="font-bold text-sm mb-1 uppercase tracking-tight">{t('business.retention')}</h5>
                  <p className="text-xs text-gray-500">{t('business.retentionDesc')}</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-white/[0.03] border border-white/5 rounded-3xl">
                <div className="bg-terracotta/20 p-3 rounded-2xl text-terracotta h-fit"><Layers size={24} /></div>
                <div>
                  <h5 className="font-bold text-sm mb-1 uppercase tracking-tight">{t('business.dataCulture')}</h5>
                  <p className="text-xs text-gray-500">{t('business.dataCultureDesc')}</p>
                </div>
              </div>
            </div>

            <button onClick={onContact} className="group bg-sage hover:bg-white text-darkgray font-bold py-6 px-12 rounded-3xl flex items-center gap-4 transition-all shadow-xl transform hover:-translate-y-1">
              {t('business.cta')} <ArrowRight size={20} />
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-sage/10 blur-[100px] rounded-full"></div>
            <div className="relative bg-[#1A1A1A] p-10 rounded-[4rem] border border-white/10 shadow-3xl">
              <div className="flex justify-between items-center mb-10 pb-6 border-b border-white/5">
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400">{t('business.team_analytics')}</h4>
                  <p className="text-[10px] text-sage font-bold">{t('business.engineering_dept')}</p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-white/[0.02] p-6 rounded-3xl border border-white/5">
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{t('business.balance_index')}</span>
                    <span className="font-serif text-3xl font-bold text-sage">84%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-sage" style={{ width: '84%' }}></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/[0.02] p-6 rounded-3xl border border-white/5 text-center">
                    <Zap className="text-terracotta mx-auto mb-2" size={24} />
                    <p className="text-[10px] font-bold text-gray-500 uppercase">{t('business.burnout_risk')}</p>
                    <p className="text-xl font-serif text-white">{t('business.burnout_value')}</p>
                  </div>
                  <div className="bg-white/[0.02] p-6 rounded-3xl border border-white/5 text-center">
                    <Target className="text-blue-400 mx-auto mb-2" size={24} />
                    <p className="text-[10px] font-bold text-gray-500 uppercase">{t('business.cultural_fit')}</p>
                    <p className="text-xl font-serif text-white">{t('business.cultural_value')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
