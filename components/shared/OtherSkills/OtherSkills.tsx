import Heading from '@/components/ui/Heading/Heading';
import styles from './OtherSkills.module.scss';
import cn from 'classnames';
import { technologies } from '@/constants/technologies';
import Text from '@/components/ui/Text/Text';
import { defineLevel } from '@/lib/defineLevel';
import { otherSkills } from '@/constants/otherSkills';

const OtherSkills = () => {
  return (
    <section id='technologies' className={cn(styles.section, 'spacer-xxl')}>
      <Heading tag='h2' className={cn(styles.heading, 'spacer-xl')}>
        Additional technologies and skills
      </Heading>

      <ul className={styles.list}>
        {otherSkills.map((s) => (
          <li key={s} className={styles.item}>
            <div className={styles.dot} />
            <Text className={styles.text} size='m'>
              {s}
            </Text>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OtherSkills;
