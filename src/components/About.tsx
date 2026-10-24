import { BookOpen, Coffee, GraduationCap, Heart } from 'lucide-react';

const FACTS = [
  { Icon: GraduationCap, label: 'B.Tech — AI & Data Science' },
  { Icon: BookOpen, label: 'First-year student' },
  { Icon: Coffee, label: 'Fuelled by curiosity' },
  { Icon: Heart, label: 'Loves clean, simple ideas' },
];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            <span className="h-px w-8 bg-accent-400" />
            About me
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Just getting started,{' '}
            <span className="text-gradient">but getting serious.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-5 items-start">
          {/* Text */}
          <div className="md:col-span-3 space-y-5">
            <p className="reveal reveal-delay-1 text-lg text-gray-300 leading-relaxed">
              I'm Aju, a first-year B.Tech student in{' '}
              <span className="text-white font-medium">
                Artificial Intelligence and Data Science
              </span>
              . I'm at the beginning of my journey — learning the foundations
              of programming, mathematics, and how machines learn from data.
            </p>
            <p className="reveal reveal-delay-2 text-gray-400 leading-relaxed">
              I believe great engineers are built one small project at a time.
              So I tinker, break things, read docs, and try again. My goal isn't
              to know everything today — it's to understand a little more than
              I did yesterday, and to build something real with it.
            </p>
            <p className="reveal reveal-delay-3 text-gray-400 leading-relaxed">
              Outside of coursework, I enjoy exploring new tools, reading about
              the latest in AI, and turning ideas into small working prototypes.
              I'm always happy to connect with fellow learners and builders.
            </p>
          </div>

          {/* Facts card */}
          <div className="md:col-span-2 reveal reveal-delay-2">
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-ink-800/80 to-ink-900/80 backdrop-blur p-6 sm:p-8 glow-soft">
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent-400/60 to-transparent" />
              <h3 className="font-display font-semibold text-white mb-5">
                Quick facts
              </h3>
              <ul className="space-y-4">
                {FACTS.map(({ Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <span className="grid place-items-center h-9 w-9 rounded-lg bg-accent-500/10 border border-accent-500/20 text-accent-300">
                      <Icon className="h-4 w-4" />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
