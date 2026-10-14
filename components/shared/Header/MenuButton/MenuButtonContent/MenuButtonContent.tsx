import styles from './MenuButtonContent.module.scss';
import cn from 'classnames';
import Text from '@/components/ui/Text/Text';
import SocialLinks from '@/components/ui/SocialLinks/SocialLinks';
import { headerLinks } from '@/constants/links';
import { MenuButtonContentProps } from './MenuButtonContent.props';
import { useActiveSection } from '@/lib/useActiveSection';

const MenuButtonContent = ({
  setOpen,
  className,
  ...props
}: MenuButtonContentProps) => {
  const active = useActiveSection();

  return (
    <div className={cn(styles.content, className)} {...props}>
      <ul className={styles.list}>
        {headerLinks.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={cn(
                styles.item,
                active === item.href.slice(1) && styles.active
              )}
              aria-current={
                active === item.href.slice(1) ? 'location' : undefined
              }
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
