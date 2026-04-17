import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skillGroups } from '@/data/skills';
import { timelineItems } from '@/data/experience';
import { GraduationCap, Briefcase } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            title="Обо мне"
            subtitle="Немного о себе, своих навыках и пути в разработке"
          />
        </AnimatedSection>

        {/* Bio */}
        <AnimatedSection className="mb-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
              Меня зовут Богдан Горбачёв. Я студент{' '}
              <span className="font-medium text-violet-600 dark:text-violet-400">
                Российского университета дружбы народов
              </span>{' '}
              по специальности «Информационные системы и программирование». Увлекаюсь
              веб-разработкой, изучаю современный стек технологий и стараюсь применять знания в
              реальных проектах. Открыт к стажировкам и интересным задачам.
            </p>
          </div>
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection className="mb-16" delay={0.1}>
          <h3 className="mb-8 text-center text-xl font-semibold text-gray-900 dark:text-gray-100">
            Навыки и технологии
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
              >
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  {group.label}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-1.5">
                      <Badge>{skill.name}</Badge>
                      <span className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={`h-1.5 w-1.5 rounded-full ${
                              i < skill.level
                                ? 'bg-violet-500'
                                : 'bg-gray-200 dark:bg-gray-700'
                            }`}
                          />
                        ))}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection delay={0.2}>
          <h3 className="mb-8 text-center text-xl font-semibold text-gray-900 dark:text-gray-100">
            Образование и опыт
          </h3>
          <div className="mx-auto max-w-2xl space-y-6">
            {timelineItems.map((item) => (
              <div
                key={item.id}
                className="relative flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
                  {item.type === 'education' ? (
                    <GraduationCap size={20} />
                  ) : (
                    <Briefcase size={20} />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{item.title}</h4>
                    <span className="shrink-0 text-xs text-gray-400 dark:text-gray-500">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm text-violet-600 dark:text-violet-400">
                    {item.organization}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                  {item.tags && item.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
