'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { personalInfo, stats } from '@/data/resume';
import { MapPin, ArrowDown, Sparkles } from 'lucide-react';

const floatingLogos = [
  { src: '/logos/claude.png', alt: 'Claude', size: 44, top: '15%', right: '8%', delay: 0 },
  { src: '/logos/cursor.png', alt: 'Cursor', size: 40, top: '70%', right: '5%', delay: 1.5 },
  { src: '/logos/github.png', alt: 'GitHub', size: 36, top: '45%', right: '2%', delay: 3 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-500/[0.04] rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-600/[0.03] rounded-full blur-[100px] animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-[#D97757]/[0.03] rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[1400px] mx-auto w-full section-padding py-32 md:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 items-center">
          <div className="order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight text-warm-100 leading-[1.05] mb-6 lg:mb-8"
            >
              I build with AI.
              <br />
              <span className="gradient-text">Not around it.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-warm-400 max-w-xl text-base lg:text-lg xl:text-xl leading-relaxed mb-5"
            >
              Senior engineer who turned AI from a buzzword into a shipping pipeline.
              Claude, Cursor, and GitHub Actions aren&apos;t just tools in my stack —
              they&apos;re teammates.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 text-sm lg:text-base text-warm-600 mb-10 lg:mb-12"
            >
              <MapPin className="w-4 h-4 text-accent-500/60" />
              {personalInfo.location}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4 mb-14 lg:mb-16"
            >
              <a
                href="#contact"
                className="group px-8 py-3.5 lg:px-10 lg:py-4 rounded-full bg-accent-500 hover:bg-accent-400 text-warm-950 font-semibold text-sm lg:text-base transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/20"
              >
                Let&apos;s Talk
                <span className="inline-block ml-1 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
              </a>
              <a
                href="/RahulMakwana_Resume.pdf"
                target="_blank"
                className="px-8 py-3.5 lg:px-10 lg:py-4 rounded-full border border-warm-700 hover:border-warm-500 text-warm-300 hover:text-warm-100 font-medium text-sm lg:text-base transition-all duration-300"
              >
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-wrap gap-10 lg:gap-14"
            >
              {stats.map((s, i) => (
                <a
                  key={i}
                  href={(s as any).href || '#'}
                  className="group relative cursor-pointer"
                >
                  <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-warm-100 group-hover:text-accent-400 transition-colors">{s.value}</div>
                  <div className="text-xs lg:text-sm text-warm-600 uppercase tracking-widest mt-1">{s.label}</div>
                  {(s as any).note && (
                    <div className="absolute bottom-full left-0 mb-3 w-64 p-3 rounded-xl bg-warm-900 border border-warm-700/50 text-xs text-warm-400 leading-relaxed opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 shadow-xl shadow-black/30 z-50">
                      {(s as any).note}
                    </div>
                  )}
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              {floatingLogos.map((logo) => (
                <motion.div
                  key={logo.alt}
                  className="absolute z-20 hidden lg:block"
                  style={{ top: logo.top, right: logo.right }}
                  animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
                  transition={{ duration: 5, delay: logo.delay, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="p-3 rounded-xl bg-warm-900/80 border border-warm-700/40 backdrop-blur-sm shadow-lg shadow-black/20">
                    <Image src={logo.src} alt={logo.alt} width={logo.size} height={logo.size} className="object-contain" />
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -top-4 -left-4 lg:-top-5 lg:-left-5 z-30 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warm-900/90 border border-accent-500/20 backdrop-blur-sm text-sm lg:text-base text-accent-400 shadow-lg shadow-black/20"
              >
                <Sparkles className="w-4 h-4" />
                AI-First Engineer
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </motion.div>

              <div className="absolute -inset-1 bg-gradient-to-br from-accent-500/20 via-transparent to-[#D97757]/10 rounded-3xl blur-xl" />
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-[420px] lg:h-[520px] xl:w-[480px] xl:h-[580px] rounded-3xl overflow-hidden border border-warm-800/50">
                <Image
                  src="/profile.jpg"
                  alt="Rahul Makwana"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 320px, (max-width: 1280px) 420px, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-950/60 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
          <ArrowDown className="w-5 h-5 text-warm-700" />
        </motion.div>
      </motion.div>
    </section>
  );
}
