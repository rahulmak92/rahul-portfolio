'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import { Shield, Zap, Target, BookOpen, Coffee, Users, MessageCircle, GraduationCap } from 'lucide-react';

const formats = [
  {
    icon: GraduationCap,
    title: 'Guest lecturer — Texas State University',
    body: 'Presented on software engineering, R&D product development, and calibration systems to CS students at my alma mater.',
  },
  {
    icon: Coffee,
    title: 'Coffee meetup groups',
    body: 'Informal sessions with local engineers — sharing what works, what doesn\'t, and how to think about AI tooling practically.',
  },
  {
    icon: Users,
    title: 'Weekend workshops',
    body: 'Hands-on sessions where engineers and students set up AI-assisted workflows, write real code, and see the difference guardrails make.',
  },
  {
    icon: MessageCircle,
    title: 'Free 1:1 consultations',
    body: 'One-on-one time with engineers or students who want help getting started — no charge, just paying it forward.',
  },
];

const topics = [
  {
    icon: Shield,
    title: 'Rules & guardrails',
    body: 'Setting up .cursorrules, CLAUDE.md, and system prompts that keep AI agents on track.',
  },
  {
    icon: Target,
    title: 'Controlled IDE environments',
    body: 'Configuring Cursor, Claude Code, and Windsurf for reproducible AI-assisted development.',
  },
  {
    icon: Zap,
    title: 'Automated pipelines',
    body: 'Workflows where AI agents create tickets, write code, open PRs — with human oversight at the right checkpoints.',
  },
  {
    icon: BookOpen,
    title: 'Accuracy over speed',
    body: 'Validating AI output, writing effective prompts, and building feedback loops that improve quality over time.',
  },
];

const lecturePhotos = [
  { src: '/lecture-1.jpg', alt: 'Rahul presenting on R&D and product development at Texas State University' },
  { src: '/lecture-2.jpg', alt: 'Rahul guest lecturing on calibration systems at Texas State University' },
];

export default function Teaching() {
  const { ref, isInView } = useInView(0.08);

  return (
    <section id="teaching" className="py-24 md:py-32 section-padding" ref={ref}>
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-14 md:mb-20"
        >
          <p className="text-accent-500 font-mono text-xs mb-3 tracking-[0.2em] uppercase">
            Mentoring
          </p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-warm-100 mb-4">
            Teaching engineers to{' '}
            <span className="gradient-text">build with AI</span>
          </h2>
          <p className="text-warm-400 text-base md:text-lg leading-relaxed max-w-2xl">
            I mentor engineers and students on adopting AI into real development workflows — through guest lectures, coffee meetups, weekend sessions, and free 1:1 consultations. Not as a side business. Just because it matters.
          </p>
        </motion.div>

        {/* Photo strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-16 grid grid-cols-2 gap-4 md:gap-6 max-w-3xl"
        >
          {lecturePhotos.map((photo, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] rounded-xl overflow-hidden border border-warm-800/50"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 50vw, 380px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-950/40 via-transparent to-transparent" />
            </div>
          ))}
          <p className="col-span-2 text-xs text-warm-600 mt-1">
            Guest lecturing at Texas State University — presenting on software engineering, R&D, and product development (2019)
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: How I do it */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xs font-mono uppercase tracking-widest text-warm-500 mb-6">
              How I do it
            </h3>
            <div className="space-y-4">
              {formats.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="flex gap-4 p-5 rounded-xl border border-warm-800/50 bg-warm-900/20"
                >
                  <div className="p-2.5 rounded-lg bg-accent-500/[0.08] border border-accent-500/15 h-fit flex-shrink-0">
                    <f.icon className="w-4 h-4 text-accent-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-warm-200 mb-1">
                      {f.title}
                    </h4>
                    <p className="text-warm-400 text-sm leading-relaxed">
                      {f.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: What I cover */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xs font-mono uppercase tracking-widest text-warm-500 mb-6">
              What I cover
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {topics.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.06 }}
                  className="card card-hover p-5 xl:p-6 group"
                >
                  <div className="p-2 rounded-lg bg-accent-500/[0.06] border border-accent-500/10 w-fit mb-3 group-hover:bg-accent-500/[0.12] transition-colors">
                    <t.icon className="w-4 h-4 text-accent-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-warm-200 mb-1.5">
                    {t.title}
                  </h4>
                  <p className="text-warm-500 text-sm leading-relaxed">
                    {t.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
