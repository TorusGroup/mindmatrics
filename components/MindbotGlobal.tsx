
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Target, Zap, Brain, ArrowLeft, Info } from 'lucide-react';
import { aiService } from '../services/ai.service';
import { useI18n } from '../contexts/I18nContext';
import { AssessmentResult } from '../types/assessment';

interface MindbotGlobalProps {
  results: AssessmentResult[];
  userName: string;
  onBack: () => void;
}

const MindbotGlobal: React.FC<MindbotGlobalProps> = ({ results, userName, onBack }) => {
  const { language, t } = useI18n();
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', content: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    const initChat = async () => {
      setIsLoading(true);
      try {
        const response = await aiService.getGlobalInsight(userName, results, language);
        setMessages([{ role: 'bot', content: response }]);
      } catch (err) {
        setMessages([{ role: 'bot', content: t('global.error_glitch') }]);
      } finally {
        setIsLoading(false);
      }
    };
    initChat();
  }, []);

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const newHistory = [...messages, { role: 'user' as const, content: text }];
    setMessages(newHistory);
    setInput("");
    setIsLoading(true);

    try {
      const response = await aiService.getGlobalInsight(userName, results, language, newHistory);
      setMessages(prev => [...prev, { role: 'bot', content: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'bot', content: t('global.error_db') }]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickPrompts = [
    { label: t('global.prompts.career'), icon: Target, prompt: t('global.prompts.career_prompt') },
    { label: t('global.prompts.stress'), icon: Zap, prompt: t('global.prompts.stress_prompt') },
    { label: t('global.prompts.relationships'), icon: Brain, prompt: t('global.prompts.relationships_prompt') }
  ];

  return (
    <div className="fixed inset-0 z-[60] bg-[#050505] text-white flex flex-col md:flex-row animate-fade-in">

      {/* Sidebar - Contexto do Usuário */}
      <div className="w-full md:w-80 bg-[#0A0A0A] border-r border-white/5 p-8 flex flex-col">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 text-xs uppercase font-bold tracking-widest">
          <ArrowLeft size={16} /> {t('global.back')}
        </button>

        <div className="mb-12">
          <div className="w-16 h-16 bg-sage text-black rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(139,168,136,0.3)]">
            <Bot size={32} />
          </div>
          <h2 className="font-serif text-3xl mb-2">Mindbot</h2>
          <p className="text-[10px] text-sage font-black uppercase tracking-[0.2em]">{t('global.synergy_active')}</p>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto pr-2">
          <p className="text-[10px] text-gray-600 uppercase font-bold tracking-widest mb-4">{t('global.data_loaded')}</p>
          {results.map((res, i) => (
            <div key={i} className="p-4 bg-white/[0.03] border border-white/5 rounded-xl">
              <p className="text-[9px] font-bold text-gray-500 uppercase">{res.type}</p>
              <p className="text-[10px] text-gray-300">{t('global.analyzed_on')} {new Date(res.date).toLocaleDateString()}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-white/5">
          <div className="flex items-center gap-2 text-blue-400 text-[10px] font-bold uppercase">
            <Info size={14} /> {t('global.version')}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative">
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 md:p-12 space-y-8 pb-32">
          {messages.map((m, i) => (
            <div key={i} className={`flex gap-6 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${m.role === 'user' ? 'bg-terracotta border-terracotta/20' : 'bg-white/5 border-white/10'}`}>
                {m.role === 'user' ? <User size={20} /> : <Bot size={20} className="text-sage" />}
              </div>
              <div className={`max-w-[85%] md:max-w-[70%] p-6 rounded-3xl leading-relaxed text-sm ${m.role === 'user' ? 'bg-terracotta/10 border border-terracotta/20 text-white' : 'bg-white/[0.02] border border-white/10 text-gray-300'}`}>
                <div className="prose prose-invert prose-sm max-w-none">
                  {m.content.split('\n').map((line, idx) => (
                    <p key={idx} className="mb-4 last:mb-0">{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-6 animate-pulse">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Loader2 className="animate-spin text-sage" size={20} />
              </div>
              <div className="h-20 w-1/2 bg-white/[0.02] rounded-3xl border border-white/10"></div>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 bg-gradient-to-t from-[#050505] via-[#050505] to-transparent">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {quickPrompts.map((p, i) => (
                <button key={i} onClick={() => handleSend(p.prompt)} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold hover:bg-white/10 transition-all uppercase tracking-tight">
                  <p.icon size={12} className="text-sage" /> {p.label}
                </button>
              ))}
            </div>
            <form onSubmit={(e) => { e.preventDefault(); handleSend(input); }} className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t('global.placeholder')}
                className="w-full bg-white/[0.05] border border-white/10 rounded-2xl py-5 px-8 outline-none focus:border-sage transition-all text-sm pr-20"
              />
              <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 bg-sage text-black p-3 rounded-xl hover:bg-white transition-all shadow-lg">
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindbotGlobal;