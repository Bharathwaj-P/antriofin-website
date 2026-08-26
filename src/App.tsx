import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductLanguage from '@/components/ProductLanguage';
import ProblemSection from '@/components/ProblemSection';
import WhyAntrofin from '@/components/WhyAntrofin';
import InterceptDemo from '@/components/InterceptDemo';
import HowItWorks from '@/components/HowItWorks';
import AudienceSection from '@/components/AudienceSection';
import ValueSection from '@/components/ValueSection';
import Pricing from '@/components/Pricing';
import BetaSection from '@/components/BetaSection';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import { useReveal } from '@/hooks/useReveal';

function App() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="min-h-screen bg-cream text-ink-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProductLanguage />
        <ProblemSection />
        <WhyAntrofin />
        <InterceptDemo />
        <HowItWorks />
        <AudienceSection />
        <ValueSection />
        <Pricing />
        <BetaSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
