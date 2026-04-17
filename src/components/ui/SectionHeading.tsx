import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 text-center', className)}>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:text-lg">{subtitle}</p>
      )}
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
    </div>
  );
}
