'use client';

import { motion } from 'framer-motion';
import { ArrowDown, GitBranch, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-16"
    >
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute right-1/4 top-2/3 h-64 w-64 rounded-full bg-blue-600/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-base font-medium text-violet-400 sm:text-lg"
        >
          Привет, меня зовут
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 text-5xl font-extrabold tracking-tight text-white sm:text-7xl"
        >
          Богдан
          <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Горбачёв
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-xl font-medium text-gray-300 sm:text-2xl"
        >
          Full Stack разработчик
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg"
        >
          Студент специальности «Информационные системы и программирование». Создаю современные
          веб-приложения и люблю решать интересные технические задачи.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button size="lg" onClick={() => scrollTo('projects')}>
            Мои проекты
          </Button>
          <Button size="lg" variant="secondary" onClick={() => scrollTo('contacts')}>
            Написать мне
          </Button>
        </motion.div>

        {/* Social quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/TheBOGDA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-500 transition-colors hover:text-white"
          >
            <GitBranch size={22} />
          </a>
          <a
            href="https://t.me/bogdan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="text-gray-500 transition-colors hover:text-white"
          >
            <Send size={22} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-gray-500 transition-colors hover:text-white"
        aria-label="Прокрутить вниз"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
}
