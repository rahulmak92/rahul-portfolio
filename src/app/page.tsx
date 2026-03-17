import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import AIWorkflow from '@/components/AIWorkflow';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Teaching from '@/components/Teaching';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative noise">
      <Navbar />
      <Hero />
      <div className="divider" />
      <About />
      <div className="divider" />
      <div id="workflow">
        <AIWorkflow />
      </div>
      <div className="divider" />
      <Experience />
      <div className="divider" />
      <Skills />
      <div className="divider" />
      <Education />
      <div className="divider" />
      <Teaching />
      <div className="divider" />
      <Contact />
      <Footer />
    </main>
  );
}
