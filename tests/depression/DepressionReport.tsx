
import React, { useMemo } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Cell, PolarGrid, Radar, RadarChart, PolarAngleAxis } from 'recharts';
import { ShieldAlert, HeartPulse, AlertCircle, Info, Phone, MessageCircle, Brain, Activity } from 'lucide-react';
import AIInsights from '../../components/AIInsights';
import { useI18n } from '../../contexts/I18nContext';
import ReportWrapper from '../../components/layout/ReportWrapper';

interface DepressionReportProps {
  data: any;
  lead: {
    name: string;
    email: string;
  };
  metadata?: any;
  onBookingRequest?: () => void;
}

const DepressionReport: React.FC<DepressionReportProps> = ({ data, lead, metadata, onBookingRequest }) => {
  const { t } = useI18n();
  const scores = useMemo(() => data?.scores || data || {}, [data]);

  // Score BDI original é de 0 a 63 (21 questões * 3 pontos)
  const rawBdiScore = useMemo(() => {
    return Math.round((scores.globalScore / 100) * 63);
  }, [scores.globalScore]);

  const severity = useMemo(() => {
    if (rawBdiScore >= 29) return { label: 'DEPRESSÃO GRAVE', color: 'text-red-700', bg: 'bg-red-50', border: 'border-red-200', icon: ShieldAlert };
    if (rawBdiScore >= 20) return { label: 'DEPRESSÃO MODERADA', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200', icon: AlertCircle };
    if (rawBdiScore >= 14) return { label: 'DEPRESSÃO LEVE', color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200', icon: Info };
    return { label: 'MÍNIMO / NORMAL', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200', icon: HeartPulse };
  }, [rawBdiScore]);

  const radarData = [
    { subject: 'Cognitivo', A: scores.cognitive || 50 },
    { subject: 'Afetivo', A: scores.affective || 50 },
    { subject: 'Somático', A: scores.somatic || 50 },
  ];

  return (
    <ReportWrapper 
      lead={lead} 
      reportTitle="Análise de Estado de Humor" 
      reportSubtitle="Protocolo Beck Depression Inventory-II"
      accentColor="darkgray"
      testId="depression"
      metadata={metadata}
      onBookingRequest={onBookingRequest}
    >
      {/* 1. Clinical Severity Gauge */}
      <section className="p-8 md:p-16 border-b border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className={`${severity.bg} border ${severity.border} p-12 rounded-[3.5rem] text-center shadow-sm relative overflow-hidden`}>
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-darkgray">
                <severity.icon size={180} />
            </div>
            
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-4 block">Índice Clínico BDI-II</span>
            <h2 className="font-serif text-6xl text-petroleum mb-4">{rawBdiScore} <span className="text-xl text-gray-300">/ 63</span></h2>
            <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-full border border-current font-black text-sm tracking-widest ${severity.color}`}>
                <severity.icon size={18} /> {severity.label}
            </div>
            
            <p className="mt-8 text-sm text-gray-500 max-w-xl mx-auto leading-relaxed italic">
                "Os resultados refletem seu estado emocional relatado nas últimas duas semanas. Pontuações elevadas indicam a necessidade de suporte clínico especializado."
            </p>
          </div>
        </div>
      </section>

      {/* 2. Breakdown por Domínios Neurais */}
      <section className="p-8 md:p-16 border-b border-gray-100 bg-offwhite">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                  <h3 className="font-serif text-3xl text-petroleum mb-8">Arquitetura dos Sintomas</h3>
                  <div className="space-y-8">
                      {[
                          { label: "Domínio Cognitivo", val: scores.cognitive || 0, desc: "Pensamentos sobre si, o futuro e autocrítica.", icon: Brain, color: "bg-petroleum" },
                          { label: "Domínio Afetivo", val: scores.affective || 0, desc: "Tristeza, perda de prazer e choro.", icon: HeartPulse, color: "bg-terracotta" },
                          { label: "Domínio Somático", val: scores.somatic || 0, desc: "Sono, apetite, fadiga e energia física.", icon: Activity, color: "bg-sage" }
                      ].map((d, i) => (
                          <div key={i} className="group">
                              <div className="flex justify-between items-end mb-2">
                                  <div className="flex items-center gap-3">
                                      <d.icon size={18} className="text-gray-400" />
                                      <span className="text-xs font-bold uppercase tracking-widest text-darkgray">{d.label}</span>
                                  </div>
                                  <span className="text-sm font-serif font-bold text-petroleum">{Math.round(d.val)}%</span>
                              </div>
                              <div className="h-1.5 w-full bg-white rounded-full overflow-hidden mb-2">
                                  <div className={`h-full ${d.color} transition-all duration-1000`} style={{ width: `${d.val}%` }}></div>
                              </div>
                              <p className="text-[10px] text-gray-400 leading-relaxed uppercase tracking-tighter font-bold">{d.desc}</p>
                          </div>
                      ))}
                  </div>
              </div>
              <div className="h-[400px] bg-white rounded-[3rem] p-10 shadow-inner border border-gray-100">
                  <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                          <PolarGrid stroke="#e5e7eb" />
                          <PolarAngleAxis dataKey="subject" tick={{ fill: '#2C5F6F', fontSize: 11, fontWeight: 'bold' }} />
                          <Radar name="Sintomatologia" dataKey="A" stroke="#3D3D3D" strokeWidth={4} fill="#3D3D3D" fillOpacity={0.1} />
                      </RadarChart>
                  </ResponsiveContainer>
              </div>
          </div>
      </section>

      {/* 3. Safety Net Section */}
      <section className="p-8 md:p-16 border-b border-gray-100 bg-white">
          <div className="max-w-4xl mx-auto">
              <div className="bg-red-900 text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
                  <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-1000"></div>
                  <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                      <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center shrink-0">
                        <ShieldAlert size={48} className="text-red-300" />
                      </div>
                      <div>
                          <h3 className="font-serif text-3xl mb-4 leading-tight">Nota de Ética e Segurança</h3>
                          <p className="text-red-100/70 text-sm leading-relaxed mb-8 max-w-2xl">
                              Este relatório é uma ferramenta de triagem inicial e **não substitui uma consulta clínica**. 
                              Se você está experimentando pensamentos de desesperança severa ou ideação, por favor, busque ajuda profissional imediata. 
                              Você não precisa enfrentar isso sozinho.
                          </p>
                          <div className="flex flex-wrap gap-4">
                              <a href="tel:188" className="flex items-center gap-3 bg-white text-red-900 px-8 py-4 rounded-2xl font-bold transition-all hover:bg-red-50">
                                  <Phone size={20} /> Ligar CVV (188)
                              </a>
                              <button onClick={onBookingRequest} className="flex items-center gap-3 border border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all uppercase text-xs tracking-widest">
                                  <MessageCircle size={20} /> Agendar Orientação
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 4. IA Deep Analysis */}
      <section className="p-8 md:p-16 bg-offwhite">
          <div className="max-w-4xl mx-auto">
              <div className="mb-12 text-center">
                <h3 className="font-serif text-4xl text-petroleum mb-2 italic">Consultoria Neural Mindbot</h3>
                <p className="text-gray-400 text-xs font-black uppercase tracking-[0.3em]">Mapeamento Profundo via Inteligência Artificial</p>
              </div>
              <AIInsights testType="depression" scores={scores} userName={lead.name} />
          </div>
      </section>
    </ReportWrapper>
  );
};

export default DepressionReport;
