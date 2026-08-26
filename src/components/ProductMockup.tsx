import { ArrowRight, PlayCircle, ShieldCheck, TrendingUp, Utensils, ShoppingBag, Car, Coffee, Wallet, Sparkles } from 'lucide-react';

const CATEGORIES = [
  { label: 'Food & Dining', amount: '₹8,420', icon: Utensils, pct: '34%' },
  { label: 'Shopping', amount: '₹6,300', icon: ShoppingBag, pct: '25%' },
  { label: 'Transport', amount: '₹4,150', icon: Car, pct: '17%' },
];

const TRANSACTIONS = [
  { label: 'Cafe Nuvo', amount: '-₹340', icon: Coffee, negative: true },
  { label: 'Salary credit', amount: '+₹92,000', icon: Wallet, negative: false },
  { label: 'Streaming plan', amount: '-₹649', icon: PlayCircle, negative: true },
];

export default function ProductMockup() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Glow */}
      <div className="absolute -inset-6 bg-gradient-to-br from-forest-200/40 via-forest-100/20 to-transparent rounded-[2rem] blur-2xl" aria-hidden />

      {/* Card */}
      <div className="relative rounded-3xl bg-white border border-forest-150 shadow-glow overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-forest-50 bg-gradient-to-r from-white to-forest-50/40">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-forest-700 text-white">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-display text-sm font-extrabold tracking-tight text-forest-900">ANTRIOFIN</span>
          </div>
          <span className="text-[11px] font-medium text-ink-700">Spending overview · August</span>
        </div>

        <div className="p-5 space-y-5">
          {/* Spent this month */}
          <div>
            <p className="text-xs font-medium text-ink-700 uppercase tracking-wide">Spent this month</p>
            <div className="mt-1 flex items-end justify-between">
              <p className="font-display text-4xl font-extrabold text-forest-900 tracking-tight">₹24,870</p>
              <span className="inline-flex items-center gap-1 rounded-full bg-forest-50 px-2.5 py-1 text-xs font-semibold text-forest-700">
                <TrendingUp className="h-3.5 w-3.5" /> Steady
              </span>
            </div>
            {/* Progress */}
            <div className="mt-3">
              <div className="h-2 w-full rounded-full bg-forest-50 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-forest-500 to-forest-700" style={{ width: '62%' }} />
              </div>
              <div className="mt-1.5 flex justify-between text-[11px] text-ink-700">
                <span>62% of monthly budget</span>
                <span>₹15,130 left</span>
              </div>
            </div>
          </div>

          {/* Smart alert */}
          <div className="rounded-2xl border border-forest-200 bg-forest-50/60 p-3.5 flex gap-3">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-forest-700 text-white">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-forest-700">Smart alert</p>
              <p className="mt-0.5 text-sm text-ink-700 leading-snug">
                Entertainment spending is trending higher than your usual pattern this month.
              </p>
            </div>
          </div>

          {/* Categories */}
          <div>
            <p className="text-xs font-semibold text-ink-700 uppercase tracking-wide mb-2.5">Spending categories</p>
            <div className="space-y-2.5">
              {CATEGORIES.map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-forest-50 text-forest-700">
                    <c.icon className="h-4 w-4" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-ink-800">{c.label}</span>
                      <span className="font-semibold text-forest-900">{c.amount}</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-forest-50 overflow-hidden">
                      <div className="h-full rounded-full bg-forest-500" style={{ width: c.pct }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transactions */}
          <div>
            <p className="text-xs font-semibold text-ink-700 uppercase tracking-wide mb-2.5">Recent transactions</p>
            <div className="space-y-2">
              {TRANSACTIONS.map((t) => (
                <div key={t.label} className="flex items-center gap-3 rounded-xl border border-forest-100 bg-white px-3 py-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-mist text-ink-700">
                    <t.icon className="h-4 w-4" />
                  </span>
                  <span className="flex-1 text-sm font-medium text-ink-800">{t.label}</span>
                  <span className={`text-sm font-semibold ${t.negative ? 'text-ink-800' : 'text-forest-600'}`}>{t.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating mini-card */}
      <div className="hidden sm:flex absolute -right-6 -bottom-6 animate-float items-center gap-2.5 rounded-2xl bg-forest-800 text-white px-4 py-3 shadow-glow">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-forest-600">
          <Sparkles className="h-4 w-4" />
        </span>
        <div className="leading-tight">
          <p className="text-[11px] text-forest-100">Intercept ready</p>
          <p className="text-sm font-semibold">Think before you spend</p>
        </div>
      </div>
    </div>
  );
}
