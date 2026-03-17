'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/data/resume';
import { useInView } from '@/hooks/useInView';
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const { ref, isInView } = useInView(0.2);

  const contactLinks = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/[^\d+]/g, '')}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: '#' },
    { icon: Linkedin, label: 'LinkedIn', value: 'rahulmakwana1', href: personalInfo.linkedin },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 section-padding" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent-500 font-mono text-xs mb-4 tracking-[0.2em] uppercase">
            Contact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-warm-100 mb-5">
            Let&apos;s <span className="gradient-text">connect</span>
          </h2>
          <p className="text-warm-500 text-base mb-14 max-w-md mx-auto leading-relaxed">
            Interested in working together or want to chat about AI,
            engineering, or building products?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid sm:grid-cols-2 gap-3 mb-12"
        >
          {contactLinks.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="card card-hover p-5 flex items-center gap-4 group text-left"
            >
              <div className="p-2.5 rounded-xl bg-accent-500/[0.08] border border-accent-500/15 group-hover:bg-accent-500/15 transition-colors">
                <c.icon className="w-4 h-4 text-accent-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-warm-600 uppercase tracking-[0.2em]">{c.label}</div>
                <div className="text-warm-300 group-hover:text-warm-100 transition-colors truncate text-sm mt-0.5">
                  {c.value}
                </div>
              </div>
              {c.href !== '#' && (
                <ArrowUpRight className="w-3.5 h-3.5 text-warm-700 group-hover:text-accent-400 transition-colors" />
              )}
            </a>
          ))}
        </motion.div>

        <motion.a
          href={`mailto:${personalInfo.email}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-accent-500 hover:bg-accent-400 text-warm-950 font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/20"
        >
          <Mail className="w-4 h-4" />
          Say Hello
        </motion.a>
      </div>
    </section>
  );
}
