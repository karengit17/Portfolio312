'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { NavLink } from '@/types';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  activeSection: string;
}

export function MobileMenu({ isOpen, onClose, links, activeSection }: MobileMenuProps) {
  const handleLinkClick = (href: string) => {
    onClose();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-gray-900 p-6 shadow-2xl"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="text-lg font-semibold text-white">Меню</span>
              <button
                onClick={onClose}
                aria-label="Закрыть меню"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {links.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <button
                    key={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={cn(
                      'cursor-pointer rounded-lg px-4 py-3 text-left text-base font-medium transition-colors',
                      isActive
                        ? 'bg-violet-500/20 text-violet-300'
                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                    )}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
