import Heading from '@/components/ui/Heading/Heading';
import styles from './About.module.scss';
import cn from 'classnames';
import Text from '@/components/ui/Text/Text';
import { education, experience } from '@/constants/about';

const About = () => {
  return (
    <section id='experience' className={cn(styles.section, 'spacer-xxl')}>
      <Heading tag='h2' className={cn(styles.heading, 'spacer-xl')}>
        Experience
      </Heading>

      <ul className={cn(styles.list, 'spacer-xxl')}>
        {experience.map((e) => (
          <li key={`${e.company}-${e.period}`} className={styles.item}>
            <div className={styles.dot} />

            <Text className={cn(styles.meta, 'spacer-s')} size='xs' color='gray'>
              {e.period} · {e.location}
            </Text>

            <Text className='spacer-xs' size='m'>
              {e.role}
            </Text>

            <Text className={cn(styles.company, 'spacer-m')} size='s'>
              {e.company}
            </Text>

            {e.summary && (
              <Text className='spacer-m' size='s' color='gray'>
                {e.summary}
              </Text>
            )}

            <ul className={cn(styles.achievements, 'spacer-m')}>
              {e.achievements.map((a) => (
                <li key={a}>
                  <Text size='s'>{a}</Text>
                </li>
              ))}
            </ul>

            {e.stack && (
              <Text size='xs' color='gray'>
                Stack: {e.stack}
              </Text>
            )}
          </li>
        ))}
      </ul>

      <Heading tag='h2' className={cn(styles.heading, 'spacer-xl')}>
        Education
      </Heading>

      <ul className={styles.list}>
        {education.map((e) => (
          <li key={e.degree} className={styles.item}>
            <div className={styles.dot} />

            <Text className={cn(styles.meta, 'spacer-s')} size='xs' color='gray'>
              {e.period}
            </Text>

            <Text className='spacer-xs' size='m'>
              {e.degree}
            </Text>

            <Text className={styles.company} size='s'>
              {e.place}
            </Text>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;
