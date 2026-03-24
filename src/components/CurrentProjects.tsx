'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import { currentProjectsSection, currentProjects } from '@/content/portfolio';
import type { CurrentProject } from '@/content/portfolio';
import { FlaskConical, Radio, Pause } from 'lucide-react';

function StatusBadge({ status }: { status: CurrentProject['status'] }) {
  const config = {
    active: {
      icon: Radio,
      label: 'Active',
      classes: 'text-green-400 bg-green-500/[0.08] border-green-500/20',
      dot: 'bg-green-400',
    },
    experimenting: {
      icon: FlaskConical,
      label: 'Experimenting',
      classes: 'text-amber-400 bg-amber-500/[0.08] border-amber-500/20',
      dot: 'bg-amber-400',
    },
    paused: {
      icon: Pause,
      label: 'Paused',
      classes: 'text-warm-500 bg-warm-800/30 border-warm-700/30',
      dot: 'bg-warm-500',
    },
  };

  const c = config[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border ${c.classes}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot} animate-pulse`} />
      {c.label}
    </span>
  );
}

export default function CurrentProjects() {
  const { ref, isInView } = useInView(0.08);

  return (
    <section id="projects" className="py-24 md:py-32 section-padding" ref={ref}>
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-14 md:mb-16"
        >
          <p className="text-accent-500 font-mono text-xs mb-3 tracking-[0.2em] uppercase">
            {currentProjectsSection.kicker}
          </p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-warm-100 mb-4">
            {currentProjectsSection.headline}
          </h2>
          <p className="text-warm-400 text-base md:text-lg leading-relaxed max-w-2xl">
            {currentProjectsSection.intro}
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {currentProjects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="rounded-2xl border border-warm-800/50 bg-warm-900/20 overflow-hidden flex flex-col"
            >
              {/* Dashboard screenshots */}
              {project.images && project.images.length > 0 && (
                <div className="grid grid-cols-2 gap-px bg-warm-800/30">
                  {project.images.map((img, j) => (
                    <div key={j} className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover object-top hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 300px"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="p-6 md:p-8 flex flex-col flex-1">
                {/* Header: name + status */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-warm-100">
                      {project.name}
                    </h3>
                    <p className="text-sm text-accent-400/80 font-medium mt-0.5">
                      {project.tagline}
                    </p>
                  </div>
                  <StatusBadge status={project.status} />
                </div>

                {/* Description */}
                <p className="text-warm-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6 flex-1">
                  {project.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex gap-2.5 text-warm-400 text-sm leading-relaxed"
                    >
                      <span className="mt-2 h-1 w-1 rounded-full bg-accent-500/50 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-warm-800/40">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-warm-500 bg-warm-800/40 border border-warm-800/50 whitespace-nowrap"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
