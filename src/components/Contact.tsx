'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/data/resume';
import { contactCopy, siteLinks } from '@/content/portfolio';
import { useInView } from '@/hooks/useInView';
import { Mail, Linkedin, FileDown, Calendar, Phone } from 'lucide-react';

export default function Contact() {
  const { ref, isInView } = useInView(0.15);

  const links = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/[^\d+]/g, '')}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/rahulmakwana1',
      href: personalInfo.linkedin,
      external: true,
    },
    {
      icon: FileDown,
      label: 'Resume',
      value: 'PDF',
      href: siteLinks.resumePdf,
      external: true,
    },
    {
      icon: Calendar,
      label: 'Book time',
      value: 'Calendly',
      href: siteLinks.calendly,
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-36 section-padding border-t border-warm-800/40" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-10"
        >
          <p className="text-accent-500 font-mono text-xs mb-3 tracking-[0.2em] uppercase">{contactCopy.kicker}</p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-warm-100 mb-4">{contactCopy.title}</h2>
          <p className="text-warm-400 text-lg leading-relaxed mb-8">{contactCopy.intro}</p>
          <p className="text-warm-500 text-sm md:text-base leading-relaxed border-l-2 border-warm-800 pl-4">{contactCopy.targeting}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {links.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.external ? '_blank' : undefined}
              rel={c.external ? 'noopener noreferrer' : undefined}
              className="flex-1 flex items-center gap-4 rounded-xl border border-warm-800/60 bg-warm-900/30 px-5 py-4 hover:border-accent-500/25 hover:bg-warm-900/50 transition-colors group"
            >
              <div className="p-2.5 rounded-lg bg-accent-500/[0.08] border border-accent-500/10">
                <c.icon className="w-4 h-4 text-accent-400" />
              </div>
              <div className="text-left min-w-0">
                <div className="text-[10px] uppercase tracking-widest text-warm-600">{c.label}</div>
                <div className="text-warm-200 text-sm font-medium truncate group-hover:text-warm-100">{c.value}</div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
