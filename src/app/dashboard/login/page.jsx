'use client';
import styles from './page.module.css';
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const session = useSession();
  const router = useRouter();
  const handleSubmit = async e => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn('credentials', { email, password });
  };

  if (session.status === 'loading') {
    return <h1>Loading...</h1>;
  }
  if (session.status === 'authenticated') {
    router?.push('/dashboard');
  }

  return (
    <div className={styles.login}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          required
          placeholder='email'
          className={styles.form__input}
        />
        <input
          type='password'
          required
          placeholder='password'
          className={styles.form__input}
        />
        <button className={styles.form__button}>Login</button>
      </form>
      <button onClick={() => signIn('google')}>Login with google</button>
    </div>
  );
};
export default Login;
