'use client';

import { useState } from 'react';
import Heading from '@/components/ui/Heading/Heading';
import styles from './Contact.module.scss';
import cn from 'classnames';
import Text from '@/components/ui/Text/Text';
import Button from '@/components/ui/Button/Button';

const EMAIL = 'skaterpunisher@gmail.com';

const contacts = [
  {
    label: 'Telegram',
    value: '@skaterpunisher',
    href: 'https://t.me/skaterpunisher',
  },
  {
    label: 'LinkedIn',
    value: 'art-zykov',
    href: 'https://www.linkedin.com/in/art-zykov',
  },
  {
    label: 'GitHub',
    value: 'SkaterPunisher',
    href: 'https://github.com/SkaterPunisher',
  },
];

const Contact = () => {
  const [isCopied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id='contact' className={cn(styles.section, 'spacer-xxl')}>
      <Heading tag='h2' className='spacer-m'>
        Contact
      </Heading>

      <Text
        size='s'
        color='gray'
        className={cn(styles.description, 'spacer-xl')}
      >
        Have a role or a project in mind? Let&apos;s talk.
      </Text>

      <ul className={cn(styles.list, 'spacer-xl')}>
        <li className={styles.item}>
          <Text size='xs' color='gray' className={styles.label}>
            Email
          </Text>
          <div className={styles.row}>
            <a href={`mailto:${EMAIL}`} className={styles.link}>
              <Text tag='span' size='s'>
                {EMAIL}
              </Text>
            </a>
            <button className={styles.copy} onClick={copyEmail}>
              <Text tag='span' size='xs' aria-live='polite'>
                {isCopied ? 'Copied' : 'Copy'}
              </Text>
            </button>
          </div>
        </li>

        {contacts.map((c) => (
          <li key={c.label} className={styles.item}>
            <Text size='xs' color='gray' className={styles.label}>
              {c.label}
            </Text>
            <a
              href={c.href}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
            >
              <Text tag='span' size='s'>
                {c.value}
              </Text>
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <Button
          href='https://t.me/skaterpunisher'
          target='_blank'
          rel='noopener noreferrer'
          size='m'
          placeholder='Write in Telegram'
        />

        <Button
          href='/Zykov_Artem_CV.pdf'
          download
          size='m'
          variant='outline'
          placeholder='Download CV'
        />
      </div>
    </section>
  );
};

export default Contact;
