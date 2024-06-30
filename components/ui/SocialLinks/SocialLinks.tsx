import styles from './SocialLinks.module.scss';
import cn from 'classnames';
import { SocialLinksProps } from './SocialLinks.props';
import VKIcon from '@/icons/vk.svg';
import TelegramIcon from '@/icons/telegram.svg';
import InstagramIcon from '@/icons/instagram.svg';
import GithubIcon from '@/icons/github.svg';
import LinkedInIcon from '@/icons/linkedin.svg';

const SocialLinks = ({ className, size = 's', ...props }: SocialLinksProps) => {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <a
        href='https://vk.com/art_zykov'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Visit VK page of Artem Zykov'
        className={cn(styles.icon, styles[size])}
      >
        <VKIcon alt='VK Icon' />
      </a>

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
        href='https://www.instagram.com/art_zykov'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Visit Instagram profile of Artem Zykov'
        className={cn(styles.icon, styles[size])}
      >
        <InstagramIcon alt='Instagram Icon' />
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
        href='https://www.linkedin.com/in/artem-zykov-651672256/'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Visit LinkedIn profile of Artem Zykov'
        className={cn(styles.icon, styles[size])}
      >
        <LinkedInIcon alt='LinkedIn Icon' />
      </a>
    </div>
  );
};

export default SocialLinks;
