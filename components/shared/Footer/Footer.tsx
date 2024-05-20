import Text from '@/components/ui/Text/Text';
import styles from './Footer.module.scss';
import SocialLinks from '@/components/ui/SocialLinks/SocialLinks';

const currentData = new Date();
const year = currentData.getFullYear();

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.email}>
        <Text size='s'>Email:</Text>
        <a href='mailto:skaterpunisher@gmail.com'>
          <Text size='s'>skaterpunisher@gmail.com</Text>
        </a>
      </div>

      <Text size='s' className='desktop'>
        {year}
      </Text>

      <SocialLinks />

      <Text size='s' className='mobile'>
        {year}
      </Text>
    </footer>
  );
};

export default Footer;
