import { Briefcase, GraduationCap, Users, Building2, ArrowRight } from 'lucide-react';

const AUDIENCES = [
  { icon: Briefcase, tag: 'YOUNG PROS', body: 'Build better habits as your income grows.' },
  { icon: GraduationCap, tag: 'STUDENTS', body: 'Catch bad habits before they stick.' },
  { icon: Users, tag: 'FAMILIES', body: 'Clearer household spending conversations.' },
  { icon: Building2, tag: 'ORGANIZATIONS', body: 'Financial wellness for your people.' },
];

export default function AudienceSection() {
  return (
    <section id="audience" className="py-14 sm:py-20 bg-gradient-to-b from-cream via-forest-50/30 to-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-forest-600">Who it's for</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-forest-950 leading-tight">
            Who Is It For?
          </h2>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {AUDIENCES.map((a, i) => (
            <div
              key={a.tag}
              className="reveal group flex flex-col rounded-3xl border border-forest-150 bg-white p-6 shadow-soft transition-all hover:shadow-card hover:-translate-y-1 hover:border-forest-200"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-forest-600 to-forest-800 text-white shadow-soft transition-transform group-hover:scale-105">
                <a.icon className="h-7 w-7" />
              </span>
              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-forest-600">{a.tag}</p>
              <p className="mt-2 text-sm text-ink-800 leading-relaxed flex-1">{a.body}</p>

              <a
                href="#beta"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700 transition-colors hover:text-forest-800"
              >
                Join the beta
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
