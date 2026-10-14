import { TextProps } from './Text.props';
import cn from 'classnames';
import styles from './Text.module.scss';

const Text = ({
  children,
  className,
  size = 's',
  color = 'white',
  tag = 'p',
  ...props
}: TextProps) => {
  const Component = tag;

  return (
    <Component
      className={cn(styles.text, styles[size], styles[color], className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
