import { BrainCircuit, Search, HeartHandshake, Droplets, Compass, TrendingUp, Quote } from 'lucide-react';

const VALUES = [
  { icon: BrainCircuit, label: 'Better spending awareness' },
  { icon: Search, label: 'Spot unnecessary expenses' },
  { icon: HeartHandshake, label: 'Healthier financial habits' },
  { icon: Droplets, label: 'Reduce financial leakage' },
  { icon: Compass, label: 'Informed everyday decisions' },
  { icon: TrendingUp, label: 'Long-term discipline' },
];

export default function ValueSection() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-wider text-forest-600">Why pay for Antriofin</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-forest-950 leading-tight">
              Why Pay for Antriofin?
            </h2>
            <p className="mt-6 font-display text-2xl font-bold text-ink-800 leading-snug">
              People don't pay for another dashboard.
            </p>
            <p className="mt-2 font-display text-2xl font-bold text-forest-700 leading-snug">
              They pay for better financial awareness.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {VALUES.map((v) => (
                <div key={v.label} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-forest-50 text-forest-700">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <span className="text-[15px] font-medium text-ink-800">{v.label}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-ink-700">
              No guaranteed savings or returns claimed.
            </p>
          </div>

          <div className="reveal space-y-5" style={{ transitionDelay: '120ms' }}>
            <div className="rounded-3xl border border-ink-400/40 bg-white p-7 shadow-soft">
              <Quote className="h-7 w-7 text-ink-500" />
              <p className="mt-3 text-xs font-bold uppercase tracking-wider text-ink-700">Traditional tools</p>
              <p className="mt-2 font-display text-xl font-bold text-ink-800 leading-snug">
                "Tell me what happened."
              </p>
            </div>

            <div className="rounded-3xl border border-forest-200 bg-gradient-to-br from-forest-700 to-forest-900 p-7 shadow-glow text-white">
              <Quote className="h-7 w-7 text-forest-300" />
              <p className="mt-3 text-xs font-bold uppercase tracking-wider text-forest-200">Antriofin</p>
              <p className="mt-2 font-display text-xl font-bold leading-snug">
                "Help me think before I decide."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
