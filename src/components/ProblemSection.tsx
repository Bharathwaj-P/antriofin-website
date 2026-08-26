import { Coins, RefreshCw, Zap, EyeOff } from 'lucide-react';

const PROBLEMS = [
  { icon: Coins, title: 'Unnoticed daily spending', body: 'Small purchases add up. Fast.' },
  { icon: RefreshCw, title: 'Forgotten subscriptions', body: 'Recurring charges you forgot about.' },
  { icon: Zap, title: 'Impulse purchases', body: 'Spending before thinking.' },
  { icon: EyeOff, title: 'No spending awareness', body: 'You know what you earn. Not where it goes.' },
];

export default function ProblemSection() {
  return (
    <section id="product" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-forest-600">The problem</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-forest-950 leading-tight">
            Small Spending Adds Up.
          </h2>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROBLEMS.map((p, i) => (
            <div
              key={p.title}
              className="reveal group rounded-3xl border border-forest-150 bg-white p-6 shadow-soft transition-all hover:shadow-card hover:-translate-y-1 hover:border-forest-200"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-50 text-forest-700 transition-colors group-hover:bg-forest-700 group-hover:text-white">
                <p.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-forest-900">{p.title}</h3>
              <p className="mt-2 text-sm text-ink-700 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
