
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Cell, Tooltip } from 'recharts';
import { Award, Users, Target, Brain, Activity, MessageCircle, Compass } from 'lucide-react';
import AIInsights from '../../components/AIInsights';
import { useI18n } from '../../contexts/I18nContext';
import ReportWrapper from '../../components/layout/ReportWrapper';

interface EQReportProps {
  data: {
    self_awareness: number;
    self_regulation: number;
    motivation: number;
    empathy: number;
    social_skills: number;
    globalScore?: number;
  };
  lead: {
    name: string;
    email: string;
  };
  metadata?: any;
  onBookingRequest?: () => void;
}

const EQReport: React.FC<EQReportProps> = ({ data, lead, metadata, onBookingRequest }) => {
  const { t } = useI18n();

  const getEQArchetype = () => {
    const { self_awareness: sa, self_regulation: sr, motivation: mo, empathy: em, social_skills: ss } = data;
    const avg = (sa + sr + mo + em + ss) / 5;

    if (avg > 88) return { ...t('reports.eq.archetypes.master'), icon: Award, color: "text-sage" };
    if (em > 80 && ss > 80) return { ...t('reports.eq.archetypes.architect'), icon: Users, color: "text-blue-400" };
    if (sr > 80 && mo > 80) return { ...t('reports.eq.archetypes.stoic'), icon: Target, color: "text-terracotta" };
    return { ...t('reports.eq.archetypes.rising'), icon: Brain, color: "text-orange-400" };
  };

  const archetype = getEQArchetype();

  const derivedMetrics = [
    { label: t('reports.eq.metrics.resilience.label'), value: (data.self_regulation + data.motivation) / 2, desc: t('reports.eq.metrics.resilience.desc') },
    { label: t('reports.eq.metrics.resonance.label'), value: (data.empathy + data.social_skills) / 2, desc: t('reports.eq.metrics.resonance.desc') },
    { label: t('reports.eq.metrics.agility.label'), value: (data.self_awareness + data.self_regulation) / 2, desc: t('reports.eq.metrics.agility.desc') }
  ];

  const benchmarkData = [
    { name: t('reports.eq.benchmarks.user'), score: (data.self_awareness + data.self_regulation + data.motivation + data.empathy + data.social_skills) / 5, fill: '#8BA888' },
    { name: t('reports.eq.benchmarks.market'), score: 65, fill: '#3D3D3D' },
    { name: t('reports.eq.benchmarks.top'), score: 85, fill: '#C97D60' }
  ];

  return (
    <ReportWrapper 
      lead={lead} 
      reportTitle={t('strategy.card_eq_title')} 
      reportSubtitle="Quociente Emocional"
      accentColor="petroleum"
      testId="eq"
      metadata={metadata}
      onBookingRequest={onBookingRequest}
    >
      <div className="bg-[#050505] text-white">
        <section className="p-12 md:p-24 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="animate-fade-in">
              <div className={`p-6 ${archetype.color} bg-white/5 inline-flex rounded-[2rem] mb-8 border border-current/20 shadow-[0_0_30px_rgba(255,255,255,0.02)]`}>
                <archetype.icon size={64} />
              </div>
              <h3 className="font-serif text-6xl mb-6 tracking-tighter">{archetype.title}</h3>
              <p className="text-gray-400 text-xl leading-relaxed mb-12 font-light italic opacity-80">
                "{archetype.desc}"
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {Array.isArray(archetype.strengths) && archetype.strengths.map((s, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-white/[0.03] border border-white/5 rounded-2xl group hover:bg-white/[0.08] transition-all">
                    <div className="w-2 h-2 rounded-full bg-sage shadow-[0_0_10px_rgba(139,168,136,0.5)]"></div>
                    <span className="font-bold text-[10px] uppercase tracking-[0.2em] text-gray-300">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0F0F0F] border border-white/10 p-12 rounded-[3.5rem] shadow-3xl">
              <h4 className="text-[11px] uppercase font-black tracking-[0.4em] text-sage mb-12 flex items-center gap-2">
                <Activity size={16}/> {t('reports.common.benchmarkTitle')}
              </h4>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={benchmarkData} layout="vertical" margin={{ left: 0, right: 30 }}>
                    <XAxis type="number" hide domain={[0, 100]} />
                    <YAxis dataKey="name" type="category" tick={{ fill: '#666', fontSize: 10, fontWeight: 'bold' }} width={120} axisLine={false} tickLine={false} />
                    <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ backgroundColor: '#000', border: 'none', borderRadius: '8px' }} />
                    <Bar dataKey="score" radius={[0, 10, 10, 0]} barSize={30}>
                      {benchmarkData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>

        <section className="p-12 md:p-24 bg-[#080808] border-b border-white/5">
          <div className="max-w-xl mb-20">
            <h2 className="font-serif text-5xl mb-4 text-white">{t('reports.common.neuralSynergy')}</h2>
            <p className="text-gray-500 text-[11px] uppercase tracking-[0.3em] font-bold">Métricas Derivadas de Alta Fidelidade</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {derivedMetrics.map((m, i) => (
              <div key={i} className="group p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:bg-white/[0.05] transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity">
                  <Compass size={60} />
                </div>
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-bold text-[11px] uppercase tracking-widest text-gray-200">{m.label}</h4>
                  <span className="font-mono text-sage text-sm font-bold">{Math.round(m.value)}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-8">
                  <div className="h-full bg-sage shadow-[0_0_15px_rgba(139,168,136,0.5)]" style={{ width: `${m.value}%` }}></div>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed font-light">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-12 md:p-24 bg-gradient-to-b from-[#080808] to-black">
          <div className="max-w-4xl mx-auto">
             <AIInsights testType="eq" scores={data} userName={lead.name} />
          </div>
        </section>
      </div>
    </ReportWrapper>
  );
};

export default EQReport;
