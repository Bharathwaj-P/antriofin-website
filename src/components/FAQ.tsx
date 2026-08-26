import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  { q: 'What is Antriofin?', a: 'A financial awareness tool that helps you see where your money goes and think before you spend.' },
  { q: 'Who is it for?', a: 'Young professionals, students, families, and organizations.' },
  { q: 'How does it help with spending?', a: 'Shows patterns, spots unnecessary expenses, and prompts awareness before decisions — not just after.' },
  { q: 'What is Intercept?', a: 'A moment of awareness before you spend. Conceptual for now, not a shipped feature.' },
  { q: 'Is Antriofin a bank?', a: 'No. It does not hold, move, or manage your money.' },
  { q: 'When will the beta launch?', a: 'Currently in MVP and beta phase. Exact timing confirmed with early users.' },
  { q: 'How much will it cost?', a: 'Pricing finalized after beta. Join the beta for free today.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-forest-600">FAQ</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-forest-950 leading-tight">
            Questions?
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={[
                  'reveal rounded-2xl border bg-white transition-all',
                  isOpen ? 'border-forest-200 shadow-soft' : 'border-forest-150',
                ].join(' ')}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-bold text-forest-900">{f.q}</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-700">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={[
                    'grid transition-all duration-300',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  ].join(' ')}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-ink-700 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
