import { Mail, Send, MapPin, MessageCircle, CheckCircle2 } from 'lucide-react';
import { useState, type FormEvent } from 'react';

const CHANNELS = [
  { Icon: Mail, label: 'Email', value: 'aju@example.com', href: 'mailto:aju@example.com' },
  { Icon: MessageCircle, label: 'LinkedIn', value: 'Connect with me', href: 'https://linkedin.com' },
  { Icon: MapPin, label: 'Location', value: 'India', href: undefined },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3500);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-accent-500/10 blur-[130px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="reveal text-center">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            <span className="h-px w-8 bg-accent-400" />
            Get in touch
            <span className="h-px w-8 bg-accent-400" />
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Let's build something{' '}
            <span className="text-gradient">together.</span>
          </h2>
          <p className="mt-5 text-gray-400 max-w-xl mx-auto leading-relaxed">
            Whether you have a question, a project idea, or just want to say hi —
            my inbox is always open. I'll do my best to get back to you.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5 items-start">
          {/* Channels */}
          <div className="lg:col-span-2 space-y-4">
            {CHANNELS.map((c, i) => (
              <a
                key={c.label}
                href={c.href ?? undefined}
                target={c.href?.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`reveal reveal-delay-${i + 1} group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-accent-500/30 hover:bg-accent-500/5`}
              >
                <span className="grid place-items-center h-11 w-11 rounded-xl bg-accent-500/10 border border-accent-500/20 text-accent-300 transition-transform group-hover:scale-110">
                  <c.Icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">
                    {c.label}
                  </div>
                  <div className="text-sm text-gray-200 font-medium">
                    {c.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={submit}
            className="reveal reveal-delay-2 lg:col-span-3 rounded-2xl border border-white/10 bg-gradient-to-br from-ink-800/70 to-ink-900/70 p-6 sm:p-8"
          >
            <div className="grid gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="Name"
                  value={form.name}
                  onChange={(v) => update('name', v)}
                  placeholder="Your name"
                  required
                />
                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => update('email', v)}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  required
                  rows={5}
                  placeholder="What's on your mind?"
                  className="w-full rounded-xl bg-ink-950/60 border border-white/10 px-4 py-3 text-sm text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-400 to-glow-emerald px-6 py-3.5 text-sm font-semibold text-ink-950 shadow-lg shadow-accent-500/25 transition-all hover:shadow-accent-500/40 hover:-translate-y-0.5 disabled:opacity-70 disabled:translate-y-0"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Message sent!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    Send message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

function Field({ label, value, onChange, placeholder, type = 'text', required }: FieldProps) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-400 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl bg-ink-950/60 border border-white/10 px-4 py-3 text-sm text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-colors"
      />
    </div>
  );
}
