import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type TextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  size?: 'xs' | 's' | 'm' | 'l';
  color?: 'white' | 'black' | 'gray';
};
