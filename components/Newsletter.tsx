import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';

const Newsletter: React.FC = () => {
  const { t } = useI18n();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-petroleum rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">{t('newsletter.title')}</h3>
              <p className="text-sage text-lg leading-relaxed font-light">
                {t('newsletter.desc')}
              </p>
            </div>

            <div>
              {subscribed ? (
                <div className="flex items-center gap-4 text-white bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 animate-fade-in">
                  <CheckCircle2 size={32} className="text-sage" />
                  <div>
                    <p className="font-bold">{t('newsletter.success_title')}</p>
                    <p className="text-xs text-gray-300 uppercase tracking-widest mt-1">{t('newsletter.success_desc')}</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder={t('newsletter.placeholder')}
                    className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-sage transition-all"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-white text-petroleum font-bold px-8 py-4 rounded-2xl hover:bg-sage hover:text-white transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    {t('newsletter.button')} <Send size={18} />
                  </button>
                </form>
              )}
              <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] mt-4 ml-2">
                {t('newsletter.disclaimer')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;