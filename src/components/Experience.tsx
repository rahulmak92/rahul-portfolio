'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { experienceBlocks, storyArc, deliveryNote } from '@/content/portfolio';

export default function Experience() {
  const { ref, isInView } = useInView(0.08);

  return (
    <section id="experience" className="py-24 md:py-32 section-padding" ref={ref}>
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-14 md:mb-20"
        >
          <p className="text-accent-500 font-mono text-xs mb-3 tracking-[0.2em] uppercase">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-warm-100 mb-4">
            Roles <span className="gradient-text">& ownership</span>
          </h2>
          <p className="text-warm-500 text-sm md:text-base italic">
            {deliveryNote}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.05 }}
          className="mb-16 md:mb-20"
        >
          <h3 className="text-xs font-mono uppercase tracking-widest text-warm-500 mb-6">
            {storyArc.title}
          </h3>
          <div className="relative">
            <div className="absolute left-3 md:left-4 top-0 bottom-0 w-px bg-warm-800/50" />
            <div className="space-y-8 md:space-y-10">
              {storyArc.beats.map((beat, i) => (
                <motion.div
                  key={beat.year}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="relative pl-12 md:pl-16"
                >
                  <div className="absolute left-[7px] md:left-[9px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-accent-500/50 bg-warm-950" />
                  <span className="text-xs font-mono text-accent-500/80">
                    {beat.year}
                  </span>
                  <h4 className="text-base md:text-lg font-semibold text-warm-200 mt-1 mb-1">
                    {beat.title}
                  </h4>
                  <p className="text-warm-400 text-sm leading-relaxed max-w-2xl">
                    {beat.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
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
                  <h3 className="text-xl md:text-2xl font-bold text-warm-100">
                    {block.company}
                  </h3>
                  <p className="text-accent-400/90 font-medium mt-1">
                    {block.role}
                  </p>
                </div>
                <p className="text-sm font-mono text-warm-600">{block.period}</p>
              </div>
              <ul className="space-y-3 max-w-4xl">
                {block.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-warm-400 leading-relaxed text-base lg:text-lg"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-accent-500/60 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
