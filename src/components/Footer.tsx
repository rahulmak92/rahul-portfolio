import { personalInfo } from '@/data/resume';

export default function Footer() {
  return (
    <footer className="py-8 section-padding">
      <div className="divider mb-8" />
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-warm-700">
          &copy; {new Date().getFullYear()} {personalInfo.name}
        </p>
        <div className="flex gap-6">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in new tab)"
            className="text-xs text-warm-700 hover:text-accent-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-xs text-warm-700 hover:text-accent-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
