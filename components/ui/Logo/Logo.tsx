import styles from './Logo.module.scss';
import LogoIcon from '@/icons/logo.svg';
import { LogoProps } from './Logo.props';
import Text from '@/components/ui/Text/Text';
import cn from 'classnames';

const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <div className={cn(styles.logoWrapper, className)} {...props}>
      <LogoIcon className={styles.logo} />
      <Text>art_zykov</Text>
    </div>
  );
};

export default Logo;
