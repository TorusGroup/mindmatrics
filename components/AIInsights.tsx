
import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Loader2, MessageSquare, Send, Bot, X } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';
import { aiService } from '../services/ai.service';

interface AIInsightsProps {
  testType: string;
  scores: any;
  userName: string;
}

const AIInsights: React.FC<AIInsightsProps> = ({ testType, scores, userName }) => {
  const { language, t } = useI18n();
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', content: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const generateInitialInsight = async () => {
    setIsLoading(true);
    try {
      const insight = await aiService.getPsychometricInsight(userName, testType, scores, language);
      setMessages([{ role: 'bot', content: insight }]);
      setIsOpen(true);
    } catch (err) {
      setMessages([{ role: 'bot', content: t('ai_consultation.error_connect') }]);
      setIsOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput("");
    const updatedHistory = [...messages, { role: 'user' as const, content: userMsg }];
    setMessages(updatedHistory);
    setIsLoading(true);

    try {
      const response = await aiService.getPsychometricInsight(userName, testType, scores, language, updatedHistory);
      setMessages(prev => [...prev, { role: 'bot', content: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'bot', content: t('ai_consultation.error_network') }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-8">
      {!isOpen ? (
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md text-center">
          <Sparkles className="mx-auto text-terracotta mb-4 animate-pulse" size={32} />
          <h4 className="font-serif text-xl text-white mb-2">{t('ai_consultation.title')}</h4>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">{t('ai_consultation.desc')}</p>
          <button onClick={generateInitialInsight} disabled={isLoading} className="bg-terracotta hover:bg-black text-white font-bold py-4 px-10 rounded-full flex items-center gap-3 mx-auto transition-all shadow-xl">
            {isLoading ? <Loader2 className="animate-spin" size={20} /> : <MessageSquare size={20} />}
            {isLoading ? t('ai_consultation.loading') : t('ai_consultation.button')}
          </button>
        </div>
      ) : (
        <div className="bg-darkgray rounded-[2rem] shadow-2xl overflow-hidden border border-white/10 flex flex-col h-[500px]">
          <div className="p-4 bg-black/40 border-b border-white/10 flex justify-between items-center text-white text-xs font-bold uppercase">
            <div className="flex items-center gap-2">
              <Bot size={18} className="text-terracotta" />
              <span>{t('ai_consultation.bot_version')}</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${m.role === 'user' ? 'bg-terracotta text-white' : 'bg-white/5 text-gray-200 border border-white/10'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <Loader2 className="animate-spin text-terracotta" size={16} />
                </div>
              </div>
            )}
          </div>
          <form onSubmit={sendMessage} className="p-4 bg-black/20 border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder={t('ai_consultation.placeholder')}
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-terracotta transition-colors"
            />
            <button type="submit" className="p-3 bg-terracotta text-white rounded-xl hover:bg-black transition-colors">
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AIInsights;