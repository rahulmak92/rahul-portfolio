'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { storyArc } from '@/content/portfolio';

export default function Story() {
  const { ref, isInView } = useInView(0.08);

  return (
    <section id="story" className="py-24 md:py-36 section-padding border-t border-warm-800/40" ref={ref}>
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-12 md:mb-16 max-w-3xl"
        >
          <p className="text-accent-500 font-mono text-xs mb-3 tracking-[0.2em] uppercase">{storyArc.kicker}</p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-warm-100 leading-tight mb-6">
            {storyArc.title}{' '}
            <span className="gradient-text">{storyArc.titleAccent}</span>
          </h2>
          <p className="text-warm-400 text-lg leading-relaxed">{storyArc.intro}</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-3 md:left-4 top-0 bottom-0 w-px bg-warm-800/50" />
          <div className="space-y-12 md:space-y-14">
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
                <span className="text-xs font-mono text-accent-500/80">{beat.year}</span>
                <h3 className="text-lg md:text-xl font-semibold text-warm-200 mt-1 mb-2">{beat.title}</h3>
                <p className="text-warm-400 leading-relaxed max-w-3xl">{beat.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
