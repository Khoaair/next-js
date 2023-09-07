import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

const Blog = () => {
  return (
    <div className={styles.blog}>
      <Link href='/blog/testId' className={styles.blog__container}>
        <div className={styles.image__container}>
          <Image
            src='https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className={styles.image}
            fill={true}
          />
        </div>
        <div className={styles.text__container}>
          <h1 className={styles.text__title}>Text</h1>
          <p className={styles.text__desc}>desc</p>
        </div>
      </Link>
      <Link href='/blog/testId' className={styles.blog__container}>
        <div className={styles.image__container}>
          <Image
            src='https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className={styles.image}
            fill={true}
          />
        </div>
        <div className={styles.text__container}>
          <h1 className={styles.text__title}>Text</h1>
          <p className={styles.text__desc}>desc</p>
        </div>
      </Link>
      <Link href='/blog/testId' className={styles.blog__container}>
        <div className={styles.image__container}>
          <Image
            src='https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className={styles.image}
            fill={true}
          />
        </div>
        <div className={styles.text__container}>
          <h1 className={styles.text__title}>Text</h1>
          <p className={styles.text__desc}>desc</p>
        </div>
      </Link>
    </div>
  );
};
export default Blog;
