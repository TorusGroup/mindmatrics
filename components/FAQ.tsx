import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';

const FAQ: React.FC = () => {
  const { t } = useI18n();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1')
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2')
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3')
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4')
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-offwhite rounded-2xl text-petroleum mb-4">
            <HelpCircle size={28} />
          </div>
          <h2 className="font-serif text-4xl text-petroleum mb-4">{t('faq.title')}</h2>
          <p className="text-gray-500">{t('faq.subtitle')}</p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, idx) => (
            <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className={`w-full flex items-center justify-between p-6 text-left transition-colors ${activeIndex === idx ? 'bg-offwhite text-petroleum' : 'bg-white hover:bg-gray-50'}`}
              >
                <span className="font-bold text-lg">{item.question}</span>
                <ChevronDown size={20} className={`transition-transform duration-300 ${activeIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === idx ? 'max-h-96 opacity-100 p-6 pt-0 bg-offwhite' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600 font-light leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;