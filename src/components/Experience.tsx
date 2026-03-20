'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { experienceBlocks } from '@/content/portfolio';

export default function Experience() {
  const { ref, isInView } = useInView(0.08);

  return (
    <section id="experience" className="py-24 md:py-36 section-padding" ref={ref}>
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-14 md:mb-20"
        >
          <p className="text-accent-500 font-mono text-xs mb-3 tracking-[0.2em] uppercase">Experience</p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-warm-100">
            Roles <span className="gradient-text">& ownership</span>
          </h2>
        </motion.div>

        <div className="space-y-12 md:space-y-16">
          {experienceBlocks.map((block, i) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="rounded-2xl border border-warm-800/50 bg-warm-900/20 p-6 md:p-10 lg:p-12"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-warm-100">{block.company}</h3>
                  <p className="text-accent-400/90 font-medium mt-1">{block.role}</p>
                </div>
                <p className="text-sm font-mono text-warm-600">{block.period}</p>
              </div>
              <div className="space-y-5 text-warm-400 leading-relaxed text-base lg:text-lg max-w-4xl">
                {block.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
