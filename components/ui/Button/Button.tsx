import { ButtonProps } from './Button.props';
import cn from 'classnames';
import styles from './Button.module.scss';
import Text from '@/components/ui/Text/Text';

const Button = ({
  children,
  placeholder,
  size = 's',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button className={cn(styles.button, styles[size], className)} {...props}>
      <Text className={styles.placeholder} size={size}>
        {placeholder}
      </Text>
    </button>
  );
};

export default Button;
