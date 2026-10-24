import { Code2, Heart } from 'lucide-react';
import { Github, Linkedin, Mail } from 'lucide-react';

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/5 bg-ink-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-display font-bold text-white">
              <span className="grid place-items-center h-9 w-9 rounded-lg bg-gradient-to-br from-accent-400 to-glow-emerald text-ink-950">
                <Code2 className="h-5 w-5" strokeWidth={2.5} />
              </span>
              aajjuuw.in
            </div>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-xs">
              A beginner developer learning AI & Data Science, one project at a
              time.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => go(link.id)}
                    className="text-sm text-gray-500 hover:text-accent-300 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
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
                  className="grid place-items-center h-10 w-10 rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:text-accent-300 hover:border-accent-500/30 hover:bg-accent-500/5"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Aju. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5 text-xs text-gray-600">
            Built with <Heart className="h-3 w-3 text-glow-violet fill-current" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
