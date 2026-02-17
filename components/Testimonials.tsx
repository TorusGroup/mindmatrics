
import React from 'react';
import { Quote, Star } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';

const Testimonials: React.FC = () => {
  const { t } = useI18n();

  const reviews = [
    {
      name: t('testimonials.t1.name'),
      role: t('testimonials.t1.role'),
      text: t('testimonials.t1.text'),
      rating: 5
    },
    {
      name: t('testimonials.t2.name'),
      role: t('testimonials.t2.role'),
      text: t('testimonials.t2.text'),
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-offwhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-terracotta font-bold tracking-[0.3em] text-xs uppercase mb-3">{t('testimonials.tag')}</h2>
          <h3 className="font-serif text-4xl text-petroleum">{t('testimonials.title')}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-50 relative group hover:shadow-xl transition-all">
              <div className="absolute top-6 right-8 text-sage/20 group-hover:text-sage/40 transition-colors">
                <Quote size={48} />
              </div>
              <div className="flex gap-1 mb-6 text-terracotta">
                {[...Array(rev.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 italic mb-8 leading-relaxed font-light">"{rev.text}"</p>
              <div className="mt-auto">
                <p className="font-bold text-petroleum">{rev.name}</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
