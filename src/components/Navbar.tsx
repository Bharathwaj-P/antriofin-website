import { useEffect, useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import antriofinLogo from '../assets/antriofin-logo.png';
import { useScrolled } from '@/hooks/useReveal';

const NAV_LINKS = [
  { label: 'Product', href: '#product' },
  { label: "How It Works", href: '#how-it-works' },
  { label: "Who It's For", href: '#audience' },
  { label: 'Why Antriofin', href: '#why-antriofin' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const scrolled = useScrolled(16);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={[
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-cream/85 backdrop-blur-xl border-b border-forest-150 shadow-soft'
          : 'bg-transparent border-b border-transparent',
      ].join(' ')}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className={['flex h-16 sm:h-[72px] items-center justify-between transition-all', scrolled ? 'h-14' : ''].join(' ')}>
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5 group" aria-label="Antriofin home">
            <img
            src={antriofinLogo}
            alt="Antriofin"
            className="h-10 w-10 object-contain transition-transform group-hover:scale-105"/>
            <span className="font-display text-lg font-extrabold tracking-tight text-forest-900">
              ANTRIOFIN
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-3.5 py-2 rounded-lg text-sm font-medium text-ink-700 hover:text-forest-700 hover:bg-forest-50/70 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <a
              href="#beta"
              className="hidden sm:inline-flex items-center rounded-full bg-forest-700 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-forest-800 hover:shadow-card hover:-translate-y-0.5"
            >
              Join Beta
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-forest-800 hover:bg-forest-50 transition-colors"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={[
          'lg:hidden overflow-hidden transition-all duration-300 bg-cream/95 backdrop-blur-xl border-b border-forest-100',
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <div className="px-5 py-4 space-y-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-base font-medium text-ink-800 hover:bg-forest-50 hover:text-forest-700 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#beta"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-forest-700 px-5 py-3 text-center text-base font-semibold text-white shadow-soft"
          >
            Join Beta
          </a>
        </div>
      </div>
    </header>
  );
}
