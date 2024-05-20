import styles from './SocialLinks.module.scss';
import cn from 'classnames';
import { SocialLinksProps } from './SocialLinks.props';
import VKIcon from '@/icons/vk.svg';
import TelegramIcon from '@/icons/telegram.svg';
import InstagramIcon from '@/icons/instagram.svg';
import GithubIcon from '@/icons/github.svg';
import LinkedInIcon from '@/icons/linkedin.svg';

const SocialLinks = ({ className, ...props }: SocialLinksProps) => {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <a
        href='https://vk.com/art_zykov'
        target='_blank'
        className={styles.icon}
      >
        <VKIcon />
      </a>

      <a
        href='https://t.me/skaterpunisher'
        target='_blank'
        className={styles.icon}
      >
        <TelegramIcon />
      </a>

      <a
        href='https://www.instagram.com/art_zykov'
        target='_blank'
        className={styles.icon}
      >
        <InstagramIcon />
      </a>

      <a
        href='https://github.com/SkaterPunisher'
        target='_blank'
        className={styles.icon}
      >
        <GithubIcon />
      </a>

      <a
        href='https://www.linkedin.com/in/artem-zykov-651672256/'
        target='_blank'
        className={cn(styles.icon, styles.iconLinked)}
      >
        <LinkedInIcon />
      </a>
    </div>
  );
};

export default SocialLinks;
