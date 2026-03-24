'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'bright' : 'dark'} mode`}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full
        bg-warm-900/80 border border-warm-700/60 backdrop-blur-xl
        text-warm-400 hover:text-warm-100 hover:border-accent-500/50 hover:bg-warm-800/80
        shadow-lg shadow-black/20
        transition-all duration-300 ease-out
        flex items-center justify-center
        group"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25 }}
            className="flex items-center justify-center"
          >
            <Sun className="w-[18px] h-[18px] group-hover:text-accent-400 transition-colors" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25 }}
            className="flex items-center justify-center"
          >
            <Moon className="w-[18px] h-[18px] group-hover:text-accent-400 transition-colors" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
