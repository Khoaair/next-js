import Button from '@/components/Button/Button';
import styles from './page.module.css';
import Image from 'next/image';

const Category = ({ params }) => {
  return (
    <div className={styles.category}>
      <h1 className={styles.category__heading}>{params.category}</h1>
      <div className={styles.category__item}>
        <div className={styles.category__content}>
          <h1 className={styles.content__title}>Text</h1>
          <p className={styles.content__desc}>Desc</p>
          <Button text='See More' url='#' />
        </div>
        <div className={styles.category__image}>
          <Image
            src='https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.category__item}>
        <div className={styles.category__content}>
          <h1 className={styles.content__title}>Text</h1>
          <p className={styles.content__desc}>Desc</p>
          <Button text='See More' url='#' />
        </div>
        <div className={styles.category__image}>
          <Image
            src='https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.category__item}>
        <div className={styles.category__content}>
          <h1 className={styles.content__title}>Text</h1>
          <p className={styles.content__desc}>Desc</p>
          <Button text='See More' url='#' />
        </div>
        <div className={styles.category__image}>
          <Image
            src='https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.category__item}>
        <div className={styles.category__content}>
          <h1 className={styles.content__title}>Text</h1>
          <p className={styles.content__desc}>Desc</p>
          <Button text='See More' url='#' />
        </div>
        <div className={styles.category__image}>
          <Image
            src='https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
};
export default Category;
