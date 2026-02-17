
import React, { useMemo } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { Activity, Brain, ShieldAlert, Zap, Utensils, CheckCircle2, AlertTriangle, Briefcase, Heart, Wallet } from 'lucide-react';
import AIInsights from '../../components/AIInsights';
import { useI18n } from '../../contexts/I18nContext';
import ReportWrapper from '../../components/layout/ReportWrapper';

interface ADHDReportProps {
  data: any;
  lead: {
    name: string;
    email: string;
  };
  metadata?: any;
  onBookingRequest?: () => void;
}

const ADHDReport: React.FC<ADHDReportProps> = ({ data, lead, metadata, onBookingRequest }) => {
  const { t } = useI18n();
  const scores = useMemo(() => data?.scores || data || {}, [data]);

  const riskScore = useMemo(() => {
    return Math.round((scores.globalScore / 100) * 36);
  }, [scores.globalScore]);

  const severity = useMemo(() => {
    if (riskScore >= 25) return { label: "ALTO RISCO", color: "text-red-600", fill: "#dc2626" };
    if (riskScore >= 13) return { label: "MODERADO", color: "text-orange-500", fill: "#f97316" };
    return { label: "BAIXO RISCO", color: "text-green-500", fill: "#22c55e" };
  }, [riskScore]);

  const archetype = useMemo(() => {
    const inatt = scores.inattention_persistence || 0;
    const hyper = scores.hyperactivity_physical || 0;
    
    if (inatt > 60 && hyper > 60) return t('reports.adhd.archetypes.creative_tornado');
    if (inatt > 60) return t('reports.adhd.archetypes.silent_architect');
    return t('reports.adhd.archetypes.turbo_engine');
  }, [scores, t]);

  const radarData = [
    { subject: t('reports.adhd.domains.inattention'), A: scores.inattention_persistence || scores.globalScore },
    { subject: t('reports.adhd.domains.hyperactivity'), A: scores.hyperactivity_physical || scores.globalScore },
    { subject: t('reports.adhd.domains.impulsivity'), A: scores.impulsivity_control || scores.globalScore },
  ];

  return (
    <ReportWrapper 
      lead={lead} 
      reportTitle={t('reports.adhd.title')} 
      reportSubtitle={t('reports.adhd.subtitle')}
      accentColor="terracotta"
      testId="adhd"
      metadata={metadata}
      onBookingRequest={onBookingRequest}
    >
      {/* 1. Gauge Section */}
      <section className="p-8 md:p-16 border-b border-gray-100 bg-white">
        <div className="text-center mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-4 block">{t('reports.common.summary')}</span>
            <h3 className="font-serif text-4xl text-petroleum mb-12 italic">{t('reports.common.risk_indicator')}</h3>
            
            <div className="relative inline-block w-full max-w-md">
                <svg viewBox="0 0 100 50" className="w-full">
                    <path d="M 10 45 A 35 35 0 0 1 90 45" fill="none" stroke="#f3f4f6" strokeWidth="8" strokeLinecap="round" />
                    <path 
                        d="M 10 45 A 35 35 0 0 1 90 45" 
                        fill="none" 
                        stroke={severity.fill} 
                        strokeWidth="8" 
                        strokeLinecap="round"
                        strokeDasharray="125.6"
                        strokeDashoffset={125.6 - (riskScore / 36) * 125.6}
                        className="transition-all duration-1000"
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-4">
                    <span className="text-5xl font-serif font-bold text-petroleum">{riskScore}</span>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Score ASRS (0-36)</span>
                </div>
            </div>
            <p className={`mt-6 font-black uppercase tracking-[0.3em] text-sm ${severity.color}`}>{severity.label}</p>
        </div>
      </section>

      {/* 2. Qualitative Archetype Analysis */}
      <section className="p-8 md:p-16 border-b border-gray-100 bg-offwhite">
          <div className="max-w-4xl mx-auto">
              <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-sage/10 relative overflow-hidden text-center">
                  <div className="absolute top-0 right-0 p-8 opacity-5 text-terracotta rotate-12">
                    <Brain size={120} />
                  </div>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-3 block">{t('common.archetype_dominant')}</span>
                  <h2 className="font-serif text-5xl text-petroleum mb-6 leading-tight">{archetype?.title}</h2>
                  <p className="text-gray-500 text-lg leading-relaxed font-light italic mb-10">"{archetype?.desc}"</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-offwhite p-6 rounded-2xl border border-gray-50 flex flex-col items-center">
                        <Briefcase size={24} className="text-petroleum mb-3" />
                        <span className="text-[10px] font-bold uppercase text-gray-400 mb-1">Carreira</span>
                        <p className="text-xs font-bold">Foco em Prazos Curtos</p>
                      </div>
                      <div className="bg-offwhite p-6 rounded-2xl border border-gray-50 flex flex-col items-center">
                        <Heart size={24} className="text-terracotta mb-3" />
                        <span className="text-[10px] font-bold uppercase text-gray-400 mb-1">Social</span>
                        <p className="text-xs font-bold">Escuta Ativa Variável</p>
                      </div>
                      <div className="bg-offwhite p-6 rounded-2xl border border-gray-50 flex flex-col items-center">
                        <Wallet size={24} className="text-sage mb-3" />
                        <span className="text-[10px] font-bold uppercase text-gray-400 mb-1">Finanças</span>
                        <p className="text-xs font-bold">Risco de Impulsividade</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 3. Radar Chart Breakdown */}
      <section className="p-8 md:p-16 border-b border-gray-100 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="h-[400px] bg-offwhite rounded-[3rem] p-8 border border-sage/10 shadow-inner">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                        <PolarGrid stroke="#e5e7eb" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#2C5F6F', fontSize: 10, fontWeight: 'bold' }} />
                        <Radar name="Score" dataKey="A" stroke="#C97D60" strokeWidth={4} fill="#C97D60" fillOpacity={0.2} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
            <div>
                <h3 className="font-serif text-3xl text-petroleum mb-6 leading-tight">{t('reports.common.cognitive_signature')}</h3>
                <div className="space-y-6">
                    {radarData.map((dim, i) => (
                        <div key={i}>
                            <div className="flex justify-between mb-2">
                                <span className="text-[10px] font-bold text-darkgray uppercase tracking-widest">{dim.subject}</span>
                                <span className="text-[10px] font-bold text-gray-400">{Math.round(dim.A)}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                                <div className={`h-full bg-terracotta transition-all duration-1000`} style={{ width: `${dim.A}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* 4. Dopamine Menu (The non-vague part) */}
      <section className="p-8 md:p-16 border-b border-gray-100 bg-offwhite">
          <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-10">
                  <div className="p-4 bg-terracotta text-white rounded-2xl shadow-lg"><Zap size={28} /></div>
                  <h3 className="font-serif text-4xl text-petroleum">{t('reports.adhd.dopamine_menu.title')}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-sage/5">
                      <h4 className="flex items-center gap-2 font-bold text-sage mb-6 uppercase text-xs tracking-widest">
                        <CheckCircle2 size={18} /> {t('reports.adhd.dopamine_menu.healthy')}
                      </h4>
                      <ul className="space-y-5">
                          <li className="flex items-center gap-4 p-4 bg-sage/5 rounded-xl text-sm font-medium">
                              <span className="w-2 h-2 rounded-full bg-sage"></span> {t('reports.adhd.dopamine_menu.h1')}
                          </li>
                          <li className="flex items-center gap-4 p-4 bg-sage/5 rounded-xl text-sm font-medium">
                              <span className="w-2 h-2 rounded-full bg-sage"></span> {t('reports.adhd.dopamine_menu.h2')}
                          </li>
                          <li className="flex items-center gap-4 p-4 bg-sage/5 rounded-xl text-sm font-medium">
                              <span className="w-2 h-2 rounded-full bg-sage"></span> {t('reports.adhd.dopamine_menu.h3')}
                          </li>
                      </ul>
                  </div>

                  <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-terracotta/5">
                      <h4 className="flex items-center gap-2 font-bold text-terracotta mb-6 uppercase text-xs tracking-widest">
                        <AlertTriangle size={18} /> {t('reports.adhd.dopamine_menu.unhealthy')}
                      </h4>
                      <ul className="space-y-5">
                          <li className="flex items-center gap-4 p-4 bg-terracotta/5 rounded-xl text-sm font-medium">
                              <span className="w-2 h-2 rounded-full bg-terracotta"></span> {t('reports.adhd.dopamine_menu.u1')}
                          </li>
                          <li className="flex items-center gap-4 p-4 bg-terracotta/5 rounded-xl text-sm font-medium">
                              <span className="w-2 h-2 rounded-full bg-terracotta"></span> {t('reports.adhd.dopamine_menu.u2')}
                          </li>
                          <li className="flex items-center gap-4 p-4 bg-terracotta/5 rounded-xl text-sm font-medium">
                              <span className="w-2 h-2 rounded-full bg-terracotta"></span> {t('reports.adhd.dopamine_menu.u3')}
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>

      {/* 5. IA Deep Analysis */}
      <section className="p-8 md:p-16 bg-white">
        <div className="bg-terracotta/5 border-2 border-dashed border-terracotta/20 p-8 rounded-[2rem] flex flex-col md:flex-row gap-8 items-center mb-16">
            <ShieldAlert size={48} className="text-terracotta shrink-0" />
            <div>
                <h4 className="font-serif text-2xl text-petroleum mb-2">Nota Psicométrica</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Este mapeamento segue o padrão ouro da OMS (ASRS-v1.1). Pontuações acima de 13 na Parte A sugerem a necessidade de avaliação com um neuropsicólogo ou psiquiatra especializado.</p>
            </div>
        </div>
        <AIInsights testType="adhd" scores={scores} userName={lead.name} />
      </section>
    </ReportWrapper>
  );
};

export default ADHDReport;
