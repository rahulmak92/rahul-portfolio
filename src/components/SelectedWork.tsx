'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { workSection, workCases } from '@/content/portfolio';
import { ArrowRight, ChevronRight } from 'lucide-react';

function PipelineRow({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-1.5 sm:gap-2">
          <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md bg-warm-800/50 border border-warm-700/40 text-[11px] sm:text-xs text-warm-300 font-medium whitespace-nowrap">
            {step}
          </span>
          {i < steps.length - 1 && (
            <ChevronRight className="w-3 h-3 text-accent-500/40 flex-shrink-0" />
          )}
        </div>
      ))}
    </div>
  );
}

/* Group cases by company, preserving order */
function groupByCompany(cases: typeof workCases) {
  const groups: { company: string; context?: string; cases: typeof workCases }[] = [];
  for (const c of cases) {
    const last = groups[groups.length - 1];
    if (last && last.company === c.company) {
      last.cases.push(c);
    } else {
      groups.push({
        company: c.company,
        context: c.companyContext,
        cases: [c],
      });
    }
  }
  return groups;
}

export default function SelectedWork() {
  const { ref, isInView } = useInView(0.05);
  const groups = groupByCompany(workCases);
  let globalIdx = 0;

  return (
    <section id="work" className="py-24 md:py-32 section-padding bg-warm-950/40" ref={ref}>
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-accent-500 font-mono text-xs mb-3 tracking-[0.2em] uppercase">
            {workSection.kicker}
          </p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-warm-100 mb-4">
            {workSection.headline}
          </h2>
          <p className="text-warm-400 text-base md:text-lg leading-relaxed max-w-2xl">
            {workSection.intro}
          </p>
        </motion.div>

        {/* Company groups */}
        <div className="space-y-16 md:space-y-20">
          {groups.map((group) => (
            <div key={group.company}>
              {/* Company header + context */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5 }}
                className="mb-8 md:mb-10"
              >
                <h3 className="text-lg md:text-xl font-bold text-warm-100 mb-2">
                  {group.company}
                </h3>
                {group.context && (
                  <p className="text-warm-400 text-sm leading-relaxed max-w-3xl">
                    {group.context}
                  </p>
                )}
              </motion.div>

              {/* Case study cards */}
              <div className="space-y-8 md:space-y-10">
                {group.cases.map((c) => {
                  const idx = globalIdx++;
                  return (
                    <motion.article
                      key={c.id}
                      initial={{ opacity: 0, y: 36 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.6 }}
                      className="rounded-2xl border border-warm-800/50 bg-warm-900/20 overflow-hidden"
                    >
                      {/* Card header bar */}
                      <div className="flex flex-wrap items-center gap-3 px-6 md:px-10 pt-6 md:pt-8 pb-0">
                        <span className="text-xs font-mono text-warm-500 tabular-nums">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-accent-500/[0.08] border border-accent-500/15 text-accent-400">
                          {c.badge}
                        </span>
                      </div>

                      {/* Main content */}
                      <div className="px-6 md:px-10 py-6 md:py-8">
                        <h4 className="text-xl md:text-2xl xl:text-[1.7rem] font-semibold text-warm-100 leading-snug mb-4 max-w-3xl">
                          {c.shortTitle}
                        </h4>

                        <p className="text-warm-400 text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
                          {c.oneLiner}
                        </p>

                        {/* Pipeline */}
                        <div className="mb-8">
                          <PipelineRow steps={c.pipeline} />
                        </div>

                        {/* Two-column: Challenge + My role */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="text-xs font-mono uppercase tracking-widest text-warm-500 mb-2">
                              Challenge
                            </h5>
                            <p className="text-warm-400 text-sm leading-relaxed">
                              {c.challenge}
                            </p>
                          </div>
                          <div>
                            <h5 className="text-xs font-mono uppercase tracking-widest text-warm-500 mb-2">
                              My role
                            </h5>
                            <p className="text-warm-400 text-sm leading-relaxed">
                              {c.myRole}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Result footer */}
                      <div className="border-t border-accent-500/15 bg-accent-500/[0.03] px-6 md:px-10 py-5 md:py-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                        <div className="flex items-start gap-3 flex-1 min-w-0">
                          <ArrowRight className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                          <p className="text-warm-100 text-sm md:text-base leading-relaxed font-medium">
                            {c.result}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-1.5 md:flex-shrink-0">
                          {c.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded text-[10px] font-mono text-warm-500 bg-warm-800/40 border border-warm-800/50 whitespace-nowrap"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
