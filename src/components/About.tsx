'use client';

import { motion } from 'framer-motion';
import { personalInfo, coreExpertise } from '@/data/resume';
import { useInView } from '@/hooks/useInView';

export default function About() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section id="about" className="py-24 md:py-32 section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-accent-500 font-mono text-xs mb-4 tracking-[0.2em] uppercase">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-warm-100 leading-tight">
            Software & intelligence,
            <br />
            <span className="gradient-text">converging.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-16">
          <motion.div
            className="md:col-span-3 space-y-5"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-warm-300 leading-[1.8] text-[15px]">
              {personalInfo.profile}
            </p>
            <p className="text-warm-500 leading-[1.8] text-[15px]">
              Currently building AI-enabled financial reporting tools and leading
              engineering teams at an early-stage startup. Strong background in software
              development, data analysis, stakeholder communication, and project execution.
            </p>
          </motion.div>

          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-xs text-warm-600 uppercase tracking-[0.2em] mb-5">
              Core Expertise
            </p>
            <div className="flex flex-wrap gap-2">
              {coreExpertise.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-[13px] rounded-full bg-warm-900/80 border border-warm-800/50 text-warm-400 hover:text-accent-400 hover:border-accent-500/30 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
