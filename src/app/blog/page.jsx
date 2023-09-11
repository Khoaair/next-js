import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/posts', {
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
            href={`/blog/${item._id}`}
            className={styles.blog__container}
          >
            <div className={styles.image__container}>
              <Image
                src={item.image}
                alt=''
                className={styles.image}
                width={400}
                height={250}
              />
            </div>
            <div className={styles.text__container}>
              <h1 className={styles.text__title}>{item.title}</h1>
              <p className={styles.text__desc}>{item.desc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Blog;
