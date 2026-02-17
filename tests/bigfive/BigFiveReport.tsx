
import React, { useMemo } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { Briefcase, Star, Briefcase as JobIcon } from 'lucide-react';
import AIInsights from '../../components/AIInsights';
import { useI18n } from '../../contexts/I18nContext';
import ReportWrapper from '../../components/layout/ReportWrapper';
import { LeadData } from '../../types/assessment';

interface BigFiveReportProps {
  data: {
    openness: number;
    conscientiousness: number;
    extraversion: number;
    agreeableness: number;
    stability: number;
    globalScore?: number;
  };
  lead: LeadData;
  metadata?: any;
  onBookingRequest?: () => void;
}

const BigFiveReport: React.FC<BigFiveReportProps> = ({ data, lead, metadata, onBookingRequest }) => {
  const { t } = useI18n();

  const radarData = [
    { subject: t('reports.bigfive.traits.openness'), A: data.openness },
    { subject: t('reports.bigfive.traits.conscientiousness'), A: data.conscientiousness },
    { subject: t('reports.bigfive.traits.extraversion'), A: data.extraversion },
    { subject: t('reports.bigfive.traits.agreeableness'), A: data.agreeableness },
    { subject: t('reports.bigfive.traits.stability'), A: data.stability },
  ];

  const archetype = useMemo(() => {
    if (data.openness > 70 && data.agreeableness > 70) return {
        title: t('reports.bigfive.archetypes.creator'),
        desc: "Você combina uma mente visionária com uma sensibilidade profunda às pessoas.",
        stars: 5
    };
    if (data.conscientiousness > 70 && data.stability > 70) return {
        title: t('reports.bigfive.archetypes.architect'),
        desc: "Lógico, organizado e inabalável. Você é o pilar de qualquer projeto.",
        stars: 5
    };
    return {
        title: t('reports.bigfive.archetypes.explorer'),
        desc: "Adaptável e curioso. Você flui bem entre diferentes contextos.",
        stars: 4
    };
  }, [data, t]);

  const careerMatch = useMemo(() => {
    // SCIENTIFIC WEIGHTING BASED ON DOCUMENT
    const list = [
      { name: "UX/UI Designer", match: Math.round((data.openness * 0.6) + (data.conscientiousness * 0.4)), tag: "Innovation + Order" },
      { name: "Product Manager", match: Math.round((data.extraversion * 0.5) + (data.conscientiousness * 0.5)), tag: "Leadership + Logic" },
      { name: "Clinical Psychologist", match: Math.round((data.agreeableness * 0.7) + (data.openness * 0.3)), tag: "Empathy + Insight" },
      { name: "Strategic Consultant", match: Math.round((data.openness * 0.5) + (data.stability * 0.5)), tag: "Vision + Resilience" },
      { name: "Data Architect", match: Math.round((data.conscientiousness * 0.8) + (data.openness * 0.2)), tag: "Precision + Systems" },
    ].sort((a, b) => b.match - a.match);
    return list.slice(0, 5);
  }, [data]);

  return (
    <ReportWrapper 
      lead={lead} 
      reportTitle={t('reports.bigfive.title')} 
      reportSubtitle={t('reports.bigfive.subtitle')}
      accentColor="petroleum"
      testId="bigfive"
      metadata={metadata}
      onBookingRequest={onBookingRequest}
    >
      <section className="p-8 md:p-16 border-b border-gray-100 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="h-[450px] bg-offwhite rounded-[3.5rem] p-8 border border-sage/10 shadow-inner relative overflow-hidden">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                        <PolarGrid stroke="#e5e7eb" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#2C5F6F', fontSize: 10, fontWeight: 'bold' }} />
                        <Radar name="Score" dataKey="A" stroke="#C97D60" strokeWidth={4} fill="#C97D60" fillOpacity={0.15} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
            <div>
                <span className="text-[10px] font-black text-terracotta uppercase tracking-[0.4em] mb-4 block">{t('reports.common.summary')}</span>
                <div className="space-y-4">
                    {[
                        { label: t('reports.bigfive.traits.openness'), val: data.openness, color: "bg-purple-500" },
                        { label: t('reports.bigfive.traits.conscientiousness'), val: data.conscientiousness, color: "bg-blue-500" },
                        { label: t('reports.bigfive.traits.extraversion'), val: data.extraversion, color: "bg-orange-500" },
                        { label: t('reports.bigfive.traits.agreeableness'), val: data.agreeableness, color: "bg-green-500" },
                        { label: t('reports.bigfive.traits.stability'), val: data.stability, color: "bg-slate-500" }
                    ].map((tr, i) => (
                        <div key={i}>
                            <div className="flex justify-between items-center mb-1.5">
                                <span className="text-[10px] font-bold text-darkgray uppercase">{tr.label}</span>
                                <span className="text-xs font-serif font-bold text-petroleum">{Math.round(tr.val)}%</span>
                            </div>
                            <div className="h-1 w-full bg-gray-50 rounded-full overflow-hidden">
                                <div className={`h-full ${tr.color}`} style={{ width: `${tr.val}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      <section className="p-8 md:p-16 border-b border-gray-100 bg-offwhite">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
             <div className="lg:col-span-7 bg-white p-12 rounded-[3rem] border-2 border-dashed border-sage/30 shadow-2xl text-center">
                <div className="flex justify-center gap-1 mb-6">
                    {[...Array(archetype.stars)].map((_, i) => <Star key={i} size={16} className="text-terracotta fill-terracotta" />)}
                </div>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-2">{t('common.archetype_dominant')}</span>
                <h2 className="font-serif text-5xl text-petroleum mb-6 leading-tight">{archetype.title}</h2>
                <p className="text-gray-500 text-lg leading-relaxed font-light italic">"{archetype.desc}"</p>
             </div>

             <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-2 mb-4">
                   <JobIcon size={20} className="text-terracotta" />
                   <h4 className="font-bold text-xs uppercase tracking-widest text-darkgray">{t('reports.common.career_match')}</h4>
                </div>
                {careerMatch.map((c, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center group hover:border-terracotta transition-all">
                    <div>
                       <p className="font-bold text-sm text-petroleum mb-1">{c.name}</p>
                       <p className="text-[9px] text-gray-400 uppercase font-black">{c.tag}</p>
                    </div>
                    <div className="text-right">
                       <p className="font-serif text-xl font-bold text-terracotta">{c.match}%</p>
                       <p className="text-[8px] text-gray-300 uppercase font-bold">Match Score</p>
                    </div>
                  </div>
                ))}
                <button onClick={onBookingRequest} className="w-full py-4 text-[10px] font-black uppercase tracking-widest text-gray-400 border border-dashed border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                   Ver lista completa de 50 carreiras
                </button>
             </div>
          </div>
      </section>

      <section className="p-8 md:p-16 bg-white">
        <AIInsights testType="bigfive" scores={data} userName={lead.name} />
      </section>
    </ReportWrapper>
  );
};

export default BigFiveReport;
