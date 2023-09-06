import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/components/Button/Button';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact__title}>Let's Keep in Touch</div>
      <div className={styles.contact__content}>
        <div className={styles.desc__img}>
          <Image src='/contact.png' alt='' fill={true} className={styles.img} />
        </div>
        <form className={styles.desc__form}>
          <input
            type='text'
            placeholder='name'
            className={styles.form__input}
          />
          <input
            type='text'
            placeholder='email'
            className={styles.form__input}
          />
          <textarea
            className={styles.form__textarea}
            placeholder='message'
            cols='30'
            rows='10'
          ></textarea>
          <Button url='#' text='Send' />
        </form>
      </div>
    </div>
  );
};
export default Contact;
