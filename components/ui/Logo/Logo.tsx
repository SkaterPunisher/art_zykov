import styles from './Logo.module.scss';
import Image from 'next/image';
import { LogoProps } from './Logo.props';
import Text from '@/components/ui/Text/Text';
import cn from 'classnames';

const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <div className={cn(styles.logoWrapper, className)} {...props}>
      <div className={styles.logo}>
        <Image
          src='/images/avatar.jpg'
          alt='Artem Zykov'
          fill
          sizes='50px'
          priority
        />
      </div>
      <Text>art_zykov</Text>
    </div>
  );
};

export default Logo;
