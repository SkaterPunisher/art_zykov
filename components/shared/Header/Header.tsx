import Logo from '@/components/ui/Logo/Logo';
import styles from './Header.module.scss';
import SocialLinks from '@/components/ui/SocialLinks/SocialLinks';
import { headerLinks } from '@/constants/links';
import Text from '@/components/ui/Text/Text';
import MenuButton from './MenuButton/MenuButton';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />

      <nav className={styles.navigation}>
        <ul className={styles.list}>
          {headerLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.item}>
                <Text>{link.title}</Text>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <MenuButton className={styles.menuButton} />

      <SocialLinks className={styles.socialLinks} />
    </header>
  );
};

export default Header;
