import Link from 'next/link';
import styles from './page.module.css';

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <h1 className={styles.portfolio__title}>Choose a gallery</h1>
      <div className={styles.portfolio__items}>
        <Link
          href='/portfolio/illustrations'
          className={styles.portfolio__item}
        >
          <span className={styles.item__title}>Illustrations</span>
        </Link>
        <Link href='/portfolio/websites' className={styles.portfolio__item}>
          <span className={styles.item__title}>Websites</span>
        </Link>
        <Link href='/portfolio/applications' className={styles.portfolio__item}>
          <span className={styles.item__title}>Applications</span>
        </Link>
      </div>
    </div>
  );
};
export default Portfolio;
