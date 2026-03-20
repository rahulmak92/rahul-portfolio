import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SelectedWork from '@/components/SelectedWork';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Teaching from '@/components/Teaching';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative noise">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-accent-500 focus:text-warm-950 focus:font-semibold focus:text-sm"
      >
        Skip to content
      </a>
      <Navbar />
      <Hero />
      <div className="divider" />
      <SelectedWork />
      <div className="divider" />
      <Experience />
      <div className="divider" />
      <Skills />
      <div className="divider" />
      <Teaching />
      <div className="divider" />
      <Education />
      <div className="divider" />
      <Contact />
      <Footer />
    </main>
  );
}
