'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { proofAtGlance } from '@/content/portfolio';
import { ArrowRight } from 'lucide-react';

export default function ProofAtGlance() {
  const { ref, isInView } = useInView(0.12);

  return (
    <section id="proof" className="py-24 md:py-32 section-padding border-t border-warm-800/40" ref={ref}>
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-12 md:mb-16"
        >
          <p className="text-accent-500 font-mono text-xs mb-3 tracking-[0.2em] uppercase">{proofAtGlance.kicker}</p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-warm-500 mb-2">Role</h3>
              <p className="text-warm-300 leading-relaxed text-base lg:text-lg">{proofAtGlance.role}</p>
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-warm-500 mb-2">Focus</h3>
              <p className="text-warm-300 leading-relaxed text-base lg:text-lg">{proofAtGlance.focus}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-warm-800/60 bg-warm-900/30 p-6 md:p-8 lg:p-10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-warm-500 mb-4">Proof points</h3>
              <ul className="space-y-4">
                {proofAtGlance.proofPoints.map((item, i) => (
                  <li key={i} className="flex gap-3 text-warm-400 leading-relaxed text-base lg:text-lg">
                    <span className="text-accent-500/80 mt-2 h-1.5 w-1.5 rounded-full bg-accent-500/60 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#work"
              className="mt-8 inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 text-sm font-medium transition-colors max-w-xl"
            >
              <span>{proofAtGlance.nextLine}</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
