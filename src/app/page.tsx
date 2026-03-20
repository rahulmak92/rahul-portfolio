import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProofAtGlance from '@/components/ProofAtGlance';
import SelectedWork from '@/components/SelectedWork';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import HowIShip from '@/components/HowIShip';
import Story from '@/components/Story';
import Teaching from '@/components/Teaching';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative noise">
      <Navbar />
      <Hero />
      <div className="divider" />
      <ProofAtGlance />
      <div className="divider" />
      <SelectedWork />
      <div className="divider" />
      <Experience />
      <div className="divider" />
      <Skills />
      <div className="divider" />
      <HowIShip />
      <div className="divider" />
      <Story />
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
