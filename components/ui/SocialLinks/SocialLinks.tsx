import styles from './SocialLinks.module.scss';
import cn from 'classnames';
import { SocialLinksProps } from './SocialLinks.props';
import TelegramIcon from '@/icons/telegram.svg';
import GithubIcon from '@/icons/github.svg';
import LinkedInIcon from '@/icons/linkedin.svg';

const SocialLinks = ({ className, size = 's', ...props }: SocialLinksProps) => {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <a
        href='https://t.me/skaterpunisher'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Visit Telegram channel of Artem Zykov'
        className={cn(styles.icon, styles[size])}
      >
        <TelegramIcon alt='Telegram Icon' />
      </a>

      <a
        href='https://github.com/SkaterPunisher'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Visit GitHub profile of Artem Zykov'
        className={cn(styles.icon, styles[size])}
      >
        <GithubIcon alt='GitHub Icon' />
      </a>

      <a
        href='https://www.linkedin.com/in/art-zykov'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Visit LinkedIn profile of Artem Zykov'
        className={cn(styles.icon, styles.iconLinked, styles[size])}
      >
        <LinkedInIcon alt='LinkedIn Icon' />
      </a>
    </div>
  );
};

export default SocialLinks;
