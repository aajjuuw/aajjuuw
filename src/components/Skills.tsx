import { Brain, Cpu, Database, LineChart, FileCode2, Code2, GitBranch } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Skill {
  Icon: LucideIcon;
  name: string;
  level: number; // 0..100
  tag: string;
}

const SKILLS: Skill[] = [
  { Icon: FileCode2, name: 'Python', level: 65, tag: 'Language' },
  { Icon: Code2, name: 'C Programming', level: 55, tag: 'Language' },
  { Icon: Brain, name: 'Machine Learning', level: 30, tag: 'Learning' },
  { Icon: Database, name: 'Data & SQL', level: 40, tag: 'Learning' },
  { Icon: LineChart, name: 'Data Analysis', level: 45, tag: 'Practising' },
  { Icon: Cpu, name: 'AI Fundamentals', level: 35, tag: 'Studying' },
  { Icon: GitBranch, name: 'Git & GitHub', level: 50, tag: 'Tooling' },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      {/* glow accent */}
      <div className="absolute top-1/3 left-0 h-[300px] w-[300px] rounded-full bg-glow-violet/10 blur-[110px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="reveal">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            <span className="h-px w-8 bg-accent-400" />
            Skills I'm learning
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            The toolbox I'm{' '}
            <span className="text-gradient">building up.</span>
          </h2>
          <p className="mt-5 text-gray-400 max-w-2xl leading-relaxed">
            I'm still early on this path. Here's an honest look at where I am
            with each skill — and where I'm headed.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, delay }: { skill: Skill; delay: number }) {
  const { Icon, name, level, tag } = skill;
  const delayClass = `reveal-delay-${Math.min(delay % 4, 4)}`;
  return (
    <div
      className={`reveal ${delayClass} group relative rounded-2xl border border-white/10 bg-gradient-to-br from-ink-800/60 to-ink-900/60 p-5 transition-all hover:border-accent-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-500/10`}
    >
      <div className="flex items-start justify-between">
        <span className="grid place-items-center h-11 w-11 rounded-xl bg-white/5 border border-white/10 text-accent-300 transition-colors group-hover:bg-accent-500/10 group-hover:border-accent-500/30">
          <Icon className="h-5 w-5" />
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 border border-white/10 rounded-full px-2.5 py-1">
          {tag}
        </span>
      </div>

      <h3 className="mt-4 font-display font-semibold text-white">{name}</h3>

      {/* Progress bar */}
      <div className="mt-4">
        <div className="flex justify-between text-xs text-gray-500 mb-1.5">
          <span>Progress</span>
          <span className="text-gray-400">{level}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-ink-700 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-accent-400 to-glow-emerald transition-all duration-1000 ease-out"
            style={{ width: `${level}%` }}
          />
        </div>
      </div>
    </div>
  );
}
