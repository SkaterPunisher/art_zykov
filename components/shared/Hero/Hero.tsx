import Heading from '@/components/ui/Heading/Heading';
import styles from './Hero.module.scss';
import cn from 'classnames';
import Text from '@/components/ui/Text/Text';
import Button from '@/components/ui/Button/Button';
import DrawingIcon from '@/icons/drawing.svg';

const Hero = () => {
  return (
    <section className={cn(styles.section, 'spacer-xxl')}>
      <Heading tag='h1' className={cn(styles.heading, 'spacer-m')}>
        Frontend Developer with clean code and Strong UI/UX Skills
      </Heading>

      <Text size='m' className={cn(styles.description, 'spacer-xxl')}>
        Using the latest technologies and best practices to craft adaptive web
        interfaces that perform seamlessly across all devices.
      </Text>

      <Button className={styles.button} size='m' placeholder='Get in Touch' />

      <DrawingIcon className={styles.icon} />
    </section>
  );
};

export default Hero;
