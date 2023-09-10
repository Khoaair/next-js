import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.blog}>
      {data.map(item => {
        return (
          <Link
            key={item.id}
            href={`/blog/${item.id}`}
            className={styles.blog__container}
          >
            <div className={styles.image__container}>
              <Image
                src='https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
                className={styles.image}
                width={400}
                height={250}
              />
            </div>
            <div className={styles.text__container}>
              <h1 className={styles.text__title}>{item.title}</h1>
              <p className={styles.text__desc}>{item.body}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Blog;
