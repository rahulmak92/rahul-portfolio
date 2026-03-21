'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { skillsAndDomains } from '@/content/portfolio';

function DepthBadge({ depth }: { depth: 'deep' | 'working' }) {
  if (depth === 'deep') {
    return (
      <span className="ml-auto flex-shrink-0 text-[10px] font-mono uppercase tracking-wider text-accent-500/70 bg-accent-500/[0.06] border border-accent-500/10 px-2 py-0.5 rounded-full">
        Deep
      </span>
    );
  }
  return (
    <span className="ml-auto flex-shrink-0 text-[10px] font-mono uppercase tracking-wider text-warm-600 bg-warm-800/30 border border-warm-800/40 px-2 py-0.5 rounded-full">
      Working
    </span>
  );
}

export default function Skills() {
  const { ref, isInView } = useInView(0.08);

  return (
    <section id="skills" className="py-24 md:py-32 section-padding border-t border-warm-800/40" ref={ref}>
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-12 md:mb-16 max-w-3xl"
        >
          <p className="text-accent-500 font-mono text-xs mb-3 tracking-[0.2em] uppercase">{skillsAndDomains.kicker}</p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-warm-100 mb-4">
            Depth <span className="gradient-text">by domain</span>
          </h2>
          <p className="text-warm-400 text-base md:text-lg leading-relaxed">
            {skillsAndDomains.intro}
          </p>
          <div className="flex items-center gap-5 mt-4 text-xs text-warm-600">
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-accent-500/50" />
              Deep — years of production use, architectural decisions
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-warm-700/60" />
              Working — shipped production code, not primary owner
            </span>
          </div>
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
              <h3 className="text-sm font-semibold text-warm-200 mb-5">{b.title}</h3>
              <ul className="space-y-2.5 flex-1">
                {b.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-3 text-sm text-warm-400 leading-snug">
                    <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full ${item.depth === 'deep' ? 'bg-accent-500/60' : 'bg-warm-700/60'}`} />
                    <span className="flex-1 min-w-0">{item.name}</span>
                    <DepthBadge depth={item.depth} />
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
