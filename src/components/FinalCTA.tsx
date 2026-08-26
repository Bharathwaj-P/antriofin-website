import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal isolate relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-forest-700 via-forest-800 to-forest-950 px-8 sm:px-12 lg:px-16 py-14 sm:py-20 text-center shadow-glow">
          <div className="absolute inset-0 z-0 bg-grid opacity-40" aria-hidden />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-0 h-72 w-72 rounded-full bg-forest-500/20 blur-3xl" aria-hidden />

          <div className="relative z-10">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-3xl mx-auto">
              Your Money. Your Decisions.
            </h2>
            <p className="mt-5 text-lg text-forest-100 max-w-xl mx-auto leading-relaxed">
              Start building better financial awareness today.
            </p>
            <a
              href="#beta"
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-forest-800 shadow-soft transition-all hover:bg-forest-50 hover:-translate-y-0.5"
            >
              Join the Beta
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
