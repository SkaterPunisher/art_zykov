import Button from '@/components/ui/Button/Button';
import styles from './NotFoundPage.module.scss';
import Heading from '@/components/ui/Heading/Heading';
import Text from '@/components/ui/Text/Text';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <Heading tag='h3'>Такой страницы нет</Heading>
        <Text style={{ textAlign: 'center' }}>
          Убедитесь в правильности URL-адреса запрашиваемой страницы.
        </Text>
        <Link href='/'>
          <Button size='s' placeholder='На главную' />
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
