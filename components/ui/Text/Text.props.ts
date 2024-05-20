import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type TextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  size?: 's' | 'm' | 'l';
  color?: 'white' | 'black' | 'gray';
};
