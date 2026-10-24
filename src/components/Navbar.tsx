import { Menu, X, Code2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useActiveSection } from '@/hooks/useScrollReveal';

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => go('home')}
          className="flex items-center gap-2 font-display font-bold text-white group"
        >
          <span className="grid place-items-center h-9 w-9 rounded-lg bg-gradient-to-br from-accent-400 to-glow-emerald text-ink-950 shadow-lg shadow-accent-500/20 transition-transform group-hover:scale-110">
            <Code2 className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="tracking-tight">aajjuuw.in</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  active === link.id
                    ? 'text-accent-300'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
                {active === link.id && (
                  <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid place-items-center h-10 w-10 rounded-lg border border-white/10 text-gray-300 hover:text-white hover:border-white/20 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-80 border-t border-white/5' : 'max-h-0'
        }`}
      >
        <ul className="px-6 py-4 space-y-1 bg-ink-900/95 backdrop-blur-xl">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  active === link.id
                    ? 'text-accent-300 bg-accent-500/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
