'use client';

import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { NAV_LINKS, SITE_NAME } from '@/constants';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { cn } from '@/lib/utils';

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace('#', ''));

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-30 transition-all duration-300',
          scrolled
            ? 'bg-gray-950/90 shadow-lg shadow-black/20 backdrop-blur-md'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#hero')}
            className="cursor-pointer text-lg font-bold text-white transition-colors hover:text-violet-400"
          >
            {SITE_NAME}
            <span className="text-violet-400">.</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                    isActive ? 'text-violet-400' : 'text-gray-400 hover:text-white'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="mt-0.5 block h-0.5 w-full rounded-full bg-violet-500" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Открыть меню"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-white/10 hover:text-white md:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={NAV_LINKS}
        activeSection={activeSection}
      />
    </>
  );
}
