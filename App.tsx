
import React, { useState, useEffect, Suspense } from 'react';

// Core UI
import LandingPage from './components/LandingPage';
import NeuralDashboard from './components/NeuralDashboard';
import MindbotGlobal from './components/MindbotGlobal';
import BookingModal from './components/BookingModal';
import TestEngine from './components/TestEngine';
import LanguageSwitcher from './components/LanguageSwitcher';

// Framework & Logic
import { TestRegistry, getTestEntry, getAllTests } from './services/test-registry';
import { I18nProvider, useI18n } from './contexts/I18nContext';
import { storageService } from './services/storage.service';
import { AssessmentResult, LeadData } from './types/assessment';
import { Bot, Home, LayoutDashboard, CalendarDays, Loader2, Terminal, X, Zap } from 'lucide-react';

const DevModeMenu: React.FC<{ onTrigger: (id: string) => void; onClose: () => void }> = ({ onTrigger, onClose }) => {
  const { t } = useI18n();
  const tests = getAllTests();
  return (
    <div className="fixed bottom-24 right-8 z-[100] w-72 bg-darkgray text-white p-6 rounded-[2rem] shadow-3xl border border-white/10 animate-fade-in-up">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-sage flex items-center gap-2">
          <Terminal size={14} /> {t('dev.title')}
        </h4>
        <button onClick={onClose} className="hover:text-terracotta transition-colors"><X size={16} /></button>
      </div>
      <p className="text-[10px] text-gray-400 mb-4 uppercase font-bold">{t('dev.inject')}</p>
      <div className="space-y-2">
        {tests.map(t => (
          <button
            key={t.id}
            onClick={() => onTrigger(t.id)}
            className="w-full text-left px-4 py-3 bg-white/5 hover:bg-sage hover:text-petroleum rounded-xl text-xs font-bold transition-all flex justify-between items-center group"
          >
            {t.id.replace('_', ' ').toUpperCase()}
            <Zap size={12} className="opacity-0 group-hover:opacity-100" />
          </button>
        ))}
      </div>
    </div>
  );
};

const AppContent: React.FC = () => {
  const { t } = useI18n();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isDevOpen, setIsDevOpen] = useState(false);
  const [savedResults, setSavedResults] = useState<AssessmentResult[]>([]);
  const [currentView, setCurrentView] = useState<string>('landing');
  const [activeTestId, setActiveTestId] = useState<string | null>(null);
  const [lastTestResult, setLastTestResult] = useState<AssessmentResult | null>(null);

  useEffect(() => {
    setSavedResults(storageService.getResults());
  }, []);

  const handleTestSave = (data: any, lead: LeadData) => {
    if (!activeTestId) return;

    const result: AssessmentResult = {
      type: activeTestId,
      data,
      lead,
      date: new Date().toISOString()
    };

    const updated = storageService.saveResult(result);
    setSavedResults(updated);
    setLastTestResult(result);
    setActiveTestId(null);
    setCurrentView(`report_${activeTestId}`);
  };

  const injectMockReport = (testId: string) => {
    const mockData: Record<string, any> = {
      bigfive: { scores: { openness: 85, conscientiousness: 70, extraversion: 45, agreeableness: 90, stability: 65, globalScore: 71 } },
      adhd: { scores: { inattention_persistence: 75, hyperactivity_physical: 60, impulsivity_control: 80, globalScore: 72 } },
      burnout: { exhaustion: 65, depersonalization: 40, accomplishment: 80 },
      eq: { self_awareness: 85, self_regulation: 70, motivation: 90, empathy: 88, social_skills: 82 },
      digital_addiction: { scores: { control: 40, social: 70, health: 30, obsession: 80, globalScore: 65 }, calculator: { social: 4, video: 2, games: 1 } },
      depression: { scores: { cognitive: 45, affective: 55, somatic: 30, globalScore: 43 } },
      impostor: { scores: { impostor: 62, globalScore: 62 } },
      gad7: { scores: { anxiety: 15, globalScore: 72 } },
      riasec: { scores: { realistic: 30, investigative: 85, artistic: 90, social: 60, enterprising: 75, conventional: 40 } }
    };

    const result: AssessmentResult = {
      type: testId,
      data: mockData[testId] || { globalScore: 50 },
      lead: { name: "Dev User", email: "dev@mindmetrics.ai" },
      date: new Date().toISOString(),
      metadata: { reliability: 100, version: "DEBUG-MOCK", timestamp: new Date().toISOString(), timings: {} }
    };

    setLastTestResult(result);
    setCurrentView(`report_${testId}`);
    setIsDevOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    if (activeTestId) {
      const entry = getTestEntry(activeTestId);
      if (entry) {
        return (
          <TestEngine
            config={entry.config}
            onCancel={() => setActiveTestId(null)}
            onSave={handleTestSave}
          />
        );
      }
    }

    if (currentView.startsWith('report_') && lastTestResult) {
      const testId = currentView.replace('report_', '');
      const entry = getTestEntry(testId);

      if (entry) {
        return (
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><Loader2 className="animate-spin text-petroleum" size={48} /></div>}>
            <entry.component
              data={lastTestResult.data?.scores || lastTestResult.data}
              lead={lastTestResult.lead}
              metadata={lastTestResult.metadata}
              onBookingRequest={() => setIsBookingOpen(true)}
            />
          </Suspense>
        );
      }
    }

    switch (currentView) {
      case 'landing':
        return <LandingPage onSelectTest={(id) => setActiveTestId(id)} onContact={() => setIsBookingOpen(true)} />;
      case 'dashboard':
        return (
          <NeuralDashboard
            results={savedResults}
            userName={savedResults[0]?.lead.name || "User"}
            onOpenReport={(r) => { setLastTestResult(r); setCurrentView(`report_${r.type}`); }}
          />
        );
      case 'mindbot':
        return (
          <MindbotGlobal
            results={savedResults}
            userName={savedResults[0]?.lead.name || "User"}
            onBack={() => setCurrentView('dashboard')}
          />
        );
      default:
        return <LandingPage onSelectTest={(id) => setActiveTestId(id)} onContact={() => setIsBookingOpen(true)} />;
    }
  };

  return (
    <div className="font-sans antialiased text-darkgray bg-offwhite min-h-screen relative selection:bg-terracotta selection:text-white">
      <nav className="fixed w-full z-50 bg-petroleum/95 backdrop-blur-md text-white shadow-2xl border-b border-sage/20 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div
              className="flex-shrink-0 cursor-pointer flex items-center gap-3 group"
              onClick={() => { setCurrentView('landing'); setActiveTestId(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <div className="w-10 h-10 bg-terracotta rounded-xl flex items-center justify-center font-serif font-bold text-2xl text-white shadow-lg group-hover:rotate-12 transition-transform">M</div>
              <span className="font-serif text-2xl font-semibold tracking-tighter">MindMetrics</span>
            </div>

            <div className="flex items-center gap-8">
              <div className="hidden md:flex items-center space-x-1">
                {[
                  { id: 'landing', label: t('nav.tests'), icon: Home },
                  { id: 'dashboard', label: t('nav.dashboard'), icon: LayoutDashboard }
                ].map(link => (
                  <button
                    key={link.id}
                    onClick={() => setCurrentView(link.id)}
                    className={`flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all ${currentView === link.id ? 'bg-white/10 text-sage' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                  >
                    <link.icon size={14} /> {link.label}
                  </button>
                ))}

                {savedResults.length > 0 && (
                  <button
                    onClick={() => setCurrentView('mindbot')}
                    className={`flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all ${currentView === 'mindbot' ? 'bg-sage text-petroleum' : 'text-sage hover:bg-sage/10'}`}
                  >
                    {/* Fix: link.icon was not defined in this scope, using Bot instead */}
                    <Bot size={14} /> {t('nav.mindbot')}
                  </button>
                )}
              </div>

              <div className="flex items-center gap-4 pl-4 border-l border-white/10">
                <LanguageSwitcher />
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-sage hover:bg-white text-petroleum px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span className="flex items-center gap-2"><CalendarDays size={14} /> {t('nav.approve')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20 min-h-screen">
        {renderView()}
      </main>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Neural DevMode Button */}
      <div className="fixed bottom-8 right-8 z-[110]">
        <button
          onClick={() => setIsDevOpen(!isDevOpen)}
          className="w-14 h-14 bg-terracotta text-white rounded-full shadow-3xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all animate-pulse hover:animate-none group"
        >
          {isDevOpen ? <X size={24} /> : <Terminal size={24} />}
          <span className="absolute right-full mr-4 bg-darkgray text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 shadow-2xl">{t('dev.mode')}</span>
        </button>
      </div>

      {isDevOpen && <DevModeMenu onTrigger={injectMockReport} onClose={() => setIsDevOpen(false)} />}

      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-petroleum/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] -right-[5%] w-[30%] h-[30%] bg-terracotta/5 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
};

const App: React.FC = () => (
  <I18nProvider>
    <AppContent />
  </I18nProvider>
);

export default App;
