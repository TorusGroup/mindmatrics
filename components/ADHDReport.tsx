
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { Brain, Coffee, Zap, LayoutGrid } from 'lucide-react';
import AIInsights from './AIInsights';
import { useI18n } from '../contexts/I18nContext';
import ReportWrapper from './layout/ReportWrapper';

interface ADHDReportProps {
  data: {
    partA: number;
    inattention: number;
    hyperactivity: number;
    impulsivity: number;
    answers: Record<number, number>;
  };
  lead: {
    name: string;
    email: string;
  };
  metadata?: any;
  onBookingRequest?: () => void;
}

const ADHDReport: React.FC<ADHDReportProps> = ({ data, lead, metadata, onBookingRequest }) => {
  const { t } = useI18n();

  const getArchetype = () => {
    if (data.inattention > 60 && data.hyperactivity > 60) return t('reports.adhd.archetypes.creative_tornado');
    if (data.inattention > 60) return t('reports.adhd.archetypes.silent_architect');
    return t('reports.adhd.archetypes.turbo_engine');
  };

  const archetype = getArchetype();

  const radarData = [
    { subject: t('reports.common.focus'), A: data.inattention },
    { subject: t('reports.common.energy'), A: data.hyperactivity },
    { subject: t('reports.common.control'), A: data.impulsivity },
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
      <div className="p-8 md:p-16 border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-offwhite rounded-[2.5rem] p-8 border border-sage/10 relative shadow-inner">
            <div className="flex items-center gap-2 mb-6 text-terracotta">
              <Brain size={24} />
              <span className="text-xs font-bold uppercase tracking-widest">{t('common.archetype_dominant')}</span>
            </div>
            <h3 className="font-serif text-4xl text-petroleum mb-4">{archetype.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-8 font-light italic">{archetype.desc}</p>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-tighter">
                <span className="text-gray-400">Nível de Inatenção</span>
                <span className="text-terracotta">{Math.round(data.inattention)}%</span>
              </div>
              <div className="w-full bg-white h-1.5 rounded-full overflow-hidden">
                 <div className="h-full bg-terracotta" style={{ width: `${data.inattention}%` }}></div>
              </div>
            </div>
          </div>

          <div className="h-[350px] bg-white rounded-3xl p-4 shadow-sm">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#2C5F6F', fontSize: 12, fontWeight: 'bold' }} />
                <Radar name="Score" dataKey="A" stroke="#C97D60" strokeWidth={3} fill="#C97D60" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="p-8 md:p-16 bg-offwhite">
        <AIInsights testType="adhd" scores={data} userName={lead.name} />
      </div>
    </ReportWrapper>
  );
};

export default ADHDReport;
