'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { howIShip } from '@/content/portfolio';

export default function HowIShip() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="how-i-ship" className="py-20 md:py-28 section-padding" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-500 font-mono text-xs mb-3 tracking-[0.2em] uppercase">Delivery</p>
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-warm-100 mb-8">{howIShip.title}</h2>
          <div className="space-y-5 text-warm-400 leading-relaxed text-base md:text-lg">
            {howIShip.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
