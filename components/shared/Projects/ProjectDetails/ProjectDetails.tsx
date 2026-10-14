'use client';

import { useState } from 'react';
import {
  Dialog,
  Heading as AriaHeading,
  Modal,
  ModalOverlay,
} from 'react-aria-components';
import styles from './ProjectDetails.module.scss';
import Button from '@/components/ui/Button/Button';
import Text from '@/components/ui/Text/Text';
import { ProjectDetailsProps } from './ProjectDetails.props';

const ProjectDetails = ({
  title,
  description,
  stack,
  href,
  button,
}: ProjectDetailsProps) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button
        size='s'
        variant='outline'
        placeholder='Details'
        onClick={() => setOpen(true)}
      />

      <ModalOverlay
        className={styles.overlay}
        isOpen={isOpen}
        onOpenChange={setOpen}
        isDismissable
      >
        <Modal className={styles.modal}>
          <Dialog className={styles.dialog}>
            <button
              className={styles.close}
              onClick={() => setOpen(false)}
              aria-label='Close'
            >
              ×
            </button>

            <AriaHeading slot='title' className={styles.title}>
              {title}
            </AriaHeading>

            <Text className='spacer-m' size='s'>
              {description}
            </Text>

            <ul className={styles.tags}>
              {stack.split(', ').map((item) => (
                <li key={item} className={styles.tag}>
                  <Text size='xs'>{item}</Text>
                </li>
              ))}
            </ul>

            <Button
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              size='s'
              placeholder={button}
            />
          </Dialog>
        </Modal>
      </ModalOverlay>
    </>
  );
};

export default ProjectDetails;
