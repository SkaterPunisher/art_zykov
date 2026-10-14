import Heading from '@/components/ui/Heading/Heading';
import styles from './Hero.module.scss';
import cn from 'classnames';
import Text from '@/components/ui/Text/Text';
import Button from '@/components/ui/Button/Button';
import DrawingIcon from '@/icons/drawing.svg';

const stats = [
  { value: '7+ years', label: 'in commercial development' },
  { value: '6 engineers', label: 'in the team I lead' },
  { value: 'End-to-end', label: 'database, API, UI, bots, CI/CD' },
];

const Hero = () => {
  return (
    <section className={cn(styles.section, 'spacer-xxl')}>
      <Text size='s' color='gray' className={cn(styles.greeting, 'spacer-s')}>
        Hi, I&apos;m Artem Zykov
      </Text>

      <Heading tag='h1' className={cn(styles.heading, 'spacer-m')}>
        Lead Frontend / Fullstack Engineer
      </Heading>

      <Text size='m' className={cn(styles.subtitle, 'spacer-l')}>
        React · Next.js · NestJS · AI Agents & MCP
      </Text>

      <Text size='s' className={cn(styles.description, 'spacer-l')}>
        Building commercial products since 2019. I lead frontend teams and ship
        products end-to-end, and I bring AI into both the workflow (custom MCP
        server, Spec-Driven Development with AI agents) and the product (LLM
        features in production).
      </Text>

      <ul className={cn(styles.stats, 'spacer-xl')}>
        {stats.map((s) => (
          <li key={s.value} className={styles.stat}>
            <Text size='m'>{s.value}</Text>
            <Text size='xs' color='gray'>
              {s.label}
            </Text>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <a
          href='https://t.me/skaterpunisher'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.link}
        >
          <Button
            className={styles.button}
            size='m'
            placeholder='Get in Touch'
          />
        </a>

        <a href='/Zykov_Artem_CV.pdf' download className={styles.link}>
          <Button
            className={cn(styles.button, styles.outline)}
            size='m'
            placeholder='Download CV'
          />
        </a>
      </div>

      <DrawingIcon className={styles.icon} />
    </section>
  );
};

export default Hero;
