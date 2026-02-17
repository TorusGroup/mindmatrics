
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { ArrowRight } from 'lucide-react';
import AIInsights from '../../components/AIInsights';
import { useI18n } from '../../contexts/I18nContext';
import ReportWrapper from '../../components/layout/ReportWrapper';

interface DigitalAddictionReportProps {
  data: {
    scores: any;
    calculator: {
        social: number;
        video: number;
        games: number;
    };
  };
  lead: {
    name: string;
    email: string;
  };
  metadata?: any;
  onBookingRequest?: () => void;
}

const DigitalAddictionReport: React.FC<DigitalAddictionReportProps> = ({ data, lead, metadata, onBookingRequest }) => {
  const { t } = useI18n();
  
  if (!data) return null;

  const getArchetype = (score: number) => {
      if (score > 75) return t('reports.digital_addiction.archetypes.escapist');
      if (score > 50) return t('reports.digital_addiction.archetypes.scroller');
      return t('reports.digital_addiction.archetypes.checker');
  };

  const totalDaily = (data.calculator?.social || 0) + (data.calculator?.video || 0) + (data.calculator?.games || 0);
  const yearsActive = 10; 
  const totalYearsLost = ((totalDaily * 365 * yearsActive) / 24 / 365).toFixed(1);

  const archetype = getArchetype(data.scores?.globalScore || 50);

  const radarData = [
    { subject: t('reports.common.control'), A: data.scores?.control || 60 },
    { subject: 'Social', A: data.scores?.social || 40 },
    { subject: 'Saúde', A: data.scores?.health || 50 },
    { subject: 'Obsessão', A: data.scores?.obsession || 30 },
    { subject: 'Foco', A: 100 - (totalDaily * 5) },
  ];

  return (
    <ReportWrapper 
      lead={lead} 
      reportTitle={t('strategy.card_digital_title')} 
      reportSubtitle="Análise de Higiene Digital"
      accentColor="petroleum"
      testId="digital_addiction"
      metadata={metadata}
      onBookingRequest={onBookingRequest}
    >
      <section className="p-12 md:p-24 bg-white border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="bg-black text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
                  <div className="relative z-10">
                      <span className="text-red-600 font-bold uppercase tracking-widest text-[10px] block mb-4">{t('common.archetype_dominant')}</span>
                      <h2 className="font-serif text-4xl mb-4">{archetype.title}</h2>
                      <p className="text-gray-400 leading-relaxed mb-8">{archetype.desc}</p>
                      <div className="p-4 bg-red-600/10 border border-red-600/20 rounded-xl">
                          <p className="text-[10px] uppercase font-bold text-red-500 tracking-widest">Status de Risco</p>
                          <p className="font-bold text-white">{archetype.risk}</p>
                      </div>
                  </div>
              </div>

              <div>
                  <h3 className="font-serif text-3xl mb-6">Tempo Consumido</h3>
                  <div className="p-8 bg-offwhite rounded-3xl border border-gray-100">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Vitalício Perdido</p>
                      <h4 className="text-6xl font-serif text-darkgray font-bold">{totalYearsLost} <span className="text-2xl font-sans text-gray-300">anos</span></h4>
                      <p className="text-[10px] text-gray-400 mt-4 italic">Cálculo baseado em {totalDaily}h diárias nos últimos 10 anos.</p>
                  </div>
              </div>
          </div>
      </section>

      <section className="p-12 md:p-24 bg-offwhite">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100">
                  <h4 className="font-bold text-red-600 uppercase tracking-widest text-[10px] mb-8">Mapa de Dependência</h4>
                  <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                            <PolarGrid stroke="#e5e7eb" />
                            <PolarAngleAxis dataKey="subject" tick={{ fill: '#3D3D3D', fontSize: 10, fontWeight: 'bold' }} />
                            <Radar name="Status" dataKey="A" stroke="#dc2626" strokeWidth={3} fill="#dc2626" fillOpacity={0.4} />
                        </RadarChart>
                      </ResponsiveContainer>
                  </div>
              </div>
              <div className="flex flex-col justify-center">
                  <h3 className="font-serif text-3xl mb-4">O Preço da Distração</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">Seu perfil indica padrões que podem estar drenando sua capacidade de foco profundo e execução estratégica.</p>
                  <button onClick={onBookingRequest} className="bg-red-600 text-white font-bold py-5 px-10 rounded-full flex items-center justify-center gap-3">
                      {t('reports.common.interpret')} <ArrowRight size={18} />
                  </button>
              </div>
          </div>
      </section>

      <section className="p-12 md:p-24 bg-white">
          <AIInsights testType="digital_addiction" scores={data.scores} userName={lead.name} />
      </section>
    </ReportWrapper>
  );
};

export default DigitalAddictionReport;
