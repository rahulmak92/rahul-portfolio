'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import { CheckCircle2, ArrowRight, Code2 } from 'lucide-react';

const pipelineSteps = [
  {
    id: 'report',
    logos: [
      { src: '/logos/slack.jpeg', alt: 'Slack' },
      { src: '/logos/teams.jpeg', alt: 'Teams' },
    ],
    label: 'Bug reported',
    description: 'A client flags an issue in Slack or Teams. The clock starts ticking.',
    glow: 'from-[#E01E5A]/15 to-[#5B5FC7]/15',
  },
  {
    id: 'ticket',
    logos: [
      { src: '/logos/linear.jpeg', alt: 'Linear' },
      { src: '/logos/asana.jpeg', alt: 'Asana' },
    ],
    label: 'AI creates ticket',
    description: 'An AI agent auto-creates a Linear or Asana ticket with context, repro steps, and priority.',
    glow: 'from-violet-500/15 to-blue-500/15',
  },
  {
    id: 'cursor',
    logos: [
      { src: '/logos/cursor.png', alt: 'Cursor' },
      { src: '/logos/claude.png', alt: 'Claude Code' },
    ],
    label: 'AI agent picks it up',
    description: 'A Cursor or Claude Code agent is assigned the ticket. It reads the codebase, understands context, and implements the fix.',
    glow: 'from-white/10 to-[#D97757]/10',
  },
  {
    id: 'pr',
    logos: [{ src: '/logos/github.jpeg', alt: 'GitHub' }],
    label: 'PR created',
    description: 'The AI agent opens a pull request in GitHub with the changes, linked to the original ticket.',
    glow: 'from-white/10 to-white/5',
  },
  {
    id: 'review',
    logos: [{ src: '/logos/coderabbit.png', alt: 'CodeRabbit' }],
    label: 'CodeRabbit reviews',
    description: 'CodeRabbit picks up the PR and runs an AI-powered code review — catching issues before humans even look.',
    glow: 'from-[#FF6B35]/15 to-[#FF6B35]/5',
  },
  {
    id: 'deploy',
    icon: 'deploy',
    label: 'CI/CD & E2E tests',
    description: 'Pipelines kick off. E2E tests pass. Preview deployed. Merged to main. Production updated.',
    glow: 'from-emerald-500/15 to-emerald-500/5',
  },
];

function StepIcon({ step }: { step: (typeof pipelineSteps)[number] }) {
  if (step.logos) {
    return (
      <div className="flex items-center gap-3">
        {step.logos.map((logo, i) => (
          <div
            key={logo.alt}
            className="relative w-14 h-14 xl:w-16 xl:h-16 rounded-xl overflow-hidden bg-warm-800/50 border border-warm-700/30 flex items-center justify-center group-hover:border-accent-500/30 transition-colors duration-300"
          >
            <Image src={logo.src} alt={logo.alt} width={40} height={40} className="object-contain" />
            {step.logos!.length > 1 && i === 0 && (
              <span className="absolute -right-3 top-1/2 -translate-y-1/2 text-xs text-warm-600 font-mono">/</span>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-14 h-14 xl:w-16 xl:h-16 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:border-emerald-400/40 transition-colors">
      <CheckCircle2 className="w-6 h-6 text-emerald-400" />
    </div>
  );
}

function Arrow({ className = '', reversed = false }: { className?: string; reversed?: boolean }) {
  return (
    <div className={`hidden lg:flex items-center justify-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, x: reversed ? 5 : -5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <ArrowRight className={`w-5 h-5 text-accent-500/40 ${reversed ? 'rotate-180' : ''}`} />
      </motion.div>
    </div>
  );
}

export default function AIWorkflow() {
  const { ref, isInView } = useInView(0.05);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.6], ['0%', '100%']);

  return (
    <section className="py-28 md:py-44 section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500/[0.02] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto relative" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 lg:mb-14"
        >
          <p className="text-accent-500 font-mono text-xs lg:text-sm mb-4 tracking-[0.2em] uppercase">
            How I Build
          </p>
          <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold text-warm-100 mb-6 leading-tight">
            Bug to fix in <span className="gradient-text">15 minutes</span>
          </h2>
          <p className="text-warm-500 max-w-2xl mx-auto leading-relaxed text-base lg:text-lg xl:text-xl">
            I don&apos;t just use AI tools — I orchestrate entire engineering workflows
            around them. Here&apos;s how a client-reported bug becomes a deployed fix
            before the coffee gets cold.
          </p>
        </motion.div>

        {/* Horizontal progress line (desktop) */}
        <div className="hidden lg:block relative h-1.5 max-w-6xl mx-auto mb-20 mt-16">
          <div className="absolute inset-0 bg-warm-800/30 rounded-full" />
          <motion.div
            style={{ width: lineWidth }}
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent-500 via-amber-400 to-emerald-400 rounded-full"
          />
        </div>

        {/* Desktop: 3-column rows with arrows */}
        <div className="hidden lg:block space-y-8">
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-4 xl:gap-5">
            {pipelineSteps.slice(0, 3).map((step, i) => (
              <>
                {i > 0 && <Arrow key={`arrow-${i}`} />}
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative"
                >
                  <div className={`absolute -inset-3 bg-gradient-to-br ${step.glow} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative card card-hover p-8 xl:p-10 h-full flex flex-col">
                    <div className="text-xs font-mono text-accent-500/50 tracking-widest mb-5">
                      STEP {String(i + 1).padStart(2, '0')}
                    </div>
                    <StepIcon step={step} />
                    <div className="text-sm xl:text-base font-semibold text-accent-400/90 uppercase tracking-wider mt-5 mb-3">
                      {step.label}
                    </div>
                    <p className="text-warm-500 text-sm xl:text-base leading-relaxed flex-1">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </>
            ))}
          </div>

          {/* Connector: right-aligned to show Step 3 → Step 4 */}
          <div className="flex justify-end" style={{ paddingRight: 'calc((100% - 2 * 20px) / 3 / 2 - 10px)' }}>
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex flex-col items-center gap-1 text-accent-500/30"
            >
              <div className="w-px h-5 bg-accent-500/20" />
              <ArrowRight className="w-5 h-5 rotate-90" />
              <div className="w-px h-5 bg-accent-500/20" />
            </motion.div>
          </div>

          {/* Row 2: reversed order (snake layout) — Step 4 on right, Step 6 on left */}
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-4 xl:gap-5">
            {[...pipelineSteps.slice(3)].reverse().map((step, i) => {
              const stepNum = 6 - i;
              return (
                <>
                  {i > 0 && <Arrow key={`arrow-b-${i}`} reversed />}
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative"
                  >
                    <div className={`absolute -inset-3 bg-gradient-to-br ${step.glow} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative card card-hover p-8 xl:p-10 h-full flex flex-col">
                      <div className="text-xs font-mono text-accent-500/50 tracking-widest mb-5">
                        STEP {String(stepNum).padStart(2, '0')}
                      </div>
                      <StepIcon step={step} />
                      <div className="text-sm xl:text-base font-semibold text-accent-400/90 uppercase tracking-wider mt-5 mb-3">
                        {step.label}
                      </div>
                      <p className="text-warm-500 text-sm xl:text-base leading-relaxed flex-1">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden space-y-6 mt-12">
          {pipelineSteps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-5 items-start group"
            >
              <div className="flex flex-col items-center flex-shrink-0">
                <StepIcon step={step} />
                {i < pipelineSteps.length - 1 && (
                  <div className="w-px h-8 bg-gradient-to-b from-accent-500/40 to-transparent mt-2" />
                )}
              </div>
              <div className="pt-1">
                <div className="text-[10px] font-mono text-accent-500/40 tracking-widest mb-1">
                  STEP {String(i + 1).padStart(2, '0')}
                </div>
                <div className="text-sm font-semibold text-accent-400/90 uppercase tracking-wider mb-1">
                  {step.label}
                </div>
                <p className="text-warm-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 lg:mt-24 text-center"
        >
          <div className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-accent-500/[0.07] border border-accent-500/15">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm lg:text-base text-warm-300">
              This is how code should be shipped in the{' '}
              <span className="text-accent-400 font-semibold">modern age of AI</span>
            </span>
          </div>
        </motion.div>

        {/* 10x CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-base lg:text-lg text-warm-400 hover:text-accent-400 transition-colors duration-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500 group-hover:scale-150 transition-transform" />
            <span>
              Ask me how <span className="text-warm-200 font-semibold">your team</span> can 10x engineering throughput — I&apos;ll design a workflow that fits your stack, your team, and your goals.
            </span>
            <span className="text-accent-500 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </motion.div>

        {/* Caseware reverse-engineering highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-16 lg:mt-20 relative group"
        >
          <div className="absolute -inset-3 bg-gradient-to-r from-accent-500/10 via-violet-500/5 to-accent-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative card card-hover p-8 md:p-10 xl:p-14 border-accent-500/10">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              <div className="p-4 xl:p-5 rounded-2xl bg-accent-500/[0.08] border border-accent-500/15 flex-shrink-0">
                <Code2 className="w-8 h-8 xl:w-10 xl:h-10 text-accent-400" />
              </div>
              <div>
                <div className="text-xs font-mono text-accent-500/60 tracking-widest mb-3">
                  BONUS — API REVERSE ENGINEERING
                </div>
                <h3 className="text-xl md:text-2xl xl:text-3xl font-bold text-warm-100 mb-4">
                  Reverse-engineered Caseware&apos;s undocumented API
                </h3>
                <p className="text-warm-400 leading-relaxed max-w-3xl text-base lg:text-lg mb-4">
                  When a leading accounting firm needed automated workflows with Caseware — a platform
                  with no public API documentation — I used AI to intercept, analyze, and map
                  undocumented API endpoints and authentication flows. Claude helped decode obfuscated
                  response structures, generate typed client SDKs, and build robust error-handling
                  layers in a fraction of the time it would have taken manually.
                </p>
                <p className="text-warm-400 leading-relaxed max-w-3xl text-base lg:text-lg">
                  The result: fully automated audit file management, workpaper generation, and data
                  extraction pipelines — what used to take hours of manual work now runs autonomously,
                  end to end.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
