import Heading from '@/components/ui/Heading/Heading';
import styles from './Projects.module.scss';
import cn from 'classnames';
import { projects } from '@/constants/projects';
import Image from 'next/image';
import Text from '@/components/ui/Text/Text';
import Button from '@/components/ui/Button/Button';

const Projects = () => {
  return (
    <section id='projects' className={cn(styles.section, 'spacer-xxl')}>
      <Heading tag='h2' className={cn(styles.heading, 'spacer-xl')}>
        Projects
      </Heading>

      <ul className={styles.list}>
        {projects.map((p) => (
          <li key={p.title} className={styles.project}>
            <div className={styles.image}>
              <Image fill src={p.img} alt={p.title} priority />
            </div>

            <div className={cn(styles.title, 'spacer-l')}>
              <Text className={styles.text} size='m'>
                {p.title}
              </Text>
            </div>

            <Text className='spacer-m' size='s'>
              {p.description}
            </Text>

            <Text className='spacer-l' size='xs'>
              Stack: {p.stack}
            </Text>

            <a
              href={p.href}
              target='_blank'
              className={cn(styles.link)}
              rel='noopener noreferrer'
              aria-label={`Visit ${p.title}`}
            >
              <Button
                className={styles.button}
                size='s'
                placeholder={p.button}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
