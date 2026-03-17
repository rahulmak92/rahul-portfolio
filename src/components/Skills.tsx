'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/data/resume';
import { useInView } from '@/hooks/useInView';
import { Sparkles } from 'lucide-react';

export default function Skills() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="skills" className="py-28 md:py-40 section-padding" ref={ref}>
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-accent-500 font-mono text-xs mb-4 tracking-[0.2em] uppercase">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-warm-100 mb-4">
            Technologies I <span className="gradient-text">work with</span>
          </h2>
          <p className="text-warm-500 max-w-3xl text-base lg:text-lg">
            AI, NLP, and cloud model deployment are at the core of everything I build.
            The rest of the stack supports shipping those capabilities to production.
          </p>
        </motion.div>

        {/* Featured AI categories — larger cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {skillCategories
            .filter((c) => (c as any).featured)
            .map((cat, catIdx) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-px bg-gradient-to-b from-accent-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative card card-hover p-6 xl:p-8 h-full border-accent-500/10">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-3.5 h-3.5 text-accent-400" />
                    <h3 className="text-xs lg:text-sm uppercase tracking-[0.2em] text-accent-400 font-mono">
                      {cat.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm rounded-full bg-accent-500/[0.06] border border-accent-500/10 text-warm-300 hover:text-warm-100 hover:bg-accent-500/15 hover:border-accent-500/25 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other categories — standard cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories
            .filter((c) => !(c as any).featured)
            .map((cat, catIdx) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + catIdx * 0.08 }}
                className="card card-hover p-6 xl:p-8 group"
              >
                <h3 className="text-xs lg:text-sm uppercase tracking-[0.2em] text-warm-600 font-mono mb-4 group-hover:text-warm-400 transition-colors">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-warm-800/40 text-warm-400 hover:text-warm-200 hover:bg-warm-700/40 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
