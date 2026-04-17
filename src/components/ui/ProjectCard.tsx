import { ExternalLink, GitBranch } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Project } from '@/types';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

const statusLabel: Record<Project['status'], { text: string; class: string }> = {
  completed: { text: 'Завершён', class: 'text-emerald-600 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-400/10' },
  'in-progress': { text: 'В процессе', class: 'text-amber-600 bg-amber-100 dark:text-amber-400 dark:bg-amber-400/10' },
  archived: { text: 'Архив', class: 'text-gray-500 bg-gray-100 dark:text-gray-400 dark:bg-gray-400/10' },
};

export function ProjectCard({ project }: ProjectCardProps) {
  const status = statusLabel[project.status];

  return (
    <article className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-violet-500/30">
      {/* Header */}
      <div className="mb-3 flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-violet-600 dark:text-gray-100 dark:group-hover:text-white">
          {project.title}
        </h3>
        <span className={cn('shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium', status.class)}>
          {status.text}
        </span>
      </div>

      {/* Description */}
      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="mb-5 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Исходный код ${project.title} на GitHub`}
            className="flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <GitBranch size={15} />
            <span>Код</span>
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Демо ${project.title}`}
            className="flex items-center gap-1.5 text-sm text-violet-600 transition-colors hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
          >
            <ExternalLink size={15} />
            <span>Демо</span>
          </a>
        )}
      </div>
    </article>
  );
}
