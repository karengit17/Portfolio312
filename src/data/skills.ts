import { SkillGroup } from '@/types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'languages',
    label: 'Языки',
    skills: [
      { name: 'TypeScript', level: 4, category: 'languages' },
      { name: 'JavaScript', level: 4, category: 'languages' },
      { name: 'Python', level: 3, category: 'languages' },
      { name: 'SQL', level: 4, category: 'languages' },
    ],
  },
  {
    category: 'frontend',
    label: 'Фронтенд',
    skills: [
      { name: 'React', level: 4, category: 'frontend' },
      { name: 'Next.js', level: 3, category: 'frontend' },
      { name: 'Tailwind CSS', level: 4, category: 'frontend' },
      { name: 'HTML / CSS', level: 5, category: 'frontend' },
    ],
  },
  {
    category: 'backend',
    label: 'Бэкенд',
    skills: [
      { name: 'Node.js', level: 3, category: 'backend' },
      { name: 'FastAPI', level: 3, category: 'backend' },
      { name: 'REST API', level: 4, category: 'backend' },
    ],
  },
  {
    category: 'database',
    label: 'Базы данных',
    skills: [
      { name: 'PostgreSQL', level: 3, category: 'database' },
      { name: 'MongoDB', level: 2, category: 'database' },
      { name: 'Prisma ORM', level: 3, category: 'database' },
    ],
  },
  {
    category: 'tools',
    label: 'Инструменты',
    skills: [
      { name: 'Git & GitHub', level: 4, category: 'tools' },
      { name: 'Docker', level: 2, category: 'tools' },
      { name: 'VS Code', level: 5, category: 'tools' },
      { name: 'Figma', level: 2, category: 'tools' },
    ],
  },
];
