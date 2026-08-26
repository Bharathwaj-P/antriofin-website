import { Eye, BrainCircuit, Hand, Compass } from 'lucide-react';

const STEPS = [
  { label: 'SEE', icon: Eye, title: 'See where money goes', body: 'A clear view of your spending.' },
  { label: 'UNDERSTAND', icon: BrainCircuit, title: 'Spot the patterns', body: 'Find what drains your income.' },
  { label: 'INTERCEPT', icon: Hand, title: 'Pause before you spend', body: 'A moment of awareness. Right on time.', signature: true },
  { label: 'DECIDE', icon: Compass, title: 'Decide better', body: 'More context. Better choices.' },
];

export default function WhyAntriofin() {
  return (
    <section id="why-antriofin" className="py-14 sm:py-20 bg-gradient-to-b from-cream via-forest-50/40 to-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-forest-600">Why Antriofin</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-forest-950 leading-tight">
            Understand. Intercept. Decide.
          </h2>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s, i) => (
            <div
              key={s.label}
              className={[
                'reveal group relative rounded-3xl p-6 transition-all hover:-translate-y-1',
                s.signature
                  ? 'border border-forest-300 bg-gradient-to-br from-forest-700 to-forest-900 text-white shadow-glow'
                  : 'border border-forest-150 bg-white shadow-soft hover:shadow-card hover:border-forest-200',
              ].join(' ')}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {s.signature && (
                <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-forest-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-soft">
                  Signature
                </span>
              )}
              <div className="flex items-center justify-between">
                <span
                  className={[
                    'flex h-12 w-12 items-center justify-center rounded-2xl transition-colors',
                    s.signature
                      ? 'bg-white/15 text-white'
                      : 'bg-forest-50 text-forest-700 group-hover:bg-forest-700 group-hover:text-white',
                  ].join(' ')}
                >
                  <s.icon className="h-6 w-6" />
                </span>
                <span className={['font-display text-3xl font-extrabold', s.signature ? 'text-forest-300' : 'text-forest-150'].join(' ')}>
                  0{i + 1}
                </span>
              </div>
              <p className={['mt-5 text-xs font-bold uppercase tracking-wider', s.signature ? 'text-forest-200' : 'text-forest-600'].join(' ')}>
                {s.label}
              </p>
              <h3 className={['mt-1.5 font-display text-lg font-bold leading-snug', s.signature ? 'text-white' : 'text-forest-900'].join(' ')}>
                {s.title}
              </h3>
              <p className={['mt-2 text-sm leading-relaxed', s.signature ? 'text-forest-100' : 'text-ink-700'].join(' ')}>
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink-600 reveal">
          Intercept is a conceptual product vision, not a shipped feature.
        </p>
      </div>
    </section>
  );
}
