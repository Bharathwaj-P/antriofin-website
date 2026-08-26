import { Eye, BrainCircuit, Hand, Compass } from 'lucide-react';

const STEPS = [
  { label: 'SEE', icon: Eye },
  { label: 'UNDERSTAND', icon: BrainCircuit },
  { label: 'INTERCEPT', icon: Hand },
  { label: 'DECIDE', icon: Compass },
];

export default function ProductLanguage() {
  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal rounded-3xl border border-forest-100 bg-gradient-to-r from-white via-forest-50/40 to-white px-6 py-6 sm:px-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {STEPS.map((s, i) => (
              <div key={s.label} className="flex items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-700 text-white shadow-soft">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-base sm:text-lg font-extrabold tracking-tight text-forest-800">
                    {s.label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <span className="hidden sm:block text-forest-400 font-semibold text-xl" aria-hidden>
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
