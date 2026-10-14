import Heading from '@/components/ui/Heading/Heading';
import styles from './Technologies.module.scss';
import cn from 'classnames';
import { technologies } from '@/constants/technologies';
import Text from '@/components/ui/Text/Text';
import Reveal from '@/components/ui/Reveal/Reveal';

const Technologies = () => {
  return (
    <section id='skills' className={cn(styles.section, 'spacer-xxl')}>
      <Heading tag='h2' className='spacer-xl'>
        Skills
      </Heading>

      <ul className={styles.list}>
        {technologies.map((group, index) => (
          <Reveal
            tag='li'
            key={group.title}
            className={styles.group}
            from='top'
            delay={(index % 2) * 0.15}
          >
            <Text className={cn(styles.title, 'spacer-m')} size='m'>
              {group.title}
            </Text>

            <ul className={styles.tags}>
              {group.items.map((item) => (
                <li key={item} className={styles.tag}>
                  <Text size='xs'>{item}</Text>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>
    </section>
  );
};

export default Technologies;
