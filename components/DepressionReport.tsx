import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Cell } from 'recharts';
import { AlertCircle, ShieldAlert, HeartPulse } from 'lucide-react';
import AIInsights from './AIInsights';
import { useI18n } from '../contexts/I18nContext';
import ReportWrapper from './layout/ReportWrapper';

interface DepressionReportProps {
  data: {
    scores: any;
  };
  lead: {
    name: string;
    email: string;
  };
  onBookingRequest?: () => void;
}

const DepressionReport: React.FC<DepressionReportProps> = ({ data, lead, onBookingRequest }) => {
  const { t } = useI18n();

  const getSeverity = (score: number) => {
    if (score >= 29) return { label: 'Depressão Grave', color: 'text-red-700', bg: 'bg-red-50' };
    if (score >= 20) return { label: 'Depressão Moderada', color: 'text-orange-600', bg: 'bg-orange-50' };
    if (score >= 14) return { label: 'Depressão Leve', color: 'text-yellow-600', bg: 'bg-yellow-50' };
    return { label: 'Mínimo/Normal', color: 'text-green-600', bg: 'bg-green-50' };
  };

  const totalScore = (data.scores?.globalScore / 100) * 63; // Normalizando para a escala 0-63 do BDI
  const severity = getSeverity(totalScore);

  const barData = [
    { name: 'Seu Score', value: totalScore },
    { name: 'Média', value: 12 }
  ];

  return (
    <ReportWrapper 
      lead={lead} 
      reportTitle="Análise de" 
      reportSubtitle="Estado de Humor"
      accentColor="darkgray"
      onBookingRequest={onBookingRequest}
    >
      <section className="p-12 md:p-24 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className={`${severity.bg} p-12 rounded-[3rem] border border-gray-100 shadow-sm text-center mb-16`}>
            <HeartPulse size={48} className={`${severity.color} mx-auto mb-6`} />
            <h2 className="font-serif text-4xl mb-2">Score Clínico: {Math.round(totalScore)}</h2>
            <p className={`text-xl font-bold uppercase tracking-widest ${severity.color}`}>
              {severity.label}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-3xl mb-6">Escala BDI-II</h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                O Inventário de Depressão de Beck (BDI-II) é um dos instrumentos mais utilizados mundialmente para mensurar a intensidade da depressão. 
                Os resultados indicam o seu estado nas últimas duas semanas.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between text-xs font-bold text-gray-400">
                  <span>0-13: Mínimo</span>
                  <span>14-19: Leve</span>
                  <span>20-28: Moderado</span>
                  <span>29-63: Grave</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden flex">
                  <div className="h-full bg-green-500 w-[20%]"></div>
                  <div className="h-full bg-yellow-500 w-[10%]"></div>
                  <div className="h-full bg-orange-500 w-[15%]"></div>
                  <div className="h-full bg-red-500 w-[55%]"></div>
                </div>
              </div>
            </div>

            <div className="h-[250px] bg-offwhite p-6 rounded-2xl">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                      {barData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? '#3D3D3D' : '#D1D5DB'} />
                      ))}
                    </Bar>
                  </BarChart>
               </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      <section className="p-12 md:p-24 bg-offwhite">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-900 text-white p-12 rounded-[3.5rem] shadow-2xl flex flex-col md:flex-row gap-12 items-center">
             <ShieldAlert size={80} className="shrink-0 text-red-400" />
             <div>
                <h3 className="font-serif text-3xl mb-4">Nota de Ética e Segurança</h3>
                <p className="opacity-70 leading-relaxed mb-6">
                  Este relatório é uma ferramenta de triagem e não substitui uma consulta com um psicólogo ou psiquiatra. 
                  Se você está experimentando pensamentos de autoextermínio ou desesperança severa, por favor, procure ajuda imediata.
                </p>
                <div className="flex gap-4">
                  <a href="tel:188" className="bg-white text-red-900 px-6 py-3 rounded-full font-bold text-sm">Ligar CVV (188)</a>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="p-12 md:p-24 bg-white">
          <AIInsights testType="depression" scores={data.scores} userName={lead.name} />
      </section>
    </ReportWrapper>
  );
};

export default DepressionReport;
