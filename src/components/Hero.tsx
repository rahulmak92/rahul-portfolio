'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { personalInfo, stats } from '@/data/resume';
import { MapPin, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-500/[0.04] rounded-full blur-[120px] animate-float" />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-600/[0.03] rounded-full blur-[100px] animate-float"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full section-padding py-32 md:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-sm text-accent-400 mb-8"
            >
              <MapPin className="w-3.5 h-3.5" />
              {personalInfo.location}
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-warm-100 leading-[1.05] mb-5"
            >
              {personalInfo.name.split(' ')[0]}
              <br />
              <span className="gradient-text">{personalInfo.name.split(' ')[1]}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-warm-400 mb-3"
            >
              {personalInfo.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-warm-500 max-w-lg leading-relaxed mb-10"
            >
              Building AI-enabled solutions across cloud, analytics, and workflow
              automation — from architecture to production.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <a
                href="#contact"
                className="group px-7 py-3 rounded-full bg-accent-500 hover:bg-accent-400 text-warm-950 font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/20"
              >
                Get in Touch
                <span className="inline-block ml-1 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
              </a>
              <a
                href="#experience"
                className="px-7 py-3 rounded-full border border-warm-700 hover:border-warm-500 text-warm-300 hover:text-warm-100 font-medium text-sm transition-all duration-300"
              >
                View Experience
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap gap-8"
            >
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-warm-100">{s.value}</div>
                  <div className="text-xs text-warm-600 uppercase tracking-widest mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-accent-500/20 via-transparent to-amber-600/10 rounded-3xl blur-xl" />
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[480px] rounded-3xl overflow-hidden border border-warm-800/50">
                <Image
                  src="/profile.jpg"
                  alt="Rahul Makwana"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 320px, 384px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-950/60 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
          <ArrowDown className="w-4 h-4 text-warm-700" />
        </motion.div>
      </motion.div>
    </section>
  );
}
