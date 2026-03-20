'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Shield, Zap, Target, BookOpen, Users } from 'lucide-react';

const teachings = [
  {
    icon: Shield,
    title: 'Rules & Guardrails',
    body: 'How to set up .cursorrules, CLAUDE.md, and system prompts that keep AI agents on track — no hallucinations, no fluff.',
  },
  {
    icon: Target,
    title: 'Controlled IDE Environments',
    body: 'Configuring Cursor, Claude Code, and Windsurf for deterministic, reproducible AI-assisted development.',
  },
  {
    icon: Zap,
    title: 'Fully Automated Pipelines',
    body: 'Building end-to-end workflows where AI agents create tickets, write code, open PRs, and pass CI — with human oversight at the right checkpoints.',
  },
  {
    icon: BookOpen,
    title: 'Accuracy Over Speed',
    body: 'Teaching engineers to validate AI output, write effective prompts, and build feedback loops that improve quality over time.',
  },
];

export default function Teaching() {
  return (
    <section id="teaching" className="py-28 md:py-40 section-padding">
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-400 mb-6">
              <Users className="w-3.5 h-3.5" />
              Beyond the Day Job
            </div>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-warm-100 leading-tight mb-6">
              Teaching engineers to
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                build with AI, not fight it
              </span>
            </h2>

            <div className="space-y-4 text-warm-400 leading-relaxed text-base lg:text-lg">
              <p>
                As a hobby, I mentor emerging engineers on adopting AI into their daily
                development — not as a novelty, but as a reliable, controlled part of
                their workflow.
              </p>
              <p>
                Most developers either blindly trust AI output or avoid it entirely.
                I teach the middle path: how to set up rules, constraints, and validation
                layers that let you move fast without sacrificing quality.
              </p>
              <p className="text-warm-500">
                The goal isn&apos;t to replace engineering judgment — it&apos;s to amplify it.
                When your IDE environment is properly configured, AI stops hallucinating
                and starts shipping.
              </p>
            </div>

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-warm-900/80 border border-warm-800/60">
                  <GraduationCap className="w-5 h-5 text-accent-400" />
                </div>
                <div>
                  <div className="text-sm lg:text-base font-semibold text-warm-200">
                    Accuracy, efficiency, quality
                  </div>
                  <div className="text-xs lg:text-sm text-warm-600">
                    The three pillars of AI-assisted development done right
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="group flex items-start gap-3 p-4 xl:p-5 rounded-xl border border-warm-800/60 bg-warm-900/30 hover:border-accent-500/20 transition-all duration-300"
              >
                <div>
                  <div className="text-sm lg:text-base font-semibold text-warm-200 group-hover:text-warm-100 transition-colors">
                    Teams struggling with unreliable AI-assisted output?
                  </div>
                  <div className="text-xs lg:text-sm text-warm-500 mt-1">
                    Reach out if you want a practical review of guardrails, review habits, and delivery discipline.
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid sm:grid-cols-2 gap-3"
          >
            {teachings.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="card card-hover p-6 xl:p-8 group"
              >
                <div className="p-2.5 rounded-lg bg-emerald-500/[0.08] border border-emerald-500/15 w-fit mb-3 group-hover:bg-emerald-500/15 transition-colors">
                  <t.icon className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="text-sm lg:text-base font-semibold text-warm-200 mb-2">
                  {t.title}
                </h3>
                <p className="text-warm-500 text-sm lg:text-base leading-relaxed">
                  {t.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
