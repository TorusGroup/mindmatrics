
import React, { useMemo } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Brain, Target, ShieldCheck, Heart, LayoutGrid, ArrowRight, User, Star, Activity, Sparkles, Zap, Shield } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';
import { synergyService } from '../services/synergy.service';

interface NeuralDashboardProps {
  results: any[];
  userName: string;
  onOpenReport: (result: any) => void;
}

const NeuralDashboard: React.FC<NeuralDashboardProps> = ({ results, userName, onOpenReport }) => {
  const { t } = useI18n();

  const synergyData = useMemo(() => {
    const map = synergyService.calculateSynergy(results);
    return [
      { subject: t('dashboard.synergy.cognitive'), A: map.cognitiveControl },
      { subject: t('dashboard.synergy.stability'), A: map.emotionalStability },
      { subject: t('dashboard.synergy.social'), A: map.socialResonance },
      { subject: t('dashboard.synergy.energy'), A: map.dynamicEnergy },
      { subject: t('dashboard.synergy.focus'), A: map.executiveFocus },
    ];
  }, [results, t]);

  const globalSynergyScore = useMemo(() => {
    const values = synergyData.map(d => d.A);
    return Math.round(values.reduce((a, b) => a + b, 0) / values.length);
  }, [synergyData]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="font-serif text-5xl text-petroleum mb-2">{t('dashboard.workspace')}</h1>
          <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] font-bold">
            {t('dashboard.welcome').replace('{name}', userName)}
          </p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white px-6 py-3 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 bg-petroleum/10 rounded-xl flex items-center justify-center text-petroleum">
              <Sparkles size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{t('dashboard.synergy.score')}</p>
              <p className="font-serif text-2xl font-bold text-petroleum">{globalSynergyScore}%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Lado Esquerdo: Synergy Map (8 colunas) */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] text-petroleum">
              <Brain size={200} />
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="h-[450px]">
                <h4 className="text-[10px] font-black text-petroleum uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                  <Activity size={14} /> {t('dashboard.synergy.map_title')}
                </h4>
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={synergyData}>
                    <PolarGrid stroke="#f3f4f6" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#3D3D3D', fontSize: 10, fontWeight: '800' }} />
                    <Radar name="Você" dataKey="A" stroke="#C97D60" strokeWidth={3} fill="#C97D60" fillOpacity={0.15} />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-6">
                <h3 className="font-serif text-3xl text-darkgray mb-6">{t('dashboard.synergy.holistic')}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light">
                  {t('dashboard.synergy.desc')}
                </p>

                <div className="space-y-4">
                  {synergyData.map((d, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-full bg-gray-50 h-2 rounded-full overflow-hidden">
                        <div className="h-full bg-sage transition-all duration-1000" style={{ width: `${d.A}%` }}></div>
                      </div>
                      <span className="text-[10px] font-bold text-gray-400 w-32 uppercase tracking-tighter">{d.subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-petroleum text-white p-8 rounded-[2.5rem] shadow-lg">
              <Zap className="text-sage mb-4" size={28} />
              <h5 className="font-serif text-xl mb-2">{t('dashboard.pillars.energy')}</h5>
              <p className="text-[10px] opacity-60 uppercase tracking-widest font-bold">{t('dashboard.pillars.energy_status')}</p>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-lg">
              <Shield className="text-terracotta mb-4" size={28} />
              <h5 className="font-serif text-xl text-darkgray mb-2">{t('dashboard.pillars.resilience')}</h5>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{t('dashboard.pillars.resilience_status')}</p>
            </div>
            <div className="bg-sage text-petroleum p-8 rounded-[2.5rem] shadow-lg">
              <Target className="text-petroleum mb-4" size={28} />
              <h5 className="font-serif text-xl mb-2">{t('dashboard.pillars.focus')}</h5>
              <p className="text-[10px] opacity-60 uppercase tracking-widest font-bold">{t('dashboard.pillars.focus_status')}</p>
            </div>
          </div>
        </div>

        {/* Lado Direito: Histórico (4 colunas) */}
        <div className="lg:col-span-4 space-y-6">
          <h3 className="font-serif text-2xl mb-4 text-petroleum">{t('dashboard.active_protocols')}</h3>
          <div className="space-y-4">
            {results.length > 0 ? results.map((res, i) => (
              <div
                key={i}
                onClick={() => onOpenReport(res)}
                className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-offwhite rounded-2xl flex items-center justify-center text-petroleum group-hover:bg-petroleum group-hover:text-white transition-colors">
                    <Activity size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xs text-darkgray uppercase tracking-widest">{res.type.replace('_', ' ')}</h4>
                    <p className="text-[10px] text-gray-400 font-medium">{new Date(res.date).toLocaleDateString()}</p>
                  </div>
                  <ArrowRight size={18} className="text-gray-200 group-hover:text-petroleum group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            )) : (
              <div className="p-12 border-2 border-dashed border-gray-100 rounded-[3rem] text-center bg-white/50">
                <LayoutGrid className="mx-auto text-gray-200 mb-4" size={48} />
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest leading-relaxed">
                  {t('dashboard.no_protocols')}
                </p>
              </div>
            )}

            {results.length < 5 && (
              <div className="p-8 bg-offwhite rounded-3xl text-center border border-gray-100">
                <Sparkles className="mx-auto text-sage mb-3" size={32} />
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest leading-relaxed">
                  {t('dashboard.unlock_enterprise')}
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default NeuralDashboard;
