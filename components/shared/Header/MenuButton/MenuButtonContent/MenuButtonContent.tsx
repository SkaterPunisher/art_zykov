import styles from './MenuButtonContent.module.scss';
import cn from 'classnames';
import Text from '@/components/ui/Text/Text';
import SocialLinks from '@/components/ui/SocialLinks/SocialLinks';
import { headerLinks } from '@/constants/links';
import { MenuButtonContentProps } from './MenuButtonContent.props';

const MenuButtonContent = ({
  setOpen,
  className,
  ...props
}: MenuButtonContentProps) => {
  return (
    <div className={cn(styles.content, className)} {...props}>
      <ul className={styles.list}>
        {headerLinks.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={styles.item}
              onClick={() => setOpen(false)}
            >
              <Text size='m'>{item.title}</Text>
            </a>
          </li>
        ))}
      </ul>

      <SocialLinks className={styles.links} />
    </div>
  );
};

export default MenuButtonContent;
