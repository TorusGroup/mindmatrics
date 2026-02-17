
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { Lightbulb, Target, Zap, Heart, Anchor, LayoutGrid } from 'lucide-react';
import AIInsights from './AIInsights';
import { useI18n } from '../contexts/I18nContext';
import ReportWrapper from './layout/ReportWrapper';
import { LeadData } from '../types/assessment';

interface BigFiveReportProps {
  data: {
    openness: number;
    conscientiousness: number;
    extraversion: number;
    agreeableness: number;
    stability: number;
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

  const getTraitAnalysis = (trait: string, score: number) => {
    if (trait === 'openness') return score > 60 ? t('reports.bigfive.archetypes.explorer') : t('reports.bigfive.archetypes.realist');
    if (trait === 'conscientiousness') return score > 60 ? t('reports.bigfive.archetypes.architect') : t('reports.bigfive.archetypes.improviser');
    if (trait === 'extraversion') return score > 60 ? t('reports.bigfive.archetypes.catalyst') : t('reports.bigfive.archetypes.observer');
    if (trait === 'agreeableness') return score > 60 ? t('reports.bigfive.archetypes.harmonizer') : t('reports.bigfive.archetypes.analyst');
    return score > 60 ? t('reports.bigfive.archetypes.anchor') : t('reports.bigfive.archetypes.sensor');
  };

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
      <div className="p-8 md:p-16 border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2 text-petroleum">
              <LayoutGrid size={20} />
              <span className="text-xs font-bold uppercase tracking-widest">{t('reports.common.summary')}</span>
            </div>
            {[
              { key: 'openness', label: t('reports.bigfive.traits.openness'), val: data.openness, icon: Lightbulb, color: 'text-purple-500' },
              { key: 'conscientiousness', label: t('reports.bigfive.traits.conscientiousness'), val: data.conscientiousness, icon: Target, color: 'text-blue-500' },
              { key: 'extraversion', label: t('reports.bigfive.traits.extraversion'), val: data.extraversion, icon: Zap, color: 'text-orange-500' },
              { key: 'agreeableness', label: t('reports.bigfive.traits.agreeableness'), val: data.agreeableness, icon: Heart, color: 'text-green-500' },
              { key: 'stability', label: t('reports.bigfive.traits.stability'), val: data.stability, icon: Anchor, color: 'text-slate-500' }
            ].map((trait, i) => (
              <div key={i} className="bg-offwhite p-4 rounded-2xl flex items-center justify-between border border-transparent hover:border-sage/20 transition-all">
                <div className="flex items-center gap-3">
                  <trait.icon size={18} className={trait.color} />
                  <div>
                    <p className="text-sm font-bold text-petroleum">{trait.label}</p>
                    <p className="text-[10px] text-gray-400 uppercase font-bold">{getTraitAnalysis(trait.key, trait.val)}</p>
                  </div>
                </div>
                <span className="font-serif text-xl font-bold text-petroleum">{Math.round(trait.val)}%</span>
              </div>
            ))}
          </div>

          <div className="h-[400px] bg-white rounded-3xl shadow-xl border border-gray-50 p-6">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#2C5F6F', fontSize: 12, fontWeight: 'bold', fontFamily: 'serif' }} />
                <Radar name="Score" dataKey="A" stroke="#C97D60" strokeWidth={3} fill="#C97D60" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="p-8 md:p-16 bg-offwhite">
        <AIInsights testType="bigfive" scores={data} userName={lead.name} />
      </div>
    </ReportWrapper>
  );
};

export default BigFiveReport;
