import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Менеджер задач',
    description:
      'Полноценное веб-приложение для управления задачами с поддержкой командной работы, дедлайнов и категорий.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    imageUrl: '/projects/project-1.png',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/bogdan/task-manager',
    featured: true,
    status: 'completed',
  },
  {
    id: 'project-2',
    title: 'Интернет-магазин',
    description:
      'Платформа электронной коммерции с каталогом товаров, корзиной и интеграцией платёжной системы.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    imageUrl: '/projects/project-2.png',
    githubUrl: 'https://github.com/bogdan/ecommerce',
    featured: true,
    status: 'completed',
  },
  {
    id: 'project-3',
    title: 'Дашборд аналитики',
    description:
      'Интерактивная панель для визуализации метрик информационной системы с фильтрами и экспортом данных.',
    techStack: ['React', 'D3.js', 'Python', 'FastAPI', 'SQLite'],
    imageUrl: '/projects/project-3.png',
    demoUrl: 'https://charts.example.com',
    githubUrl: 'https://github.com/bogdan/dashboard',
    featured: false,
    status: 'in-progress',
  },
];
