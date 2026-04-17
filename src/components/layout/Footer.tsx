import { SITE_NAME } from '@/constants';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-8 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="text-sm text-gray-400 dark:text-gray-500">
          © {year} {SITE_NAME}. Сделано с любовью к коду.
        </p>
      </div>
    </footer>
  );
}
