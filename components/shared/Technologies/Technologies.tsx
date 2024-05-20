import Heading from '@/components/ui/Heading/Heading';
import styles from './Technologies.module.scss';
import cn from 'classnames';
import { technologies } from '@/constants/technologies';
import Text from '@/components/ui/Text/Text';
import { defineLevel } from '@/lib/defineLevel';

const Technologies = () => {
  return (
    <section id='technologies' className={cn(styles.section, 'spacer-xxl')}>
      <Heading tag='h2' className='spacer-xl'>
        Technologies
      </Heading>

      <ul className={styles.list}>
        {technologies.map((t) => (
          <li key={t.title} className={cn(styles.item, 'spacer-l')}>
            <div className={cn(styles.header, 'spacer-xs')}>
              <Text className={styles.text} size='m'>
                {t.title}
              </Text>
              <Text className={styles.text} size='s'>
                {defineLevel(t.score)}
              </Text>
            </div>

            <div className={styles.progress_bar}>
              <div
                className={styles.progress}
                style={{ width: `${t.score}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Technologies;
