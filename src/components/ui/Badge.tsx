import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block rounded-full border border-violet-300/50 bg-violet-100/80 px-3 py-1 text-xs font-medium text-violet-700 dark:border-violet-500/30 dark:bg-violet-500/10 dark:text-violet-300',
        className
      )}
    >
      {children}
    </span>
  );
}
