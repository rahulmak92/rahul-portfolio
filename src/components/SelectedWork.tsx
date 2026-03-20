'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { builtSection, selectedWorkCases, tellenContextLine } from '@/content/portfolio';

type Case = (typeof selectedWorkCases)[number];

function WorkflowDiagram({ c }: { c: Case }) {
  const cap = c.diagramCaption;
  if (c.diagramVariant === 'vertical') {
    return (
      <div className="rounded-lg border border-warm-800/50 bg-warm-950/60 overflow-hidden max-w-md">
        <div className="flex flex-col items-stretch px-5 py-4 gap-0">
          {c.diagramSteps.map((s, i) => (
            <Fragment key={i}>
              <div className="text-xs text-warm-300 text-center py-2">{s}</div>
              {i < c.diagramSteps.length - 1 && (
                <div className="flex justify-center py-0.5 text-accent-500/35 text-sm">↓</div>
              )}
            </Fragment>
          ))}
        </div>
        {cap && <p className="px-5 py-2.5 text-[11px] text-warm-500 border-t border-warm-800/40 leading-snug">{cap}</p>}
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-warm-800/50 bg-warm-950/60 overflow-hidden">
      <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2 px-4 py-3.5 md:px-5">
        {c.diagramSteps.map((s, i) => (
          <Fragment key={i}>
            <span className="text-xs text-warm-300 whitespace-nowrap">{s}</span>
            {i < c.diagramSteps.length - 1 && <span className="text-accent-500/30 text-[10px] select-none">→</span>}
          </Fragment>
        ))}
      </div>
      {cap && <p className="px-4 md:px-5 py-2.5 text-[11px] text-warm-500 border-t border-warm-800/40 leading-snug">{cap}</p>}
    </div>
  );
}

const subsectionCard =
  'rounded-lg border border-warm-800/50 bg-warm-950/40 p-4 md:p-5 max-w-prose';

export default function SelectedWork() {
  const { ref, isInView } = useInView(0.08);

  return (
    <section id="work" className="py-20 md:py-28 section-padding bg-warm-950/40" ref={ref}>
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="max-w-2xl mb-10 md:mb-14"
        >
          <p className="text-warm-500 font-mono text-xs mb-2 tracking-[0.15em] uppercase">{builtSection.kicker}</p>
          <p className="text-warm-400 text-base md:text-[17px] leading-relaxed">{builtSection.intro}</p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {selectedWorkCases.map((c, idx) => {
            const isTellen = idx < 2;
            return (
              <motion.article
                key={c.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 border-b border-warm-800/40 pb-16 md:pb-20 last:border-0 last:pb-0"
              >
                {idx === 0 && (
                  <div className="mb-8 md:mb-10">
                    <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-warm-500 mb-2">Tellen</h3>
                    <div className="rounded-lg border border-warm-800/50 bg-warm-900/30 px-4 py-3 max-w-2xl">
                      <p className="text-sm text-warm-400 leading-relaxed">{tellenContextLine}</p>
                    </div>
                  </div>
                )}
                {idx === 2 && (
                  <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-warm-500 mb-6">Antylia Scientific</h3>
                )}
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <span className="text-xs font-mono text-warm-600">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="text-xs uppercase tracking-widest text-warm-600">
                    {isTellen ? 'Applied AI product' : 'Enterprise platform'}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl xl:text-2xl font-semibold text-warm-100 mb-2 leading-snug max-w-3xl">
                  {c.title}
                </h3>
                <p className="text-warm-300 text-sm md:text-base leading-relaxed mb-6 max-w-2xl">{c.summary}</p>

                <div className="mb-8 max-w-3xl">
                  <WorkflowDiagram c={c} />
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                  <div className={subsectionCard}>
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-accent-500/90 mb-2">Problem</h4>
                    <p className="text-warm-400 text-sm leading-relaxed">{c.problem}</p>
                  </div>
                  <div className={subsectionCard}>
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-accent-500/90 mb-2">What I built</h4>
                    <p className="text-warm-400 text-sm leading-relaxed">{c.built}</p>
                  </div>
                  <div className={subsectionCard}>
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-accent-500/90 mb-2">What made it difficult</h4>
                    <p className="text-warm-400 text-sm leading-relaxed">{c.difficult}</p>
                  </div>
                  <div className={subsectionCard}>
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-accent-500/90 mb-2">My ownership</h4>
                    <p className="text-warm-400 text-sm leading-relaxed">{c.ownership}</p>
                  </div>
                </div>

                <div className="mt-6 md:mt-8 rounded-xl border border-accent-500/25 border-l-4 border-l-accent-500/70 bg-warm-900/80 ring-1 ring-accent-500/10 shadow-lg shadow-black/20 px-5 py-5 md:px-7 md:py-6 max-w-4xl">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-accent-400 mb-2">Result / impact</h4>
                  <p className="text-warm-100/95 text-sm md:text-base leading-relaxed font-medium">{c.result}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
