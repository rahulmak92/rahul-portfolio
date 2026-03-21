'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { personalInfo } from '@/data/resume';
import { hero, heroStats, proofAtGlance, siteLinks } from '@/content/portfolio';
import { MapPin, ArrowDown } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

const floatingLogos = [
  {
    name: 'Claude',
    color: '#d4a27f',
    className: '-right-4 top-[18%] lg:-right-8 lg:top-[15%]',
    duration: 7,
    delay: 0,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
      </svg>
    ),
  },
  {
    name: 'Cursor',
    color: '#00b4d8',
    className: '-right-2 bottom-[30%] lg:-right-6 lg:bottom-[28%]',
    duration: 9,
    delay: 1.5,
    icon: (
      <img src="/logos/cursor.png" alt="Cursor IDE" className="w-full h-full rounded-[3px] object-cover" />
    ),
  },
  {
    name: 'GitHub',
    color: '#e6edf3',
    className: '-left-4 top-[35%] lg:-left-8 lg:top-[30%]',
    duration: 8,
    delay: 2.5,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.09.682-.218.682-.483 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    name: 'Python',
    color: '#ffd43b',
    className: '-left-2 bottom-[18%] lg:-left-6 lg:bottom-[15%]',
    duration: 10,
    delay: 3.5,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.402 3.35-3.402h5.765s3.24.052 3.24-3.134V3.202S18.28 0 11.914 0zM8.708 1.85a1.06 1.06 0 110 2.12 1.06 1.06 0 010-2.12z" />
        <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.121s3.9.445 3.9-5.735c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.402-3.35 3.402H9.452s-3.24-.052-3.24 3.134v5.324S5.72 24 12.086 24zm3.206-1.85a1.06 1.06 0 110-2.12 1.06 1.06 0 010 2.12z" />
      </svg>
    ),
  },
  {
    name: 'Azure',
    color: '#0089d6',
    className: 'left-[15%] -top-6 lg:left-[20%] lg:-top-8',
    duration: 8.5,
    delay: 4.5,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.05 4.24L7.56 18.05l-2.78.52L13.05 4.24zM14.57 4.24H19.2l-7.47 15.07 4.57-.76 7.43-1.24L14.57 4.24z" />
      </svg>
    ),
  },
  {
    name: 'React',
    color: '#61dafb',
    className: 'right-[15%] -bottom-4 lg:right-[18%] lg:-bottom-6',
    duration: 7.5,
    delay: 5,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="2.2" />
        <path fill="none" stroke="currentColor" strokeWidth="1" d="M12 6.5c3.5 0 6.5 1.1 8 2.8.7.8 1 1.7 1 2.7s-.3 1.9-1 2.7c-1.5 1.7-4.5 2.8-8 2.8s-6.5-1.1-8-2.8C3.3 13.9 3 13 3 12s.3-1.9 1-2.7C5.5 7.6 8.5 6.5 12 6.5z" />
        <path fill="none" stroke="currentColor" strokeWidth="1" d="M8.3 8.3c1.7-3 3.8-5.2 5.7-6 .9-.4 1.8-.5 2.5-.1.8.4 1.2 1.2 1.4 2.3.3 2.2-.5 5.3-2.2 8.3-1.7 3-3.8 5.2-5.7 6-.9.4-1.8.5-2.5.1-.8-.4-1.2-1.2-1.4-2.3-.3-2.2.5-5.3 2.2-8.3z" />
        <path fill="none" stroke="currentColor" strokeWidth="1" d="M8.3 15.7c-1.7-3-2.5-6.1-2.2-8.3.2-1.1.6-1.9 1.4-2.3.7-.4 1.6-.3 2.5.1 1.9.8 4 3 5.7 6 1.7 3 2.5 6.1 2.2 8.3-.2 1.1-.6 1.9-1.4 2.3-.7.4-1.6.3-2.5-.1-1.9-.8-4-3-5.7-6z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-24 min-h-0">
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
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-warm-100 leading-[1.12] mb-5 text-balance max-w-xl"
            >
              {hero.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="text-warm-400 max-w-xl text-[15px] sm:text-base leading-relaxed mb-5"
            >
              {hero.subheading}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease }}
              className="flex items-center gap-3 text-sm text-warm-600 mb-8"
            >
              <MapPin className="w-4 h-4 text-accent-500/60 flex-shrink-0" />
              {personalInfo.location}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease }}
              className="flex flex-wrap gap-3 sm:gap-4 mb-10"
            >
              <a
                href="#contact"
                className="group px-8 py-3.5 lg:px-10 lg:py-4 rounded-full bg-accent-500 hover:bg-accent-400 text-warm-950 font-semibold text-sm lg:text-base transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/20"
              >
                {hero.ctaPrimary}
                <span className="inline-block ml-1 group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </a>
              <a
                href={siteLinks.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 lg:px-10 lg:py-4 rounded-full border border-warm-700 hover:border-warm-500 text-warm-300 hover:text-warm-100 font-medium text-sm lg:text-base transition-all duration-300"
              >
                {hero.ctaSecondary}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-wrap gap-x-10 gap-y-8 lg:gap-x-12 lg:gap-y-10"
            >
              {heroStats.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="group relative cursor-pointer max-w-[11rem]"
                >
                  <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-warm-100 group-hover:text-accent-400 transition-colors leading-tight tabular-nums">
                    {s.value}
                  </div>
                  <div className="text-[10px] lg:text-xs text-warm-500 uppercase tracking-wider mt-1.5 leading-snug">
                    {s.label}
                  </div>
                  {s.note && (
                    <div className="absolute bottom-full left-0 mb-3 w-64 max-w-[85vw] p-3 rounded-xl bg-warm-900 border border-warm-700/50 text-xs text-warm-400 leading-relaxed opacity-0 pointer-events-none group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 shadow-xl shadow-black/30 z-50">
                      {s.note}
                    </div>
                  )}
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease }}
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease }}
                className="absolute -top-3 -left-3 lg:-top-4 lg:-left-4 z-30 inline-flex items-center px-3 py-1.5 rounded-lg bg-warm-900/95 border border-warm-700/50 backdrop-blur-sm text-xs lg:text-sm text-warm-300 shadow-lg shadow-black/20"
              >
                {hero.photoBadge}
              </motion.div>

              {floatingLogos.map((logo, i) => (
                <motion.div
                  key={logo.name}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease }}
                  className={`absolute z-30 hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-warm-900/90 border border-warm-700/40 backdrop-blur-md shadow-lg shadow-black/25 text-[10px] lg:text-xs font-medium ${logo.className}`}
                  style={{ animation: `float ${logo.duration}s ease-in-out infinite`, animationDelay: `${logo.delay}s` }}
                >
                  <span className="w-4 h-4 lg:w-[18px] lg:h-[18px] flex-shrink-0" style={{ color: logo.color }}>
                    {logo.icon}
                  </span>
                  <span className="text-warm-400">{logo.name}</span>
                </motion.div>
              ))}

              <div className="absolute -inset-1 bg-gradient-to-br from-accent-500/15 via-transparent to-accent-600/10 rounded-3xl blur-xl" />
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="mt-16 lg:mt-20 grid md:grid-cols-[1fr_2fr] gap-8 border-t border-warm-800/40 pt-10"
        >
          <div className="space-y-5">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-warm-500 mb-2">
                Role
              </h3>
              <p className="text-warm-400 text-sm leading-relaxed">
                {proofAtGlance.role}
              </p>
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-warm-500 mb-2">
                Focus
              </h3>
              <p className="text-warm-400 text-sm leading-relaxed">
                {proofAtGlance.focus}
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-warm-800/60 bg-warm-900/30 p-6 md:p-8">
            <h3 className="text-xs font-mono uppercase tracking-widest text-warm-500 mb-4">
              Proof points
            </h3>
            <ul className="space-y-3">
              {proofAtGlance.proofPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-warm-400 text-sm leading-relaxed"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-500/60 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.a
          href="#work"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="text-warm-700 hover:text-warm-500"
        >
          <ArrowDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
