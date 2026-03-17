'use client';

import { motion } from 'framer-motion';
import { education } from '@/data/resume';
import { useInView } from '@/hooks/useInView';
import { GraduationCap, ExternalLink } from 'lucide-react';

export default function Education() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section id="education" className="py-28 md:py-40 section-padding" ref={ref}>
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-accent-500 font-mono text-xs mb-4 tracking-[0.2em] uppercase">
            Education
          </p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-warm-100">
            Academic <span className="gradient-text">Foundation</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="card card-hover p-8 xl:p-10 group flex items-start gap-6"
            >
              <div className="p-3 rounded-xl bg-accent-500/[0.08] border border-accent-500/15 group-hover:bg-accent-500/15 transition-colors flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-accent-400" />
              </div>
              <div>
                <h3 className="text-base lg:text-lg xl:text-xl font-semibold text-warm-100 mb-1 leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-accent-400/80 text-sm lg:text-base font-medium">{edu.school}</p>
                <p className="text-xs lg:text-sm text-warm-600 mt-2">{edu.year}</p>
                {(edu as any).portfolio && (
                  <a
                    href={(edu as any).portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs lg:text-sm text-accent-400/70 hover:text-accent-400 mt-2 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    AI/ML Portfolio
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
