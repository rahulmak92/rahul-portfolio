'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const storyBeats = [
  {
    year: '2016',
    title: 'The Foundation',
    body: 'Started as a software developer at Antylia Scientific, building calibration systems and IoT services. Cut operating costs by 43% and eliminated paper-based workflows — learned that the best engineering is invisible.',
  },
  {
    year: '2021',
    title: 'The AI Pivot',
    body: 'Promoted to Senior Developer and AI/ML Lead. Built recommendation engines, predictive models with TensorFlow and PyTorch, and Azure-based chatbot workflows. R&D became second nature — CNNs, ARIMA forecasting, event-driven cloud architecture.',
  },
  {
    year: '2023',
    title: 'Going Deeper',
    body: 'Completed a Post Grad program in AI & ML at UT Austin. Not for the credential — to close the gap between what I was building and what was possible. LLMs, vectorization, and transformer architectures became part of the daily toolkit.',
  },
  {
    year: '2025',
    title: 'Building the Future',
    body: 'Joined Tellen as Founding Fullstack AI Engineer. Built an AI-driven development pipeline from scratch — Slack to Linear to Cursor to Claude to GitHub to production. Led a team of 6, shipped AI products for financial reporting, and turned 15-minute bug fixes from a flex into a standard.',
  },
];

export default function About() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section id="about" className="py-28 md:py-44 section-padding" ref={ref}>
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-accent-500 font-mono text-xs mb-4 tracking-[0.2em] uppercase">
            The Story
          </p>
          <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold text-warm-100 leading-tight mb-6">
            From building software to
            <br />
            <span className="gradient-text">teaching machines to build it</span>
          </h2>
          <p className="text-warm-500 max-w-3xl leading-relaxed text-lg xl:text-xl">
            Nine years of shipping code, leading teams, and increasingly letting
            AI do the heavy lifting. Here&apos;s the arc.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-warm-800/40" />
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-4 md:left-8 top-0 w-px bg-gradient-to-b from-accent-500 via-accent-500/60 to-transparent"
          />

          <div className="space-y-16">
            {storyBeats.map((beat, i) => (
              <motion.div
                key={beat.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-14 md:pl-24 group"
              >
                {/* Dot */}
                <div className="absolute left-[11px] md:left-[27px] top-1.5 w-3 h-3 rounded-full border-2 border-accent-500/60 bg-warm-950 group-hover:bg-accent-500 group-hover:border-accent-400 transition-all duration-300" />

                {/* Year badge */}
                <div className="inline-block text-xs font-mono text-accent-500/80 tracking-widest px-3 py-1 rounded-full bg-accent-500/[0.06] border border-accent-500/10 mb-3">
                  {beat.year}
                </div>

                <h3 className="text-xl md:text-2xl xl:text-3xl font-bold text-warm-100 mb-3">
                  {beat.title}
                </h3>
                <p className="text-warm-400 leading-[1.8] max-w-3xl text-base lg:text-lg">
                  {beat.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
