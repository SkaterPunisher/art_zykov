'use client';

import {
  Button,
  OverlayArrow,
  Tooltip as AriaTooltip,
  TooltipTrigger,
} from 'react-aria-components';
import cn from 'classnames';
import styles from './Tooltip.module.scss';
import { TooltipProps } from './Tooltip.props';

const Tooltip = ({
  children,
  content,
  triggerClassName,
  isDisabled,
}: TooltipProps) => {
  if (isDisabled) {
    return (
      <span className={cn(styles.trigger, triggerClassName)}>{children}</span>
    );
  }

  return (
    <TooltipTrigger delay={300} closeDelay={100}>
      <Button className={cn(styles.trigger, triggerClassName)}>
        {children}
      </Button>

      <AriaTooltip className={styles.tooltip} offset={10}>
        <OverlayArrow className={styles.arrow}>
          <svg width={12} height={12} viewBox='0 0 12 12'>
            <path d='M0 0 L6 6 L12 0' />
          </svg>
        </OverlayArrow>
        {content}
      </AriaTooltip>
    </TooltipTrigger>
  );
};

export default Tooltip;
