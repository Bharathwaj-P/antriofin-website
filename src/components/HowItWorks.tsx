import { Link2, BarChart3, BellRing, Compass } from 'lucide-react';

const STEPS = [
  { num: '01', icon: Link2, title: 'Connect', body: 'Bring your spending into one view.' },
  { num: '02', icon: BarChart3, title: 'See patterns', body: 'Spot where money leaks.' },
  { num: '03', icon: BellRing, title: 'Get prompted', body: 'Awareness at the right moment.' },
  { num: '04', icon: Compass, title: 'Decide better', body: 'More context. Better choices.' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-forest-600">How it works</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-forest-950 leading-tight">
            Four steps. That's it.
          </h2>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s, i) => (
            <div
              key={s.num}
              className="reveal group relative rounded-3xl border border-forest-150 bg-white p-6 shadow-soft transition-all hover:shadow-card hover:-translate-y-1 hover:border-forest-200"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {i < STEPS.length - 1 && (
                <span className="hidden lg:block absolute top-1/2 -right-3 z-10 text-forest-300 text-xl" aria-hidden>
                  →
                </span>
              )}
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-50 text-forest-700 transition-colors group-hover:bg-forest-700 group-hover:text-white">
                  <s.icon className="h-6 w-6" />
                </span>
                <span className="font-display text-3xl font-extrabold text-forest-150">{s.num}</span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-forest-900">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-700 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
