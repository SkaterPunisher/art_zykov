import Logo from '@/components/ui/Logo/Logo';
import styles from './Header.module.scss';
import SocialLinks from '@/components/ui/SocialLinks/SocialLinks';
import Navigation from './Navigation/Navigation';
import MenuButton from './MenuButton/MenuButton';
import cn from 'classnames';

const Header = () => {
  return (
    <header className={cn(styles.header, 'spacer-xl')}>
      <Logo className={styles.logo} />

      <nav className={styles.navigation}>
        <Navigation />
      </nav>

      <MenuButton className={styles.menuButton} />

      <SocialLinks className={styles.socialLinks} />
    </header>
  );
};

export default Header;
