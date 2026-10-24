import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const ROLES = [
  'B.Tech AI & Data Science Student',
  'Aspiring ML Engineer',
  'Lifelong Learner',
];

function useTypewriter() {
  const [text, setText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[roleIdx];
    const speed = deleting ? 40 : 90;

    const t = setTimeout(() => {
      if (!deleting) {
        const next = full.slice(0, text.length + 1);
        setText(next);
        if (next === full) {
          setTimeout(() => setDeleting(true), 1600);
        }
      } else {
        const next = full.slice(0, text.length - 1);
        setText(next);
        if (next === '') {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg radial-fade opacity-60" />
      <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-accent-500/10 blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-glow-emerald/10 blur-[100px] animate-pulse-slow" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950" />

      <div className="relative mx-auto max-w-6xl px-6 w-full pt-24 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8 animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 text-glow-emerald" />
            <span className="text-xs font-medium text-gray-400">
              First-year B.Tech Student
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-white animate-fade-up">
            Hey, I'm Aju{' '}
            <span className="inline-block animate-float">👋</span>
          </h1>

          <div className="mt-6 h-8 flex items-center animate-fade-up">
            <span className="text-lg sm:text-xl text-gray-400 font-medium">
              {typed}
              <span className="ml-0.5 inline-block w-0.5 h-5 bg-accent-400 animate-blink align-middle" />
            </span>
          </div>

          <p className="mt-6 text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl animate-fade-up">
            Exploring the world of Artificial Intelligence and Data Science —
            building small projects, learning every day, and working toward a
            future where machines think smarter.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up">
            <button
              onClick={() => scrollTo('projects')}
              className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-400 to-glow-emerald px-6 py-3 text-sm font-semibold text-ink-950 shadow-lg shadow-accent-500/25 transition-all hover:shadow-accent-500/40 hover:-translate-y-0.5"
            >
              View my work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-gray-200 transition-all hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5"
            >
              Get in touch
            </button>
          </div>

          <div className="mt-10 flex items-center gap-5 animate-fade-up">
            {[
              { Icon: Github, href: 'https://github.com', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { Icon: Mail, href: '#contact', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="grid place-items-center h-10 w-10 rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:text-accent-300 hover:border-accent-500/30 hover:bg-accent-500/5 hover:-translate-y-0.5"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-accent-300 transition-colors"
        aria-label="Scroll down"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <div className="h-9 w-5 rounded-full border border-white/15 flex justify-center pt-1.5">
            <span className="h-1.5 w-1 rounded-full bg-accent-400 animate-bounce" />
          </div>
        </div>
      </button>
    </section>
  );
}
