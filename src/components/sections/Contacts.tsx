import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { socialLinks } from '@/data/social';
import { Mail, GitBranch, Send, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Mail,
  GitBranch,
  Send,
};

export function Contacts() {
  return (
    <section id="contacts" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            title="Контакты"
            subtitle="Готов к сотрудничеству — напишите мне любым удобным способом"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mx-auto max-w-md">
          <div className="flex flex-col gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.iconName] ?? Mail;
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target={link.id === 'email' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="group flex items-center gap-4 rounded-xl border border-gray-800 bg-gray-900 p-4 transition-all duration-200 hover:border-violet-500/40 hover:bg-violet-500/5 hover:shadow-lg hover:shadow-violet-500/10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition-colors group-hover:bg-violet-500/20">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-200">{link.label}</p>
                    <p className="max-w-[220px] truncate text-xs text-gray-500">
                      {link.url.replace('mailto:', '').replace('https://', '')}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <p className="mt-8 text-center text-sm leading-relaxed text-gray-500">
            Открыт к стажировкам, проектной работе и интересным предложениям. Отвечаю в
            течение&nbsp;24 часов.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
