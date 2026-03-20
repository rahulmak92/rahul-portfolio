'use client';

import { motion } from 'framer-motion';
import { educationEntries } from '@/data/resume';
import { useInView } from '@/hooks/useInView';
import { GraduationCap, Award, FileText, ExternalLink } from 'lucide-react';

export default function Education() {
  const { ref, isInView } = useInView(0.12);

  return (
    <section id="education" className="py-24 md:py-32 section-padding" ref={ref}>
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-12"
        >
          <p className="text-accent-500 font-mono text-xs mb-3 tracking-[0.2em] uppercase">Education & certifications</p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-warm-100">
            Academic <span className="gradient-text">foundation</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {educationEntries.map((entry, i) => {
            if (entry.kind === 'degree') {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="rounded-2xl border border-warm-800/50 bg-warm-900/20 p-6 md:p-8 flex gap-4"
                >
                  <div className="p-3 rounded-xl bg-accent-500/[0.08] border border-accent-500/15 h-fit">
                    <GraduationCap className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-warm-100 leading-snug">{entry.degree}</h3>
                    <p className="text-accent-400/80 text-sm mt-1">{entry.school}</p>
                    <p className="text-xs text-warm-600 mt-2 font-mono">{entry.period}</p>
                    {entry.portfolio && (
                      <a
                        href={entry.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="AI/ML portfolio (opens in new tab)"
                        className="inline-flex items-center gap-1.5 text-xs text-accent-400/70 hover:text-accent-400 mt-3"
                      >
                        <ExternalLink className="w-3 h-3" />
                        AI/ML portfolio
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            }
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="rounded-2xl border border-warm-800/50 bg-warm-900/20 p-6 md:p-8 flex gap-4"
              >
                <div className="p-3 rounded-xl bg-blue-500/[0.08] border border-blue-500/15 h-fit">
                  <Award className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-warm-100 leading-snug">{entry.name}</h3>
                  <p className="text-blue-400/80 text-sm mt-1">{entry.issuer}</p>
                  <p className="text-xs text-warm-600 mt-2 font-mono">{entry.period}</p>
                  <p className="text-xs text-warm-600 mt-1">ID: {entry.credentialId}</p>
                  <a
                    href={entry.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View certificate (opens in new tab)"
                    className="inline-flex items-center gap-1.5 text-xs text-blue-400/80 hover:text-blue-400 mt-3"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    View certificate
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
