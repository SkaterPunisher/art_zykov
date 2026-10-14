import { useEffect, useState } from 'react';
import { headerLinks } from '@/constants/links';

const sectionIds = headerLinks.map((link) => link.href.slice(1));

export const useActiveSection = (): string | null => {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.4;
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      let current: string | null = null;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) {
          current = id;
        }
      }

      setActive(isBottom ? sectionIds[sectionIds.length - 1] : current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return active;
};
