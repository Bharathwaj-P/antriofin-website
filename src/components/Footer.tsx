import { Leaf, Linkedin, Instagram, Twitter } from 'lucide-react';

const LINKS = {
  Product: [
    { label: 'Product', href: '#product' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: "Who It's For", href: '#audience' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  Company: [
    { label: 'Contact', href: '#beta' },
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
};

const SOCIALS = [
  { label: 'LinkedIn', icon: Linkedin, href: '#' },
  { label: 'Instagram', icon: Instagram, href: '#' },
  { label: 'X', icon: Twitter, href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-forest-150 bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-forest-600 to-forest-800 text-white shadow-soft">
                <Leaf className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight text-forest-900">ANTRIOFIN</span>
            </a>
            <p className="mt-4 font-display text-lg font-semibold text-forest-800">
              Connected Financial Awareness.
            </p>
            <p className="mt-3 max-w-sm text-sm text-ink-700 leading-relaxed">
              An early-stage financial awareness platform, currently in MVP and beta.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-forest-150 bg-white text-forest-700 transition-all hover:bg-forest-700 hover:text-white hover:-translate-y-0.5"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(LINKS).map(([title, links]) => (
              <div key={title}>
                <p className="text-xs font-bold uppercase tracking-wider text-forest-600">{title}</p>
                <ul className="mt-4 space-y-2.5">
                  {links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-ink-700 hover:text-forest-700 transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-forest-150 pt-6">
          <p className="text-sm text-ink-700">© 2026 Antriofin. All rights reserved.</p>
          <p className="text-xs text-ink-700">antriofin.com</p>
        </div>
      </div>
    </footer>
  );
}
