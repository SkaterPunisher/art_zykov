import About from '@/components/shared/About/About';
import Contact from '@/components/shared/Contact/Contact';
import Hero from '@/components/shared/Hero/Hero';
import Projects from '@/components/shared/Projects/Projects';
import Technologies from '@/components/shared/Technologies/Technologies';
import Reveal from '@/components/ui/Reveal/Reveal';

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Technologies />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </main>
  );
}
