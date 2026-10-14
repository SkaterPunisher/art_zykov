'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { RevealProps } from './Reveal.props';

const Reveal = ({
  children,
  className,
  tag = 'div',
  from = 'bottom',
  delay = 0,
}: RevealProps) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Component = tag;
    return <Component className={className}>{children}</Component>;
  }

  const animation = {
    className,
    initial: { opacity: 0, y: from === 'bottom' ? 32 : -32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: 'easeOut', delay },
  };

  if (tag === 'li') {
    return <motion.li {...animation}>{children}</motion.li>;
  }

  return <motion.div {...animation}>{children}</motion.div>;
};

export default Reveal;
