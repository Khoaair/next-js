import Button from '@/components/Button/Button';
import styles from './page.module.css';
import Image from 'next/image';
import { items } from './data';
import { notFound } from 'next/navigation';

const getData = cat => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};
const Category = ({ params }) => {
  const data = getData(params.category);
  console.log(data);
  return (
    <div className={styles.category}>
      <h1 className={styles.category__heading}>{params.category}</h1>

      {data.map(item => {
        return (
          <div key={item.id} className={styles.category__item}>
            <div className={styles.category__content}>
              <h1 className={styles.content__title}>{item.title}</h1>
              <p className={styles.content__desc}>{item.desc}</p>
              <Button text='See More' url='#' />
            </div>
            <div className={styles.category__image}>
              <Image
                src={item.image}
                alt=''
                fill={true}
                className={styles.img}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Category;
