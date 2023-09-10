import Image from 'next/image';
import styles from './page.module.css';
import { notFound } from 'next/navigation';

const getData = async id => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound();
  }
  return res.json();
};

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  console.log(params);
  return (
    <div className={styles.post}>
      <div className={styles.post__top}>
        <div className={styles.top__info}>
          <h1 className={styles.info__title}>{data.title}</h1>
          <p className={styles.info__desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati,
            necessitatibus rerum! Explicabo cupiditate doloremque doloribus,
            ipsa impedit voluptatibus architecto voluptatum, dolorem sint harum
            repellat at, minus excepturi nesciunt totam non.
          </p>
          <div className={styles.info__author}>
            <Image
              src='https://images.pexels.com/photos/16948896/pexels-photo-16948896/free-photo-of-thu-v-t-cai-d-u-con-ng-a-hinh-n-n-di-n-tho-i-di-d-ng.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='author image'
              width={40}
              height={40}
              className={styles.author__avatar}
            />
            <span className={styles.author__username}>KhoaAir</span>
          </div>
        </div>
        <div className={styles.image_container}>
          <Image
            src='https://images.pexels.com/photos/17867770/pexels-photo-17867770/free-photo-of-d-u-h-u.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.post__content}>
        <p className={styles.content__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fugit
          similique cum perspiciatis porro aliquam cumque quas odit delectus
          facilis laborum soluta reiciendis velit laboriosam nobis illum ea esse
          libero, placeat facere impedit ducimus voluptatibus, tempora atque!
          Asperiores illo, saepe laborum nulla dignissimos consequatur pariatur.
          Voluptatem animi consectetur blanditiis. Eum aut dicta commodi ipsa,
          quod laborum neque fugit eius id alias repellat similique eligendi
          beatae asperiores quam soluta dignissimos tenetur magni voluptas.
          Consequatur veniam nihil fuga at quos illum vitae numquam quasi,
          veritatis hic assumenda quaerat porro eveniet odio animi quia ea
          voluptatum unde vel aliquam maxime doloribus iure ratione.
        </p>
      </div>
    </div>
  );
};
export default BlogPost;
