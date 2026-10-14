import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import styles from './Button.module.scss';
import Text from '@/components/ui/Text/Text';

const Button = ({
  children,
  placeholder,
  size = 's',
  variant = 'primary',
  className,
  ...props
}: ButtonProps) => {
  const classes = cn(styles.button, styles[size], styles[variant], className);

  const content = (
    <Text tag='span' className={styles.placeholder} size={size}>
      {placeholder}
    </Text>
  );

  if (props.href !== undefined) {
    return (
      <a
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
};

export default Button;
