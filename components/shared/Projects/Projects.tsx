import Heading from '@/components/ui/Heading/Heading';
import styles from './Projects.module.scss';
import cn from 'classnames';
import { projects } from '@/constants/projects';
import Image from 'next/image';
import Text from '@/components/ui/Text/Text';
import Button from '@/components/ui/Button/Button';
import ProjectDetails from './ProjectDetails/ProjectDetails';
import ClampedText from './ClampedText/ClampedText';
import Tooltip from '@/components/ui/Tooltip/Tooltip';
import Reveal from '@/components/ui/Reveal/Reveal';

const VISIBLE_TAGS = 6;

const Projects = () => {
  return (
    <section id='projects' className={cn(styles.section, 'spacer-xxl')}>
      <Heading tag='h2' className={cn(styles.heading, 'spacer-xl')}>
        Projects
      </Heading>

      <ul className={styles.list}>
        {projects.map((p, index) => {
          const tags = p.stack.split(', ');

          return (
            <Reveal
              tag='li'
              key={p.title}
              className={styles.project}
              delay={(index % 2) * 0.15}
            >
              <div className={cn(styles.image, !p.img && styles.placeholder)}>
                {p.img ? (
                  <Image
                    fill
                    src={p.img}
                    alt={p.title}
                    sizes='(min-width: 540px) 400px, 100vw'
                    priority={index === 0}
                  />
                ) : (
                  <Text size='m'>NDA</Text>
                )}
              </div>

              <div className={cn(styles.title, 'spacer-l')}>
                <Text className={styles.text} size='m'>
                  {p.title}
                </Text>
              </div>

              <ClampedText
                className='spacer-m'
                text={p.description}
                lines={6}
              />

              <ul className={cn(styles.tags, 'spacer-l')}>
                {tags.slice(0, VISIBLE_TAGS).map((tag) => (
                  <li key={tag} className={styles.tag}>
                    <Text size='xs'>{tag}</Text>
                  </li>
                ))}
                {tags.length > VISIBLE_TAGS && (
                  <li>
                    <Tooltip
                      content={tags.slice(VISIBLE_TAGS).join(', ')}
                      triggerClassName={styles.tag}
                    >
                      <Text tag='span' size='xs' color='gray'>
                        +{tags.length - VISIBLE_TAGS}
                      </Text>
                    </Tooltip>
                  </li>
                )}
              </ul>

              <div className={styles.actions}>
                <ProjectDetails
                  title={p.title}
                  description={p.description}
                  stack={p.stack}
                  href={p.href}
                  button={p.button}
                />

                <Button
                  href={p.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`${p.button}: ${p.title}`}
                  size='s'
                  placeholder={p.button}
                />
              </div>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
