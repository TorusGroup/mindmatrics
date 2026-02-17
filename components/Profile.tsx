
import React from 'react';
import { Database, ShieldCheck, Cpu, CheckCircle2, Zap, BarChart, Globe, Brain, Network } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';

const Profile: React.FC = () => {
  const { t } = useI18n();
  const scienceItems = Array.isArray(t('science.items')) ? t('science.items') : [];

  return (
    <section className="py-32 bg-offwhite relative overflow-hidden border-b border-gray-100">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sage/5 rounded-full blur-[100px] -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">

          <div className="relative order-2 lg:order-1">
            <div className="aspect-square bg-white rounded-[5rem] overflow-hidden shadow-2xl relative border border-gray-100 group">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-4/5 h-4/5 border-[1px] border-dashed border-petroleum/10 rounded-full animate-[spin_40s_linear_infinite]"></div>
                <div className="w-3/5 h-3/5 border-[1px] border-dashed border-terracotta/10 rounded-full animate-[spin_25s_linear_infinite_reverse] absolute"></div>
                <div className="w-2/5 h-2/5 bg-gradient-to-br from-sage/10 to-petroleum/10 rounded-full blur-3xl absolute group-hover:scale-150 transition-transform duration-1000"></div>
                <Network size={140} className="text-petroleum opacity-10 relative z-10 group-hover:opacity-30 transition-opacity duration-1000" />
              </div>

              {/* Floating Data Nodes */}
              <div className="absolute top-16 left-16 bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border-l-8 border-petroleum animate-fade-in-up">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-petroleum/10 rounded-xl text-petroleum"><Cpu size={24} /></div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">{t('science.latency_label')}</span>
                    <p className="font-serif text-2xl font-bold text-petroleum">{t('science.latency_value')}</p>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-petroleum w-[94%] animate-[shimmer_2s_infinite] bg-gradient-to-r from-petroleum via-sage to-petroleum bg-[length:200%_100%]"></div>
                </div>
              </div>

              <div className="absolute bottom-16 right-16 bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border-l-8 border-terracotta animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-terracotta/10 rounded-xl text-terracotta"><BarChart size={24} /></div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">{t('science.accuracy_label')}</span>
                    <p className="font-serif text-2xl font-bold text-terracotta">{t('science.accuracy_value')}</p>
                  </div>
                </div>
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">{t('science.calibration')}</p>
              </div>
            </div>
          </div>

          <div className="space-y-16 order-1 lg:order-2">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-12 bg-terracotta"></div>
                <h2 className="text-terracotta font-black tracking-[0.5em] text-[10px] uppercase">{t('science.tag')}</h2>
              </div>
              <h3 className="font-serif text-6xl md:text-8xl text-darkgray mb-10 leading-[0.85] tracking-tighter">
                {t('science.title')}<br />
                <span className="text-sage italic font-light">{t('science.titleAccent')}</span>
              </h3>
              <p className="text-gray-400 text-2xl leading-relaxed font-light">
                {t('science.desc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white p-5 rounded-2xl text-petroleum group-hover:bg-petroleum group-hover:text-white transition-all duration-500 shadow-xl border border-gray-50">
                    <Database size={32} />
                  </div>
                  <h4 className="font-serif text-2xl text-darkgray">{t('science.database')}</h4>
                </div>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{t('science.databaseDesc')}</p>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white p-5 rounded-2xl text-petroleum group-hover:bg-sage group-hover:text-white transition-all duration-500 shadow-xl border border-gray-100">
                    <ShieldCheck size={32} />
                  </div>
                  <h4 className="font-serif text-2xl text-darkgray">{t('science.privacy')}</h4>
                </div>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{t('science.privacyDesc')}</p>
              </div>
            </div>

            <div className="pt-12 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {scienceItems.map((item: string, i: number) => (
                <div key={i} className="flex items-center gap-4 text-[10px] font-black text-darkgray uppercase tracking-widest group">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-sage shadow-sm group-hover:bg-sage group-hover:text-white transition-all">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="opacity-60 group-hover:opacity-100 transition-opacity">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-12 pt-8">
              <div className="flex items-center gap-3">
                <Globe size={24} className="text-sage/40" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">{t('science.global_standards')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap size={24} className="text-terracotta/40" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">{t('science.live_decoding')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
