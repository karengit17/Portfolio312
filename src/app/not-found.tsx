import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <p className="text-8xl font-extrabold text-violet-500">404</p>
        <h1 className="mt-4 text-2xl font-bold text-gray-100">Страница не найдена</h1>
        <p className="mt-2 text-gray-400">Такой страницы не существует или она была перемещена.</p>
        <Link href="/" className="mt-8 inline-block">
          <Button size="lg">На главную</Button>
        </Link>
      </div>
    </div>
  );
}
