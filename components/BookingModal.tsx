
import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const { t } = useI18n();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-petroleum/40 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-fade-in-up">
        {status === 'success' ? (
          <div className="p-12 text-center py-20">
            <div className="w-20 h-20 bg-sage/20 text-sage rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="font-serif text-3xl text-petroleum mb-4">{t('booking.success_title')}</h2>
            <p className="text-gray-500 mb-8">{t('booking.success_desc')}</p>
            <button onClick={onClose} className="bg-petroleum text-white px-8 py-3 rounded-full font-bold">{t('booking.close')}</button>
          </div>
        ) : (
          <>
            <div className="bg-offwhite p-8 border-b border-gray-100 flex justify-between items-center">
              <div>
                <h3 className="font-serif text-2xl text-petroleum">{t('booking.title')}</h3>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">{t('booking.subtitle')}</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">{t('booking.subject')}</label>
                  <select className="w-full bg-offwhite border-none p-4 rounded-xl text-sm focus:ring-2 focus:ring-petroleum outline-none">
                    <option>{t('booking.options.report')}</option>
                    <option>{t('booking.options.b2b')}</option>
                    <option>{t('booking.options.support')}</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">{t('booking.date')}</label>
                  <input type="date" required className="w-full bg-offwhite border-none p-4 rounded-xl text-sm focus:ring-2 focus:ring-petroleum outline-none" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">{t('booking.obs')}</label>
                <textarea rows={3} placeholder="..." className="w-full bg-offwhite border-none p-4 rounded-xl text-sm focus:ring-2 focus:ring-petroleum outline-none resize-none" />
              </div>

              <div className="flex items-center gap-3 p-4 bg-sage/10 rounded-2xl text-petroleum text-xs">
                <Calendar size={18} className="shrink-0" />
                <p>{t('booking.info')}</p>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-petroleum text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg hover:bg-petroleum/90 transition-all"
              >
                {status === 'loading' ? <Loader2 className="animate-spin" /> : <>{t('booking.cta')} <ArrowRight size={18} /></>}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingModal;