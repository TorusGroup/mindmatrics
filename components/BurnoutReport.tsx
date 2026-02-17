
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { Flame, AlertTriangle, ShieldCheck, Activity } from 'lucide-react';
import AIInsights from './AIInsights';
import { useI18n } from '../contexts/I18nContext';
import ReportWrapper from './layout/ReportWrapper';

interface BurnoutReportProps {
  data: {
    exhaustion: number;
    depersonalization: number;
    accomplishment: number;
  };
  lead: {
    name: string;
    email: string;
  };
  // Added metadata prop to resolve TypeScript error in App.tsx
  metadata?: any;
  onBookingRequest?: () => void;
}

// Added metadata to destructured props
const BurnoutReport: React.FC<BurnoutReportProps> = ({ data, lead, metadata, onBookingRequest }) => {
  const { t } = useI18n();

  const radarData = [
    { subject: t('reports.burnout.exhaustion'), A: data.exhaustion },
    { subject: t('reports.burnout.cynicism'), A: data.depersonalization },
    { subject: t('reports.burnout.accomplishment'), A: 100 - data.accomplishment }, 
  ];

  const getRiskLevel = () => {
    const avg = (data.exhaustion + data.depersonalization + (100 - data.accomplishment)) / 3;
    if (avg > 70) return { label: t('reports.burnout.riskLevels.critical'), color: 'text-red-600', bg: 'bg-red-50' };
    if (avg > 40) return { label: t('reports.burnout.riskLevels.moderate'), color: 'text-orange-600', bg: 'bg-orange-50' };
    return { label: t('reports.burnout.riskLevels.healthy'), color: 'text-green-600', bg: 'bg-green-50' };
  };

  const risk = getRiskLevel();

  return (
    <ReportWrapper 
      lead={lead} 
      reportTitle={t('reports.burnout.title')} 
      reportSubtitle={t('reports.burnout.subtitle')}
      accentColor="darkgray"
      // Added missing testId and passed metadata to ReportWrapper
      testId="burnout"
      metadata={metadata}
      onBookingRequest={onBookingRequest}
    >
      <section className="p-8 md:p-16 border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-8 text-terracotta">
              <Activity size={20} />
              <span className="text-[10px] font-black uppercase tracking-widest">{t('reports.common.attention')}</span>
            </div>
            <div className="space-y-6">
              {[
                { label: t('reports.burnout.exhaustion'), val: data.exhaustion, icon: Flame, color: 'text-red-500' },
                { label: t('reports.burnout.cynicism'), val: data.depersonalization, icon: AlertTriangle, color: 'text-orange-500' },
                { label: t('reports.burnout.accomplishment'), val: data.accomplishment, icon: ShieldCheck, color: 'text-green-500' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-offwhite rounded-2xl border border-gray-100 group hover:border-terracotta/20 transition-all">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-white shadow-sm ${item.color}`}>
                        <item.icon size={16} />
                      </div>
                      <span className="font-bold text-xs uppercase tracking-widest text-darkgray">{item.label}</span>
                    </div>
                    <span className="font-serif text-2xl font-bold text-petroleum">{Math.round(item.val)}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-full transition-all duration-1000 ${i === 2 ? 'bg-green-500' : 'bg-terracotta'}`} style={{ width: `${item.val}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-[450px] bg-white rounded-[3rem] shadow-xl border border-gray-50 p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5"><Activity size={120} /></div>
            <ResponsiveContainer width="100%" height="80%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                <PolarGrid stroke="#f3f4f6" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#2C5F6F', fontSize: 10, fontWeight: '800' }} />
                <Radar name="Status" dataKey="A" stroke="#C97D60" strokeWidth={3} fill="#C97D60" fillOpacity={0.15} />
              </RadarChart>
            </ResponsiveContainer>
            <div className={`p-6 rounded-2xl text-center font-black text-xs uppercase tracking-[0.2em] shadow-sm ${risk.bg} ${risk.color}`}>
              {risk.label}
            </div>
          </div>
        </div>
      </section>

      <section className="p-8 md:p-16 bg-offwhite">
        <AIInsights testType="burnout" scores={data} userName={lead.name} />
      </section>
    </ReportWrapper>
  );
};

export default BurnoutReport;
