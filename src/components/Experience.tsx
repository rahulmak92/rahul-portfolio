'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences } from '@/data/resume';
import { useInView } from '@/hooks/useInView';
import { ChevronRight } from 'lucide-react';

export default function Experience() {
  const { ref, isInView } = useInView(0.05);
  const [activeId, setActiveId] = useState(experiences[0].id);
  const active = experiences.find((e) => e.id === activeId)!;

  return (
    <section id="experience" className="py-28 md:py-40 section-padding" ref={ref}>
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-accent-500 font-mono text-xs mb-4 tracking-[0.2em] uppercase">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-warm-100">
            Where I&apos;ve <span className="gradient-text">made impact</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Tabs */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 lg:border-l border-warm-800/50">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveId(exp.id)}
                  className={`text-left px-4 py-3 lg:-ml-px lg:border-l-2 transition-all duration-300 whitespace-nowrap lg:whitespace-normal flex-shrink-0 rounded-lg lg:rounded-none ${
                    activeId === exp.id
                      ? 'lg:border-l-accent-500 text-warm-100 bg-warm-900/50 lg:bg-transparent'
                      : 'lg:border-l-transparent text-warm-500 hover:text-warm-300 hover:bg-warm-900/30'
                  }`}
                >
                  <div className="font-medium text-sm lg:text-base">{exp.company}</div>
                  <div className="text-xs lg:text-sm text-warm-600 mt-0.5">{exp.period}</div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="lg:col-span-9"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
              >
                <div className="mb-8">
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-warm-100 mb-2">{active.role}</h3>
                  <p className="text-accent-400 text-sm lg:text-base font-medium">
                    {active.company}
                    <span className="text-warm-700 mx-2">·</span>
                    <span className="text-warm-500">{active.period}</span>
                  </p>
                  {active.subtitle && (
                    <p className="text-xs text-warm-600 mt-2 italic">{active.subtitle}</p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {active.highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="flex gap-3 text-warm-400 leading-relaxed text-base lg:text-lg"
                    >
                      <ChevronRight className="w-4 h-4 text-accent-500/60 mt-1 flex-shrink-0" />
                      <span>{h}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-accent-500/[0.07] text-accent-400/80 border border-accent-500/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
