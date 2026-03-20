'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { skillsAndDomains } from '@/content/portfolio';

export default function Skills() {
  const { ref, isInView } = useInView(0.08);

  return (
    <section id="skills" className="py-24 md:py-36 section-padding border-t border-warm-800/40" ref={ref}>
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-12 md:mb-16 max-w-3xl"
        >
          <p className="text-accent-500 font-mono text-xs mb-3 tracking-[0.2em] uppercase">{skillsAndDomains.kicker}</p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-warm-100 mb-6">
            Depth <span className="gradient-text">by domain</span>
          </h2>
          <p className="text-warm-400 text-lg leading-relaxed">{skillsAndDomains.intro}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {skillsAndDomains.buckets.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-warm-800/60 bg-warm-900/25 p-6 md:p-8 flex flex-col"
            >
              <h3 className="text-sm font-semibold text-warm-200 mb-4">{b.title}</h3>
              <p className="text-warm-400 text-sm md:text-base leading-relaxed flex-1">{b.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-12 text-warm-500 text-sm md:text-base leading-relaxed max-w-3xl border-l-2 border-warm-800 pl-4"
        >
          {skillsAndDomains.deliveryNote}
        </motion.p>
      </div>
    </section>
  );
}
