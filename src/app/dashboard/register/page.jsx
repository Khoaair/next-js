'use client';
import Link from 'next/link';
import styles from './page.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Register = () => {
  const [err, setErr] = useState(false);
  const router = useRouter();
  const handleSubmit = async e => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push('/dashboard/login?success=Account has been created');
    } catch (err) {
      setErr(true);
      console.log(err);
    }
  };
  return (
    <div className={styles.register}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          required
          placeholder='username'
          className={styles.form__input}
        />
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
        <button className={styles.form__button}>Register</button>
        {err ?? 'Something went wrong!'}
      </form>
      <Link href='/dashboard/login'>Login with existing account</Link>
    </div>
  );
};
export default Register;
