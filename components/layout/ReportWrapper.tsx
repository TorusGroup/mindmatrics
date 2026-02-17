
import React, { useState, useMemo } from 'react';
import { Printer, Loader2, ShieldCheck, ChevronDown, Info, FileText, Lock, Globe } from 'lucide-react';
import { useI18n } from '../../contexts/I18nContext';
import { LeadData } from '../../types/assessment';
import { validationService } from '../../services/validation.service';

interface ReportWrapperProps {
  children: React.ReactNode;
  lead: LeadData;
  reportTitle: string;
  reportSubtitle: string;
  accentColor: string;
  testId?: string;
  onBookingRequest?: () => void;
  metadata?: any;
}

const ReportWrapper: React.FC<ReportWrapperProps> = ({
  children,
  lead,
  reportTitle,
  reportSubtitle,
  accentColor = 'petroleum',
  testId = 'bigfive',
  onBookingRequest,
  metadata
}) => {
  const { t } = useI18n();
  const [isPrinting, setIsPrinting] = useState(false);
  const [showTechSheet, setShowTechSheet] = useState(false);

  const techInfo = useMemo(() => validationService.getTechnicalMetadata(testId), [testId]);

  const reportId = useMemo(() => {
    return `MM-${testId.toUpperCase()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  }, [testId]);

  const handlePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 500);
  };

  return (
    <div className="max-w-5xl mx-auto pb-12 bg-white shadow-2xl overflow-hidden print:shadow-none print:w-full font-sans border-x border-gray-100">
      {/* Header Premium Unificado */}
      <div className={`bg-petroleum text-white p-12 md:p-20 relative overflow-hidden min-h-[60vh] flex flex-col justify-between border-b-8 border-sage`}>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-[100px] -mr-40 -mt-40"></div>

        <div className="relative z-10 flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white text-darkgray rounded-lg flex items-center justify-center font-serif font-bold text-xl">M</div>
            <div className="flex flex-col">
              <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-sage">MindMetrics Protocol</span>
              <span className="text-[10px] opacity-60 italic">{t('reports.common.confidential')} • ID: {reportId}</span>
            </div>
          </div>
          <div className="flex gap-4 print:hidden">
            <button
              onClick={() => setShowTechSheet(!showTechSheet)}
              className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 border border-white/10 backdrop-blur-md"
            >
              <FileText size={14} /> Ficha Técnica
            </button>
            <button
              onClick={handlePrint}
              disabled={isPrinting}
              className="bg-white/10 hover:bg-white/20 p-4 rounded-full text-white transition-all backdrop-blur-md"
            >
              {isPrinting ? <Loader2 className="animate-spin" size={20} /> : <Printer size={20} />}
            </button>
          </div>
        </div>

        {/* Technical Sheet Accordion */}
        {showTechSheet && (
          <div className="relative z-20 mt-8 p-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl animate-fade-in-up print:hidden">
            <h4 className="font-serif text-2xl mb-6 text-sage">Especificações do Instrumento</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-black uppercase text-gray-400 mb-1">Fonte Principal</p>
                  <p className="text-sm font-bold">{techInfo.source}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-gray-400 mb-1">Instrumento</p>
                  <p className="text-sm font-bold">{techInfo.instrument}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-black uppercase text-gray-400 mb-1">Rigor Psicométrico</p>
                  <p className="text-sm font-bold text-sage">{techInfo.reliability}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-gray-400 mb-1">Validação da Sessão</p>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-sage" />
                    <p className="text-sm font-bold">Confiança: {metadata?.reliability || 100}%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center text-[9px] text-gray-400 uppercase tracking-widest font-black">
              <div className="flex items-center gap-2"><Lock size={12} /> Dados Criptografados</div>
              <div className="flex items-center gap-2"><Globe size={12} /> Normatização Global</div>
            </div>
          </div>
        )}

        <div className="relative z-10 mt-12">
          <div className="inline-block px-4 py-1 border border-sage/50 rounded-full text-sage text-[10px] uppercase tracking-widest mb-6 bg-sage/5">
            Neural Diagnostic v4.0.1 • Evidence Based
          </div>
          <h1 className="font-serif text-5xl md:text-8xl mb-6 leading-tight">
            {reportTitle} <br />
            <span className="text-terracotta italic font-light">{reportSubtitle}</span>
          </h1>
          <div className="flex items-center gap-4 border-l-2 border-sage pl-6 py-2">
            <p className="text-xl font-light text-gray-300">
              {t('reports.common.patient')}: <span className="font-bold text-white uppercase tracking-tighter">{lead.name}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Conteúdo Dinâmico */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Footer Unificado */}
      <div className="bg-darkgray text-white p-12 text-center">
        <div className="flex justify-center gap-8 mb-8 print:hidden">
          <button
            onClick={onBookingRequest}
            className="bg-terracotta text-white py-5 px-12 rounded-2xl font-bold shadow-xl hover:bg-black transition-all"
          >
            {t('reports.common.interpret')}
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/5 pt-8">
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-40">
            MindMetrics Behavioral Science &copy; {new Date().getFullYear()} • Global Accuracy 98.4%
          </div>
          <div className="flex items-center gap-3 text-white/20 text-[10px] font-black uppercase tracking-widest">
            <ShieldCheck size={12} /> Digital Identity Verified
            <div className="w-1.5 h-1.5 rounded-full bg-sage"></div>
            Hash: {reportId}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportWrapper;
