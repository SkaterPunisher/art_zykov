import About from '@/components/shared/About/About';
import Hero from '@/components/shared/Hero/Hero';
import Projects from '@/components/shared/Projects/Projects';
import Technologies from '@/components/shared/Technologies/Technologies';

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Technologies />
      <About />
    </main>
  );
}
