
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, Users, CalendarCheck } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';

const Projections: React.FC = () => {
  const { t } = useI18n();

  // Data construction uses localized names for chart
  const data = [
    { name: t('projections.scenarios.conserv'), revenue: 27000, patients: 18, roi: '1.1x' },
    { name: t('projections.scenarios.mod'), revenue: 75000, patients: 50, roi: '3.1x' },
    { name: t('projections.scenarios.opt'), revenue: 135000, patients: 90, roi: '5.6x' },
  ];

  const formatCurrency = (value: number) => `R$ ${(value / 1000).toFixed(0)}k`;

  return (
    <section className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center text-terracotta mb-2">{t('projections.section_title')}</h2>
        <h3 className="font-serif text-4xl text-center text-petroleum mb-16">{t('projections.main_title')}</h3>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-sage flex flex-col items-center text-center">
            <Users className="text-sage mb-4" size={32} />
            <h4 className="text-3xl font-bold text-darkgray mb-1">300-600</h4>
            <p className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-2">{t('projections.metrics.leads_label')}</p>
            <p className="text-xs text-gray-500">{t('projections.metrics.leads_cost')}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-petroleum flex flex-col items-center text-center">
            <CalendarCheck className="text-petroleum mb-4" size={32} />
            <h4 className="text-3xl font-bold text-darkgray mb-1">45-150</h4>
            <p className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-2">{t('projections.metrics.sched_label')}</p>
            <p className="text-xs text-gray-500">{t('projections.metrics.sched_conv')}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-terracotta flex flex-col items-center text-center">
            <TrendingUp className="text-terracotta mb-4" size={32} />
            <h4 className="text-3xl font-bold text-darkgray mb-1">18-90</h4>
            <p className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-2">{t('projections.metrics.patients_label')}</p>
            <p className="text-xs text-gray-500">{t('projections.metrics.patients_close')}</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-sage/20">
          <h4 className="text-xl font-bold text-petroleum mb-6 text-center">{t('projections.chart_title')}</h4>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#3D3D3D', fontWeight: 600 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={formatCurrency}
                  tick={{ fill: '#9CA3AF' }}
                />
                <Tooltip
                  cursor={{ fill: '#F4F1E8' }}
                  contentStyle={{ backgroundColor: '#2C5F6F', color: '#fff', borderRadius: '8px', border: 'none' }}
                  itemStyle={{ color: '#fff' }}
                  formatter={(value: number) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Receita']}
                />
                <Bar dataKey="revenue" radius={[6, 6, 0, 0]} barSize={60}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#8BA888' : index === 1 ? '#2C5F6F' : '#C97D60'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8 text-center text-sm">
            <div>
              <p className="font-bold text-sage">{t('projections.scenarios.conserv')}</p>
              <p className="text-gray-500">ROI 1.1x</p>
              <p className="text-xs text-gray-400">18 {t('reports.common.patient').toLowerCase()}s</p>
            </div>
            <div>
              <p className="font-bold text-petroleum">{t('projections.scenarios.mod')}</p>
              <p className="text-gray-500">ROI 3.1x</p>
              <p className="text-xs text-gray-400">50 {t('reports.common.patient').toLowerCase()}s</p>
            </div>
            <div>
              <p className="font-bold text-terracotta">{t('projections.scenarios.opt')}</p>
              <p className="text-gray-500">ROI 5.6x</p>
              <p className="text-xs text-gray-400">90 {t('reports.common.patient').toLowerCase()}s</p>
            </div>
          </div>
        </div>

        {/* Ad Distribution */}
        <div className="mt-12 text-center">
          <h5 className="font-bold text-darkgray mb-4">{t('projections.media_dist')}</h5>
          <div className="flex flex-wrap justify-center gap-2">
            {(t('projections.media_items') as string[]).map((item, i) => (
              <span key={i} className="bg-sage/20 text-petroleum px-4 py-2 rounded-full text-xs font-bold border border-sage/30">
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projections;