'use client';

import styles from './Navigation.module.scss';
import cn from 'classnames';
import Text from '@/components/ui/Text/Text';
import { headerLinks } from '@/constants/links';
import { useActiveSection } from '@/lib/useActiveSection';

const Navigation = () => {
  const active = useActiveSection();

  return (
    <ul className={styles.list}>
      {headerLinks.map((link) => {
        const isActive = active === link.href.slice(1);

        return (
          <li key={link.href}>
            <a
              href={link.href}
              className={cn(styles.item, isActive && styles.active)}
              aria-current={isActive ? 'location' : undefined}
            >
              <Text>{link.title}</Text>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
