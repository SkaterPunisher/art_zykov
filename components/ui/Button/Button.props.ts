import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type BaseProps = {
  children?: React.ReactNode;
  size?: 's' | 'm';
  variant?: 'primary' | 'outline';
  placeholder: string;
};

export type ButtonProps = BaseProps &
  (
    | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
    | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  );
