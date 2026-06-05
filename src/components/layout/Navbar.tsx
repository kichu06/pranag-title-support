'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { heroContent, navItems } from '@/data/content';
import { COMPANY_NAME } from '@/lib/constants';

const NAV_OFFSET = 96;

function getSectionIdFromHref(href: string) {
  return href.replace('#', '');
}

const navItemMotion: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = navItems.map((item) => {
      const id = getSectionIdFromHref(item.href);
      return document.getElementById(id);
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY + NAV_OFFSET;
      let currentSection = 'home';

      for (const section of sections) {
        if (!section) continue;
        const offsetTop = section.offsetTop;
        if (scrollPosition >= offsetTop) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleScrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (!target) return;

    setMenuOpen(false);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-sm"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-3xl bg-blue-600 text-base font-semibold uppercase text-white shadow-sm">
            P
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">{COMPANY_NAME}</p>
            <p className="text-xs text-slate-500">Enterprise Title Support</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === getSectionIdFromHref(item.href);
            return (
              <motion.button
                key={item.href}
                type="button"
                onClick={() => handleScrollToSection(item.href)}
                variants={navItemMotion}
                className={`text-sm font-medium transition ${
                  isActive
                    ? 'text-slate-900 underline decoration-blue-500/40 underline-offset-4'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
              </motion.button>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 lg:inline-flex"
          >
            Request Pricing
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-slate-900 lg:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-slate-200 bg-white/98 pb-6 shadow-sm lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 pt-5 sm:px-6">
              {navItems.map((item) => {
                const isActive = activeSection === getSectionIdFromHref(item.href);
                return (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleScrollToSection(item.href)}
                    className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                      isActive
                        ? 'bg-slate-100 text-slate-900'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Request Pricing
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
