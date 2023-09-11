import Image from 'next/image';
import styles from './page.module.css';
import { notFound } from 'next/navigation';

const getData = async id => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound();
  }
  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const post = await getData(params.id);
  return {
    title: post.title,
    desc: post.desc,
  };
};

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  console.log(params);
  return (
    <div className={styles.post}>
      <div className={styles.post__top}>
        <div className={styles.top__info}>
          <h1 className={styles.info__title}>{data.title}</h1>
          <p className={styles.info__desc}>{data.desc}</p>
          <div className={styles.info__author}>
            <Image
              src={data.image}
              alt='author image'
              width={40}
              height={40}
              className={styles.author__avatar}
            />
            <span className={styles.author__username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.image_container}>
          <Image src={data.image} alt='' fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.post__content}>
        <p className={styles.content__text}>{data.content}</p>
      </div>
    </div>
  );
};
export default BlogPost;
