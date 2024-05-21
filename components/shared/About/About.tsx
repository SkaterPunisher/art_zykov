import Heading from '@/components/ui/Heading/Heading';
import styles from './About.module.scss';
import cn from 'classnames';
import Text from '@/components/ui/Text/Text';
import { about } from '@/constants/about';

const About = () => {
  return (
    <section id='about' className={cn(styles.section, 'spacer-xxl')}>
      <Heading tag='h2' className={cn(styles.heading, 'spacer-xl')}>
        About me
      </Heading>

      <ul className={styles.list}>
        {about.map((s, index) => (
          <li key={index} className={styles.item}>
            <Text className={styles.text} size='m'>
              {s.year}
            </Text>
            <div className={styles.dot} />
            <div
              className={cn(
                styles.line,
                index === about.length - 1 && styles.hidden
              )}
            />
            <Text className={styles.text} size='s'>
              {s.description}
            </Text>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;
