import Hero from '@/components/shared/Hero/Hero';
import OtherSkills from '@/components/shared/OtherSkills/OtherSkills';
import Projects from '@/components/shared/Projects/Projects';
import Technologies from '@/components/shared/Technologies/Technologies';

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Technologies />
      <OtherSkills />
    </main>
  );
}
