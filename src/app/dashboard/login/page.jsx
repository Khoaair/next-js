'use client';
import style from './page.module.css';
import { signIn } from 'next-auth/react';

const Login = () => {
  return (
    <div className={style.login}>
      <button onClick={() => signIn('google')}>Login with google</button>
    </div>
  );
};
export default Login;
