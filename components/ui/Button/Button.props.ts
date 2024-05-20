import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type ButtonProps = DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children?: React.ReactNode;
  size?: 's' | 'm';
  placeholder: string;
};
