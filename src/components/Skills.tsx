'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/data/resume';
import { useInView } from '@/hooks/useInView';

export default function Skills() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="skills" className="py-24 md:py-32 section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-accent-500 font-mono text-xs mb-4 tracking-[0.2em] uppercase">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-warm-100">
            Technologies I <span className="gradient-text">work with</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              className="card card-hover p-6 group"
            >
              <h3 className="text-xs uppercase tracking-[0.2em] text-accent-500/80 font-mono mb-4 group-hover:text-accent-400 transition-colors">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-[13px] rounded-full bg-warm-800/40 text-warm-400 hover:text-warm-200 hover:bg-accent-500/10 transition-all duration-200 cursor-default"
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
