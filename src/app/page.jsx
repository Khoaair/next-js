import Image from 'next/image';
import styles from './page.module.css';
import hero from '/public/hero.png';
import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <h1 className={styles.home__title}>
          Better design for your digital products.
        </h1>
        <p className={styles.home__desc}>
          Turning your Idea into Reality. We bring together the teams from
          global tech industry
        </p>
        <Button text='See Our Works' url='/portfolio' />
      </div>
      <div className={styles.home__container}>
        <Image src={hero} alt='Hero img' className={styles.home__img} />
      </div>
    </div>
  );
}
