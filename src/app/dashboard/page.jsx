'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //       cache: 'no-store',
  //     });

  //     if (!res.ok) {
  //       setErr(true);
  //     }
  //     const data = await res.json();
  //     setIsLoading(false);
  //     setData(data);
  //   };
  //   getData();
  // }, []);

  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then(res => res.json());

  const { data, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );
  console.log(data);

  const handleSubmit = async e => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch('/api/posts/', {
        method: 'POST',
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          username: session.data.user.name,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status === 'loading') {
    return <h1>Loading...</h1>;
  }
  if (session.status === 'unauthenticated') {
    router.push('/dashboard/login');
  }
  if (session.status === 'authenticated') {
    return (
      <div className={styles.dashboard}>
        <div className={styles.dashboard__posts}>
          {isLoading
            ? 'Is Loading'
            : data.map(post => (
                <div className={styles.dashboard__post} key={post._id}>
                  <div className={styles.post__image}>
                    <Image
                      src={post.image}
                      alt=''
                      width={200}
                      height={100}
                      className={styles.img}
                    />
                  </div>
                  <h2 className={styles.post__title}>{post.title}</h2>
                  <span className={styles.post__delete}>x</span>
                </div>
              ))}
        </div>
        <form className={styles.dashboard__form} onSubmit={handleSubmit}>
          <h1>Add new post</h1>
          <input
            type='text'
            className={styles.form__input}
            placeholder='Title'
          />
          <input
            type='text'
            className={styles.form__input}
            placeholder='Description'
          />
          <input
            type='text'
            className={styles.form__input}
            placeholder='Image'
          />
          <textarea
            cols='30'
            rows='10'
            className={styles.form__textarea}
            placeholder='Content'
          ></textarea>
          <button className={styles.form__button}>send</button>
        </form>
      </div>
    );
  }
};
export default Dashboard;
