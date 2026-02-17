
import React from 'react';
import { useI18n } from '../../contexts/I18nContext';
import ReportWrapper from '../../components/layout/ReportWrapper';
import AIInsights from '../../components/AIInsights';
import { Shield, AlertTriangle, CheckCircle2, TrendingUp, Lock } from 'lucide-react';
import { LeadData } from '../../types/assessment';

interface ImpostorReportProps {
    data: any;
    lead: LeadData;
    metadata?: any;
    onBookingRequest?: () => void;
}

const ImpostorReport: React.FC<ImpostorReportProps> = ({ data, lead, metadata, onBookingRequest }) => {
    const { t } = useI18n();
    // Fix: Use globalScore and ensure it's capped at 100
    const score = Math.min(100, Math.round(data.globalScore || 0));

    const getLevel = (s: number) => {
        if (s <= 40) return { label: 'Baixa', color: 'text-sage', bg: 'bg-sage/10', text: 'Você tem uma segurança saudável nas suas competências.' };
        if (s <= 60) return { label: 'Moderada', color: 'text-yellow-600', bg: 'bg-yellow-100', text: 'Você tem dúvidas ocasionais, mas elas não te paralisam.' };
        if (s <= 80) return { label: 'Frequente', color: 'text-orange-600', bg: 'bg-orange-100', text: 'Os sentimentos de impostor afetam significativamente sua vida profissional.' };
        return { label: 'Intensa', color: 'text-terracotta', bg: 'bg-terracotta/10', text: 'Você vive com medo constante de ser descoberto. Isso causa alto estresse.' };
    };

    const level = getLevel(score);

    return (
        <ReportWrapper
            lead={lead}
            reportTitle="Decodificador do Impostor" // TODO: i18n
            reportSubtitle="Relatório de Análise CIPS" // TODO: i18n
            accentColor="indigo" // Keeping indigo as accent from config, but blending with petroleum
            testId="impostor"
            metadata={metadata}
            onBookingRequest={onBookingRequest}
        >
            {/* SECTION 1: THE VERDICT */}
            <section className="p-8 md:p-16 border-b border-gray-100 bg-white">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-offwhite border border-gray-200">
                        <Lock size={12} className="text-gray-400" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Análise Confidencial</span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl text-petroleum mb-6 leading-tight">
                        Nível de Fenômeno Impostor
                    </h2>
                    <div className={`inline-block px-10 py-4 rounded-full text-3xl font-black ${level.bg} ${level.color} mb-8 shadow-sm`}>
                        {level.label} <span className="text-lg opacity-60 ml-2">(Score: {score})</span>
                    </div>
                    <p className="text-xl text-darkgray/80 leading-relaxed font-light">
                        "{level.text}"
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* VISUAL 1: REALITY GAP */}
                    <div className="bg-offwhite p-10 rounded-[3rem] border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                        <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:rotate-12 transition-transform duration-700">
                            <Shield size={200} />
                        </div>

                        <div className="relative z-10">
                            <h3 className="font-serif text-2xl mb-8 flex items-center gap-3 text-petroleum">
                                <span className="p-3 bg-white rounded-xl shadow-sm"><Shield className="text-indigo-600" size={24} /></span>
                                Realidade vs. Percepção
                            </h3>

                            <div className="space-y-8">
                                <div>
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-xs font-black uppercase tracking-widest text-gray-400">Competência Objetiva</span>
                                        <span className="text-xs font-bold text-sage">100% Real</span>
                                    </div>
                                    <div className="h-4 bg-white rounded-full overflow-hidden shadow-inner border border-gray-100">
                                        <div className="h-full bg-sage w-full rounded-full"></div>
                                    </div>
                                    <p className="text-[10px] text-gray-400 mt-2 text-right">Baseado em fatos, conquistas e posição atual.</p>
                                </div>

                                <div>
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-xs font-black uppercase tracking-widest text-gray-400">Competência Sentida</span>
                                        <span className={`text-xs font-bold ${level.color}`}>{100 - score}% Percebido</span>
                                    </div>
                                    <div className="h-4 bg-white rounded-full overflow-hidden shadow-inner border border-gray-100">
                                        {/* Inverse logic: The higher the impostor score, the lower the perceived competence */}
                                        <div className={`h-full bg-indigo-500 transition-all duration-1000 rounded-full`} style={{ width: `${Math.max(5, 100 - score)}%` }}></div>
                                    </div>
                                    <p className="text-[10px] text-gray-400 mt-2 text-right">O quanto você INTERNALIZA seu sucesso.</p>
                                </div>
                            </div>

                            <div className="mt-8 p-4 bg-white/60 rounded-2xl border border-dashed border-indigo-200">
                                <p className="text-xs text-indigo-800 leading-relaxed italic">
                                    <span className="font-bold not-italic">O Gap do Impostor:</span> A diferença entre o que você entrega e o que você acha que entregou é onde mora a ansiedade.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* VISUAL 2: SYMPTOMS */}
                    <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl relative">
                        <h3 className="font-serif text-2xl mb-8 flex items-center gap-3 text-petroleum">
                            <span className="p-3 bg-offwhite rounded-xl"><AlertTriangle className="text-terracotta" size={24} /></span>
                            Sintomas Detectados
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Medo de ser avaliado",
                                "Atribuição de sucesso à sorte",
                                "Dificuldade em aceitar elogios",
                                "Comparação excessiva com pares",
                                "Medo de 'ser descoberto'"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-offwhite transition-colors group cursor-default">
                                    <div className={`mt-1 min-w-[20px] h-5 rounded-full border-2 flex items-center justify-center transition-colors ${score > 40 ? 'border-terracotta bg-terracotta text-white' : 'border-gray-200 text-transparent'}`}>
                                        <CheckCircle2 size={12} />
                                    </div>
                                    <span className={`text-sm font-medium ${score > 40 ? 'text-darkgray' : 'text-gray-400 line-through'}`}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* SECTION 2: AI INSIGHTS */}
            <section className="p-8 md:p-16 bg-offwhite">
                <AIInsights testType="impostor" scores={data} userName={lead.name} />
            </section>

            {/* SECTION 3: NEXT STEPS */}
            <section className="p-8 md:p-16 bg-petroleum text-white text-center">
                <div className="max-w-2xl mx-auto">
                    <TrendingUp className="mx-auto text-sage mb-6" size={48} />
                    <h3 className="font-serif text-3xl md:text-4xl mb-6">Próximos Passos</h3>
                    <p className="text-lg text-gray-300 mb-10 leading-loose font-light">
                        A Síndrome do Impostor é comum em pessoas de alta performance.
                        O primeiro passo para vencê-la é separar sentimentos de fatos com metodologia.
                    </p>
                    <button
                        onClick={onBookingRequest}
                        className="bg-terracotta hover:bg-white hover:text-petroleum text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-2xl uppercase tracking-widest text-xs transform hover:-translate-y-1"
                    >
                        Agendar Mentoria de Carreira
                    </button>
                </div>
            </section>
        </ReportWrapper>
    );
};

export default ImpostorReport;
