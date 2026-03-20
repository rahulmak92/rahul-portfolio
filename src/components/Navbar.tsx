'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Calendar } from 'lucide-react';
import { siteLinks } from '@/content/portfolio';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Teaching', href: '#teaching' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 50));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const top = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveSection(top.target.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-warm-950/70 backdrop-blur-2xl border-b border-warm-800/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-48 flex items-center justify-between h-16 lg:h-20">
        <a href="#" className="text-base lg:text-lg font-bold tracking-tight text-warm-200">
          R<span className="text-accent-500">.</span>M<span className="text-accent-500">.</span>
        </a>

        <div className="hidden xl:flex items-center gap-0.5 flex-wrap justify-end">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-2.5 py-2 text-xs rounded-full hover:bg-warm-800/30 transition-all duration-200 ${
                activeSection === l.href.slice(1)
                  ? 'text-accent-400 bg-accent-500/[0.08]'
                  : 'text-warm-500 hover:text-warm-200'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={siteLinks.calendly}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book time (opens in new tab)"
            className="ml-1 text-xs px-3 py-2 rounded-full border border-warm-700/80 text-warm-400 hover:text-warm-200 hover:border-warm-500 transition-all duration-200 inline-flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            Book time
          </a>
          <a
            href={siteLinks.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download resume (opens in new tab)"
            className="ml-1 text-xs px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 hover:bg-accent-500/20 transition-all duration-200 inline-flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block w-5 h-0.5 bg-warm-300 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[4px]' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-warm-300 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[4px]' : ''}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-warm-950/95 backdrop-blur-2xl border-b border-warm-800/30 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-1 max-h-[80vh] overflow-y-auto">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  role="menuitem"
                  onClick={closeMobile}
                  className={`transition-colors py-3 text-lg ${
                    activeSection === l.href.slice(1)
                      ? 'text-accent-400'
                      : 'text-warm-400 hover:text-warm-100'
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href={siteLinks.calendly}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                aria-label="Book time with me (opens in new tab)"
                className="text-warm-400 hover:text-warm-100 transition-colors py-3 text-lg inline-flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book time with me
              </a>
              <a
                href={siteLinks.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                aria-label="Download resume (opens in new tab)"
                className="text-accent-400 hover:text-accent-300 transition-colors py-3 text-lg inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
