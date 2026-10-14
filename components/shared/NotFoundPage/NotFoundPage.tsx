import Button from '@/components/ui/Button/Button';
import styles from './NotFoundPage.module.scss';
import Heading from '@/components/ui/Heading/Heading';
import Text from '@/components/ui/Text/Text';

const NotFoundPage = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <Heading tag='h3'>Page not found</Heading>
        <Text style={{ textAlign: 'center' }}>
          Make sure the URL of the requested page is correct.
        </Text>
        <Button href='/' size='s' placeholder='Back to home' />
      </div>
    </section>
  );
};

export default NotFoundPage;
