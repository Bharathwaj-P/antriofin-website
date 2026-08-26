import { Check, Sparkles, ArrowRight, Mail } from 'lucide-react';

const PLANS = [
  {
    name: 'Free / Beta',
    price: '₹0',
    period: '/ month',
    note: 'Free during beta.',
    features: ['Core spending awareness', 'Basic insights', 'Beta access'],
    cta: 'Join Beta',
    href: '#beta',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '₹—',
    period: '/ month',
    note: 'Pricing finalized after beta.',
    features: ['Advanced insights', 'Intercept prompts', 'Premium features'],
    cta: 'Coming Soon',
    href: '#beta',
    highlight: true,
  },
  {
    name: 'Family / Org',
    price: 'Custom',
    period: '',
    note: 'Pricing finalized after beta.',
    features: ['Multiple users', 'Team features', 'Advanced insights'],
    cta: 'Contact Us',
    href: '#beta',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-14 sm:py-20 bg-gradient-to-b from-cream via-forest-50/30 to-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-forest-600">Pricing</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-forest-950 leading-tight">
            Simple, honest pricing.
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {PLANS.map((p, i) => (
            <div
              key={p.name}
              className={[
                'reveal relative flex flex-col rounded-3xl p-7 transition-all hover:-translate-y-1',
                p.highlight
                  ? 'border border-forest-300 bg-gradient-to-br from-forest-700 to-forest-900 text-white shadow-glow'
                  : 'border border-forest-150 bg-white text-ink-800 shadow-soft hover:shadow-card',
              ].join(' ')}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-forest-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-soft">
                  <Sparkles className="h-3 w-3" /> Popular
                </span>
              )}
              <h3 className={['font-display text-lg font-bold', p.highlight ? 'text-white' : 'text-forest-900'].join(' ')}>
                {p.name}
              </h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="font-display text-4xl font-extrabold tracking-tight">{p.price}</span>
                <span className={['mb-1 text-sm', p.highlight ? 'text-forest-200' : 'text-ink-700'].join(' ')}>
                  {p.period}
                </span>
              </div>
              <p className={['mt-1 text-xs', p.highlight ? 'text-forest-200' : 'text-ink-700'].join(' ')}>{p.note}</p>

              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className={[
                      'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                      p.highlight ? 'bg-forest-500 text-white' : 'bg-forest-50 text-forest-700',
                    ].join(' ')}>
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={p.href}
                className={[
                  'mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all',
                  p.highlight
                    ? 'bg-white text-forest-800 hover:bg-forest-50'
                    : p.cta === 'Contact Us'
                      ? 'border border-forest-200 bg-white text-forest-800 hover:bg-forest-50'
                      : 'bg-forest-700 text-white hover:bg-forest-800',
                ].join(' ')}
              >
                {p.cta === 'Contact Us' ? <Mail className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
