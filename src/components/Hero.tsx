'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { personalInfo } from '@/data/resume';
import { hero, heroStats, siteLinks } from '@/content/portfolio';
import { MapPin, ArrowDown, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden py-16 md:py-20 lg:py-24 min-h-0">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-500/[0.04] rounded-full blur-[120px] animate-float" />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-600/[0.03] rounded-full blur-[100px] animate-float"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[1400px] mx-auto w-full section-padding pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 items-center">
          <div className="order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-warm-100 leading-[1.12] mb-5 text-balance max-w-xl"
            >
              {hero.headline}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-warm-400 max-w-xl text-[15px] sm:text-base leading-relaxed mb-5 space-y-2"
            >
              {hero.subheadingLines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 text-sm text-warm-600 mb-8"
            >
              <MapPin className="w-4 h-4 text-accent-500/60 flex-shrink-0" />
              {personalInfo.location}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-3 sm:gap-4 mb-10"
            >
              <a
                href="#contact"
                className="group px-8 py-3.5 lg:px-10 lg:py-4 rounded-full bg-accent-500 hover:bg-accent-400 text-warm-950 font-semibold text-sm lg:text-base transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/20"
              >
                {hero.ctaPrimary}
                <span className="inline-block ml-1 group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
              <a
                href={siteLinks.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 lg:px-10 lg:py-4 rounded-full border border-warm-700 hover:border-warm-500 text-warm-300 hover:text-warm-100 font-medium text-sm lg:text-base transition-all duration-300"
              >
                {hero.ctaSecondary}
              </a>
              <a
                href={siteLinks.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 lg:px-10 lg:py-4 rounded-full border border-warm-700 hover:border-accent-500/40 text-warm-300 hover:text-warm-100 font-medium text-sm lg:text-base transition-all duration-300"
              >
                <Calendar className="w-4 h-4 text-accent-500/80" />
                {hero.ctaCalendly}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-wrap gap-x-10 gap-y-8 lg:gap-x-8 lg:gap-y-10"
            >
              {heroStats.map((s, i) => {
                const isSplit = 'split' in s;
                return (
                  <a
                    key={i}
                    href={s.href}
                    className={`group relative cursor-pointer ${isSplit ? 'max-w-[min(100%,20rem)]' : 'max-w-[11rem]'}`}
                  >
                    {isSplit ? (
                      <>
                        <div className="rounded-2xl border border-warm-800/70 bg-warm-950/50 px-4 py-3 sm:px-5 sm:py-4 flex items-stretch gap-0 sm:gap-1">
                          {s.split.map((m, j) => (
                            <div
                              key={j}
                              className={`flex-1 min-w-0 flex flex-col items-center justify-center text-center px-2 ${
                                j === 0 ? 'border-r border-warm-800/60 pr-3 sm:pr-4' : 'pl-3 sm:pl-4'
                              }`}
                            >
                              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-warm-50 tabular-nums tracking-tight group-hover:text-accent-400 transition-colors">
                                {m.value}
                              </span>
                              <span className="text-[10px] sm:text-[11px] text-warm-400 mt-1.5 leading-tight max-w-[6rem]">
                                {m.sub}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-warm-500 uppercase tracking-[0.12em] mt-2.5 font-medium">
                          {s.label}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-warm-100 group-hover:text-accent-400 transition-colors leading-tight tabular-nums">
                          {'value' in s ? s.value : ''}
                        </div>
                        <div className="text-[10px] lg:text-xs text-warm-500 uppercase tracking-wider mt-1.5 leading-snug">
                          {s.label}
                        </div>
                      </>
                    )}
                    {s.note && (
                      <div className="absolute bottom-full left-0 mb-3 w-64 max-w-[85vw] p-3 rounded-xl bg-warm-900 border border-warm-700/50 text-xs text-warm-400 leading-relaxed opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 shadow-xl shadow-black/30 z-50">
                        {s.note}
                      </div>
                    )}
                  </a>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -top-3 -left-3 lg:-top-4 lg:-left-4 z-30 inline-flex items-center px-3 py-1.5 rounded-lg bg-warm-900/95 border border-warm-700/50 backdrop-blur-sm text-xs lg:text-sm text-warm-300 shadow-lg shadow-black/20"
              >
                {hero.photoBadge}
              </motion.div>

              <div className="absolute -inset-1 bg-gradient-to-br from-accent-500/15 via-transparent to-[#D97757]/10 rounded-3xl blur-xl" />
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-[400px] lg:h-[500px] xl:w-[460px] xl:h-[560px] rounded-3xl overflow-hidden border border-warm-800/50">
                <Image
                  src="/profile.jpg"
                  alt="Rahul Makwana"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 320px, (max-width: 1280px) 400px, 460px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-950/50 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.a href="#proof" animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity }} className="text-warm-700 hover:text-warm-500">
          <ArrowDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
