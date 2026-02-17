
import React from 'react';
import Hero from './Hero';
import Profile from './Profile';
import Strategy from './Strategy';
import Testimonials from './Testimonials';
import Business from './Business';
import Roadmap from './Roadmap';
import Investment from './Investment';
import FAQ from './FAQ';
import NextSteps from './NextSteps';
import Newsletter from './Newsletter';

interface LandingPageProps {
  onSelectTest: (id: string) => void;
  onContact: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onSelectTest, onContact }) => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="animate-fade-in">
      {/* 1. Hero Section: Impacto imediato e call-to-action */}
      <Hero scrollToStart={() => scrollToSection('catalog')} />

      {/* 2. Strategy (Biblioteca): O coração do catálogo de testes */}
      <section id="catalog" className="scroll-mt-20">
        <Strategy onSelectTest={onSelectTest} />
      </section>

      {/* 3. Methodology (Science): Credibilidade e rigor psicométrico */}
      <section id="science" className="scroll-mt-20">
        <Profile />
      </section>

      {/* 4. Social Proof: Validação por pares */}
      <Testimonials />

      {/* 5. Business/B2B: Expansão corporativa */}
      <section id="business" className="scroll-mt-20">
        <Business onContact={onContact} />
      </section>

      {/* 6. Roadmap: Visão de futuro e transparência */}
      <Roadmap />

      {/* 7. Investment: Planos e ROI para clientes enterprise */}
      <Investment />

      {/* 8. Education & Support: FAQ e Conteúdo */}
      <section id="faq" className="scroll-mt-20">
        <FAQ />
      </section>

      {/* 9. Final CTA: O fechamento comercial */}
      <NextSteps />

      {/* 10. Community: Retenção via newsletter */}
      <Newsletter />
    </div>
  );
};

export default LandingPage;
