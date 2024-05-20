import { TextProps } from './Text.props';
import cn from 'classnames';
import styles from './Text.module.scss';

const Text = ({
  children,
  className,
  size = 's',
  color = 'white',
  ...props
}: TextProps) => {
  return (
    <p
      className={cn(styles.text, styles[size], styles[color], className)}
      {...props}
    >
      {children}
    </p>
  );
};

export default Text;
