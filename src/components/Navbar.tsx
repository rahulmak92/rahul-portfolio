'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download } from 'lucide-react';

const links = [
  { label: 'Story', href: '#about' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Teaching', href: '#teaching' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-warm-950/70 backdrop-blur-2xl border-b border-warm-800/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-48 flex items-center justify-between h-16 lg:h-20">
        <a href="#" className="text-base lg:text-lg font-bold tracking-tight text-warm-200">
          R<span className="text-accent-500">.</span>M
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm text-warm-500 hover:text-warm-200 rounded-full hover:bg-warm-800/30 transition-all duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/RahulMakwana_Resume.pdf"
            target="_blank"
            className="ml-2 text-sm px-5 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 hover:bg-accent-500/20 transition-all duration-200 inline-flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-warm-300 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
          <span className={`block w-5 h-0.5 bg-warm-300 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-warm-950/95 backdrop-blur-2xl border-b border-warm-800/30 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-warm-400 hover:text-warm-100 transition-colors py-3 text-lg"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/RahulMakwana_Resume.pdf"
                target="_blank"
                className="text-accent-400 hover:text-accent-300 transition-colors py-3 text-lg inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
