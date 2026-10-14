'use client';

import { useEffect, useState } from 'react';
import cn from 'classnames';
import Text from '@/components/ui/Text/Text';
import Tooltip from '@/components/ui/Tooltip/Tooltip';
import styles from './ClampedText.module.scss';
import { ClampedTextProps } from './ClampedText.props';

const ClampedText = ({ text, lines = 3, className }: ClampedTextProps) => {
  const [el, setEl] = useState<HTMLSpanElement | null>(null);
  const [isTruncated, setTruncated] = useState(false);

  useEffect(() => {
    if (!el) return;

    const check = () => setTruncated(el.scrollHeight > el.clientHeight + 1);

    check();
    const observer = new ResizeObserver(check);
    observer.observe(el);

    return () => observer.disconnect();
  }, [el, text]);

  return (
    <div className={className}>
      <Tooltip
        content={text}
        isDisabled={!isTruncated}
        triggerClassName={cn(styles.trigger, !isTruncated && styles.plain)}
      >
        <span
          ref={setEl}
          className={styles.clamp}
          style={{ WebkitLineClamp: lines, lineClamp: lines }}
        >
          <Text tag='span' size='s'>
            {text}
          </Text>
        </span>
      </Tooltip>
    </div>
  );
};

export default ClampedText;
