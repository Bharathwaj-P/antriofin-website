import { ArrowRight, Play } from 'lucide-react';
import ProductMockup from './ProductMockup';

export default function Hero() {
  return (
    <section id="top" className="isolate relative pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-forest-50/60 via-cream to-cream" aria-hidden />
      <div className="absolute -top-24 -right-24 z-0 h-96 w-96 rounded-full bg-forest-200/30 blur-3xl" aria-hidden />
      <div className="absolute top-40 -left-32 z-0 h-80 w-80 rounded-full bg-forest-100/40 blur-3xl" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-forest-200 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-forest-700 shadow-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-forest-500 animate-pulse-soft" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-forest-600" />
              </span>
              MVP · BETA OPENING SOON
            </span>

            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] font-extrabold tracking-tight text-forest-950">
              Take Control of Where Your <span className="text-forest-600">Money</span> Goes.
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg text-ink-700 leading-relaxed">
              See where your money goes. Catch unnecessary spending. Think before you spend.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#beta"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-forest-700 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-forest-800 hover:shadow-card hover:-translate-y-0.5"
              >
                Join the Beta
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-forest-200 bg-white px-6 py-3.5 text-sm font-semibold text-forest-800 transition-all hover:bg-forest-50 hover:-translate-y-0.5"
              >
                <Play className="h-4 w-4" />
                See How It Works
              </a>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '120ms' }}>
            <ProductMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
