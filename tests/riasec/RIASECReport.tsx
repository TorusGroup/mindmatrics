
import React, { useMemo } from 'react';
import { ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import ReportWrapper from '../../components/layout/ReportWrapper';
import { useI18n } from '../../contexts/I18nContext';
import { Briefcase, Compass, Map, Wrench, BookOpen, PenTool, Users, TrendingUp, FileText } from 'lucide-react';
import AIInsights from '../../components/AIInsights';
import { LeadData } from '../../types/assessment';
import { CAREER_DATABASE } from './careers';

interface RIASECReportProps {
    data: any;
    lead: LeadData;
    metadata?: any;
    onBookingRequest?: () => void;
}

const RIASECReport: React.FC<RIASECReportProps> = ({ data, lead, metadata, onBookingRequest }) => {
    const { t } = useI18n();

    // Data Normalization (Percentages)
    // useTestSession returns percentages (0-100)
    const scores = data;

    const radarData = [
        { subject: 'Realista (R)', A: scores.realistic || 0, fullMark: 100, icon: Wrench },
        { subject: 'Investigativo (I)', A: scores.investigative || 0, fullMark: 100, icon: BookOpen },
        { subject: 'Artístico (A)', A: scores.artistic || 0, fullMark: 100, icon: PenTool },
        { subject: 'Social (S)', A: scores.social || 0, fullMark: 100, icon: Users },
        { subject: 'Empreendedor (E)', A: scores.enterprising || 0, fullMark: 100, icon: TrendingUp },
        { subject: 'Convencional (C)', A: scores.conventional || 0, fullMark: 100, icon: FileText },
    ];

    // Determination of Top 3 (Holland Code)
    const top3 = [...radarData]
        .sort((a, b) => b.A - a.A)
        .slice(0, 3)
        .map(item => item.subject.charAt(0));

    const hollandCode = top3.join('-');

    const getDimensionColor = (dim: string) => {
        if (dim.includes('Realista')) return 'text-red-500';
        if (dim.includes('Investigativo')) return 'text-blue-500';
        if (dim.includes('Artístico')) return 'text-purple-500';
        if (dim.includes('Social')) return 'text-green-500';
        if (dim.includes('Empreendedor')) return 'text-orange-500';
        if (dim.includes('Convencional')) return 'text-gray-500';
        return 'text-petroleum';
    };

    return (
        <ReportWrapper
            lead={lead}
            reportTitle="Bússola de Carreira"
            reportSubtitle="Análise Vocacional O*NET (RIASEC)"
            accentColor="petroleum"
            testId="riasec"
            metadata={metadata}
            onBookingRequest={onBookingRequest}
        >
            {/* HERO RESULT */}
            <section className="p-8 md:p-16 border-b border-gray-100 bg-white">
                <div className="text-center mb-12">
                    <span className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2 block">Seu Código Holland</span>
                    <h1 className="text-6xl md:text-8xl font-black text-petroleum tracking-tighter mb-4">{hollandCode}</h1>
                    <p className="text-xl text-darkgray font-light">
                        Sua tríade vocacional é composta por: <br />
                        {radarData.sort((a, b) => b.A - a.A).slice(0, 3).map((d, i) => (
                            <span key={i} className={`font-bold ${getDimensionColor(d.subject)}`}>{d.subject.split('(')[0]} </span>
                        ))}
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* RADAR CHART */}
                    <div className="h-[500px] w-full bg-offwhite rounded-[3rem] p-8 relative mb-16 shadow-inner">
                        <div className="absolute top-8 left-0 w-full text-center text-[10px] font-black uppercase tracking-widest text-gray-300">Mapa de Interesses Profissionais</div>
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
                                <PolarGrid stroke="#e5e7eb" strokeDasharray="3 3" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#2C5F6F', fontSize: 13, fontWeight: 'bold' }} />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                <Radar name="Você" dataKey="A" stroke="#C97D60" strokeWidth={4} fill="#C97D60" fillOpacity={0.4} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* DOMINANT TRAITS */}
                    <div className="mb-8">
                        <h3 className="font-serif text-3xl text-petroleum mb-10 text-center flex items-center justify-center gap-3">
                            <Compass className="text-sage" />
                            Perfil Dominante
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {radarData.sort((a, b) => b.A - a.A).slice(0, 3).map((trait, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl flex flex-col items-center text-center gap-4 group hover:border-petroleum/20 transition-all hover:-translate-y-1">
                                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center bg-gray-50 text-darkgray group-hover:bg-petroleum group-hover:text-white transition-colors`}>
                                        <trait.icon size={40} />
                                    </div>
                                    <div className="w-full">
                                        <h4 className="font-bold text-xl text-darkgray mb-2">{trait.subject.split('(')[0]}</h4>
                                        <div className="flex items-center justify-center gap-2 mb-3">
                                            <span className="text-3xl font-serif text-petroleum">{Math.round(trait.A)}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden w-full">
                                            <div className="h-full bg-sage" style={{ width: `${trait.A}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CAREER MATCHES (DYNAMIC) */}
            <section className="p-8 md:p-16 bg-offwhite">
                <h3 className="font-serif text-3xl text-center text-petroleum mb-12">Carreiras Compatíveis com {hollandCode}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {(() => {
                        const topTrait = top3[0];
                        const secondTrait = top3[1] || top3[0]; // Fallback if only 1 trait strong
                        const thirdTrait = top3[2] || top3[1] || top3[0]; // Fallback

                        // Get suggestions for pairs: 1-2, 1-3, 2-3 to give mix
                        const key1 = `${topTrait}-${secondTrait}`;
                        const key2 = `${topTrait}-${thirdTrait}`;

                        // Fallback function if exact key missing
                        const getCarrers = (k: string) => CAREER_DATABASE[k] || CAREER_DATABASE[`${secondTrait}-${topTrait}`] || [];

                        const suggestions1 = getCarrers(key1);
                        const suggestions2 = getCarrers(key2);

                        // Display logic: 3 Columns based on dominant spheres

                        return (
                            <>
                                {/* Primary Match */}
                                <div className="bg-white p-8 rounded-[2rem] shadow-xl border-t-8 border-petroleum group hover:-translate-y-2 transition-transform">
                                    <Briefcase className="mb-4 text-petroleum" size={32} />
                                    <h4 className="font-bold text-xl mb-2">Match Primário ({topTrait}-{secondTrait})</h4>
                                    <p className="text-sm text-gray-400 mb-6">Combinação das suas duas características mais fortes.</p>
                                    <ul className="space-y-4">
                                        {suggestions1.slice(0, 3).map((job, i) => (
                                            <li key={i} className="flex flex-col gap-1 border-b border-gray-50 pb-2 last:border-0">
                                                <span className="font-bold text-darkgray flex items-center gap-2">
                                                    <Map size={14} className="text-sage" /> {job.title}
                                                </span>
                                                <span className="text-xs text-gray-400 pl-6">{job.description}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Secondary Match */}
                                <div className="bg-white p-8 rounded-[2rem] shadow-xl border-t-8 border-sage group hover:-translate-y-2 transition-transform">
                                    <Briefcase className="mb-4 text-sage" size={32} />
                                    <h4 className="font-bold text-xl mb-2">Match Secundário ({topTrait}-{thirdTrait})</h4>
                                    <p className="text-sm text-gray-400 mb-6">Explorando sua terceira dimensão dominante.</p>
                                    <ul className="space-y-4">
                                        {suggestions2.slice(0, 3).map((job, i) => (
                                            <li key={i} className="flex flex-col gap-1 border-b border-gray-50 pb-2 last:border-0">
                                                <span className="font-bold text-darkgray flex items-center gap-2">
                                                    <Map size={14} className="text-sage" /> {job.title}
                                                </span>
                                                <span className="text-xs text-gray-400 pl-6">{job.description}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Exploration Match (Reverse or single trait) */}
                                <div className="bg-white p-8 rounded-[2rem] shadow-xl border-t-8 border-terracotta group hover:-translate-y-2 transition-transform">
                                    <Briefcase className="mb-4 text-terracotta" size={32} />
                                    <h4 className="font-bold text-xl mb-2">Zona de Expansão</h4>
                                    <p className="text-sm text-gray-400 mb-6">Carreiras que desafiam seu perfil principal.</p>
                                    <ul className="space-y-2 text-sm font-medium text-darkgray">
                                        <li className="flex items-center gap-2 p-2 bg-offwhite rounded-lg">
                                            <TrendingUp size={14} className="text-terracotta" />
                                            <span className="text-xs">Explore papéis de liderança em sua área técnica.</span>
                                        </li>
                                        <li className="flex items-center gap-2 p-2 bg-offwhite rounded-lg">
                                            <BookOpen size={14} className="text-terracotta" />
                                            <span className="text-xs">Invista em cursos de Gestão (MBA) se seu E for baixo.</span>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        );
                    })()}
                </div>
            </section>

            <section className="p-8 md:p-16 bg-white">
                <AIInsights testType="riasec" scores={data} userName={lead.name} />
            </section>
        </ReportWrapper>
    );
};

export default RIASECReport;
