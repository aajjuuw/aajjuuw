import { ArrowUpRight, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  repo: string;
  accent: string;
}

const PROJECTS: Project[] = [
  {
    title: 'Handwritten Digit Recogniser',
    description:
      'A first dive into neural networks — training a simple model on the MNIST dataset to recognise digits 0–9. Built while learning the basics of deep learning.',
    tags: ['Python', 'TensorFlow', 'NumPy'],
    repo: 'https://github.com',
    accent: 'from-accent-400/20 to-glow-emerald/10',
  },
  {
    title: 'Student Grade Analyser',
    description:
      'A small data analysis script that ingests a CSV of marks, computes statistics, and plots distributions. My earliest taste of pandas and matplotlib.',
    tags: ['Python', 'pandas', 'matplotlib'],
    repo: 'https://github.com',
    accent: 'from-glow-violet/20 to-accent-400/10',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'This very site — designed and built from scratch with React and Tailwind CSS to document my learning journey and share my projects with the world.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    repo: 'https://github.com',
    accent: 'from-glow-emerald/20 to-glow-violet/10',
  },
  {
    title: 'Chatbot with Python',
    description:
      'A rule-based chatbot that answers common college-related questions. A beginner-friendly project to understand control flow and string handling.',
    tags: ['Python', 'NLP basics'],
    repo: 'https://github.com',
    accent: 'from-accent-400/20 to-glow-violet/10',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="absolute top-1/4 right-0 h-[350px] w-[350px] rounded-full bg-accent-500/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="reveal">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            <span className="h-px w-8 bg-accent-400" />
            My projects
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Small builds,{' '}
            <span className="text-gradient">big learning.</span>
          </h2>
          <p className="mt-5 text-gray-400 max-w-2xl leading-relaxed">
            These are early, humble projects — each one taught me something new.
            They're all open on GitHub, and I keep adding to them as I learn more.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const { title, description, tags, repo, accent } = project;
  const delayClass = `reveal-delay-${Math.min(delay, 4)}`;
  return (
    <a
      href={repo}
      target="_blank"
      rel="noopener noreferrer"
      className={`reveal ${delayClass} group relative block rounded-2xl border border-white/10 bg-gradient-to-br from-ink-800/70 to-ink-900/70 p-6 sm:p-7 overflow-hidden transition-all hover:border-accent-500/30 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-accent-500/10`}
    >
      {/* Accent glow */}
      <div
        className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${accent} blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
            <span className="grid place-items-center h-7 w-7 rounded-lg bg-white/5 border border-white/10 text-accent-300">
              <Github className="h-3.5 w-3.5" />
            </span>
            Project
          </div>
          <ArrowUpRight className="h-5 w-5 text-gray-600 transition-all group-hover:text-accent-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        <h3 className="mt-5 font-display text-xl font-semibold text-white tracking-tight">
          {title}
        </h3>

        <p className="mt-3 text-sm text-gray-400 leading-relaxed">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium text-accent-200 bg-accent-500/10 border border-accent-500/20 rounded-md px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
