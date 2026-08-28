import { useState, type FormEvent } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabase';

const USER_TYPES = [
  'Young Professional',
  'Student',
  'Parent',
  'Agency / Organization',
  'Other',
];

export default function BetaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', type: USER_TYPES[0], message: '' });

 const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  console.log("FORM SUBMITTED");
  console.log("FORM DATA:", form);

  const { data, error } = await supabase
    .from('beta_users')
    .insert({
      name: form.name,
      email: form.email,
      user_type: form.type,
      message: form.message,
    });

  console.log("SUPABASE RESPONSE:", { data, error });

  if (error) {
    console.error("SUPABASE ERROR:", error);
    alert(`Supabase error: ${error.message}`);
    return;
  }

  setSubmitted(true);
};

  return (
    <section id="beta" className="isolate py-14 sm:py-20 relative overflow-hidden bg-gradient-to-br from-forest-700 via-forest-800 to-forest-950">
      <div className="absolute inset-0 z-0 bg-grid opacity-50" aria-hidden />
      <div className="absolute -top-20 right-10 z-0 h-72 w-72 rounded-full bg-forest-500/20 blur-3xl" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-wider text-forest-300">Beta</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-white leading-tight">
              Be Among the First.
            </h2>
            <p className="mt-5 text-lg text-white leading-relaxed">
              Join the early community. Help shape the product.
            </p>

            <div className="mt-8">
              <a
                href="#beta-form"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-forest-800 shadow-soft transition-all hover:bg-forest-50 hover:-translate-y-0.5"
              >
                Join the Beta
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <div id="beta-form" className="reveal" style={{ transitionDelay: '120ms' }}>
            <div className="rounded-3xl bg-white p-7 sm:p-8 shadow-glow">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-10 animate-fade-up">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-forest-50 text-forest-700">
                    <Check className="h-8 w-8" strokeWidth={3} />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-forest-900">You're on the list.</h3>
                  <p className="mt-2 text-sm text-ink-700 max-w-xs">
                    Thanks for joining. We'll reach out as we open access.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-semibold text-forest-700 underline underline-offset-2"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 text-forest-700">
                    <Sparkles className="h-5 w-5" />
                    <span className="font-display text-sm font-bold uppercase tracking-wider">Beta signup</span>
                  </div>

                  <div>
                    <label htmlFor="beta-name" className="block text-sm font-medium text-ink-800">
                      Name
                    </label>
                    <input
                      id="beta-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="mt-1.5 w-full rounded-xl border border-forest-100 bg-cream/50 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500 focus:border-forest-400 focus:outline-none focus:ring-2 focus:ring-forest-200 transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="beta-email" className="block text-sm font-medium text-ink-800">
                      Email
                    </label>
                    <input
                      id="beta-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="mt-1.5 w-full rounded-xl border border-forest-100 bg-cream/50 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500 focus:border-forest-400 focus:outline-none focus:ring-2 focus:ring-forest-200 transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="beta-type" className="block text-sm font-medium text-ink-800">
                      User Type
                    </label>
                    <select
                      id="beta-type"
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-forest-100 bg-cream/50 px-4 py-3 text-sm text-ink-900 focus:border-forest-400 focus:outline-none focus:ring-2 focus:ring-forest-200 transition"
                    >
                      {USER_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="beta-message" className="block text-sm font-medium text-ink-800">
                      Message <span className="text-ink-500 font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="beta-message"
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="What would you like from Antriofin?"
                      className="mt-1.5 w-full rounded-xl border border-forest-100 bg-cream/50 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500 focus:border-forest-400 focus:outline-none focus:ring-2 focus:ring-forest-200 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-700 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-forest-800 hover:-translate-y-0.5"
                  >
                    Join the Beta
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <p className="text-center text-xs text-ink-600">
                    Your information will be securely stored for the Antriofin beta.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
