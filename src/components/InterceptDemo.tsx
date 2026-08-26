import { useEffect, useState } from 'react';
import { Sparkles, Zap, BrainCircuit, Hand, Compass, Check, RotateCcw } from 'lucide-react';

const FLOW = [
  { label: 'TRIGGER', icon: Zap, desc: 'A spending moment is detected.' },
  { label: 'INTERCEPT', icon: Hand, desc: 'A moment of awareness.' },
  { label: 'AWARENESS', icon: BrainCircuit, desc: 'Context before you decide.' },
  { label: 'DECISION', icon: Compass, desc: 'You decide with clarity.' },
];

export default function InterceptDemo() {
  const [active, setActive] = useState(0);
  const [decided, setDecided] = useState<null | 'continue' | 'think'>(null);

  useEffect(() => {
    if (decided) return;
    const t = setInterval(() => setActive((a) => (a + 1) % FLOW.length), 2200);
    return () => clearInterval(t);
  }, [decided]);

  const reset = () => {
    setDecided(null);
    setActive(0);
  };

  return (
    <section className="isolate py-14 sm:py-20 relative overflow-hidden bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950">
      <div className="absolute inset-0 z-0 bg-grid opacity-60" aria-hidden />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 h-[480px] w-[480px] rounded-full bg-forest-500/10 blur-3xl" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-forest-300">The Antriofin Intercept</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-white leading-tight">
            Meet the Intercept.
          </h2>
          <p className="mt-4 text-lg text-white leading-relaxed">
            Not just where your money went. A moment to think before it goes.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Phone mockup */}
          <div className="reveal flex justify-center">
            <div className="relative w-full max-w-[320px]">
              <div className="relative rounded-[2.5rem] border-[10px] border-forest-950 bg-forest-950 shadow-glow overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 h-6 w-32 rounded-b-2xl bg-forest-950" />
                <div className="rounded-[1.75rem] bg-gradient-to-b from-forest-50 to-white px-5 pt-10 pb-6 min-h-[520px] flex flex-col">
                  <div className="flex items-center justify-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-forest-700 text-white">
                      <Sparkles className="h-4 w-4" />
                    </span>
                    <span className="font-display text-sm font-extrabold tracking-tight text-forest-900">ANTRIOFIN</span>
                  </div>

                  <p className="mt-6 text-center text-xs font-semibold uppercase tracking-wider text-forest-600">
                    Before You Spend
                  </p>

                  <div className="mt-4 text-center">
                    <p className="text-sm text-ink-700">You're about to spend</p>
                    <p className="mt-1 font-display text-5xl font-extrabold text-forest-900 tracking-tight">₹1,299</p>
                    <span className="mt-2 inline-flex items-center rounded-full bg-forest-50 px-3 py-1 text-xs font-semibold text-forest-700">
                      Entertainment
                    </span>
                  </div>

                  <div className="mt-6 rounded-2xl border border-forest-200 bg-forest-50/60 p-4 text-center">
                    <p className="text-xs text-ink-700">You've already spent</p>
                    <p className="font-display text-2xl font-extrabold text-forest-800">₹4,850</p>
                    <p className="text-xs text-ink-700">this month in this category.</p>
                  </div>

                  <div className="mt-auto pt-6">
                    {decided === null ? (
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setDecided('continue')}
                          className="rounded-xl border border-forest-200 bg-white py-3 text-sm font-semibold text-ink-800 transition-colors hover:bg-forest-50"
                        >
                          Continue
                        </button>
                        <button
                          type="button"
                          onClick={() => setDecided('think')}
                          className="rounded-xl bg-forest-700 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-800"
                        >
                          Think Again
                        </button>
                      </div>
                    ) : (
                      <div
                        className="rounded-2xl p-4 text-center animate-fade-up"
                        style={{
                          background: decided === 'think' ? 'rgba(34,91,63,0.10)' : 'rgba(255,255,255,0.7)',
                          border: `1px solid ${decided === 'think' ? '#225b3f' : '#bce0cb'}`,
                        }}
                      >
                        <div className="flex items-center justify-center gap-2">
                          {decided === 'think' ? (
                            <>
                              <Check className="h-5 w-5 text-forest-700" strokeWidth={3} />
                              <p className="font-display text-base font-bold text-forest-800">A moment of awareness.</p>
                            </>
                          ) : (
                            <>
                              <RotateCcw className="h-5 w-5 text-ink-700" />
                              <p className="font-display text-base font-bold text-ink-800">Decision recorded.</p>
                            </>
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={reset}
                          className="mt-3 text-xs font-semibold text-forest-700 underline underline-offset-2"
                        >
                          Replay demo
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Flow */}
          <div className="reveal" style={{ transitionDelay: '120ms' }}>
            <ol className="relative space-y-4">
              {FLOW.map((f, i) => {
                const isActive = active === i && !decided;
                return (
                  <li key={f.label} className="relative pl-16">
                    {i < FLOW.length - 1 && (
                      <span className="absolute left-[27px] top-14 bottom-[-12px] w-px bg-forest-600/50" aria-hidden />
                    )}
                    <span
                      className={[
                        'absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-500',
                        isActive
                          ? 'bg-forest-500 border-forest-400 text-white scale-105 shadow-glow'
                          : 'bg-forest-800 border-forest-600 text-forest-100',
                      ].join(' ')}
                    >
                      <f.icon className="h-6 w-6" />
                    </span>
                    <div
                      className={[
                        'rounded-2xl border px-5 py-4 transition-all duration-500',
                        isActive
                          ? 'border-forest-400 bg-forest-800'
                          : 'border-forest-700 bg-forest-900/60',
                      ].join(' ')}
                    >
                      <p className={['font-display text-sm font-extrabold tracking-wider', isActive ? 'text-white' : 'text-forest-200'].join(' ')}>
                        {f.label}
                      </p>
                      <p className={['mt-1 text-sm', isActive ? 'text-white' : 'text-forest-100'].join(' ')}>
                        {f.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>

            <p className="mt-8 text-sm text-forest-300 leading-relaxed">
              Conceptual demo. Exact behaviour depends on the final MVP.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
