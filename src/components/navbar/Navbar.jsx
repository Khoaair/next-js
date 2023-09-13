'use client';
import Link from 'next/link';
import style from './page.module.css';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

const Navbar = () => {
  const links = [
    { id: 1, title: 'Home', url: '/' },
    { id: 2, title: 'Portfolio', url: '/portfolio' },
    { id: 3, title: 'Blog', url: '/blog' },
    { id: 4, title: 'About', url: '/about' },
    { id: 5, title: 'Contact', url: '/contact' },
    { id: 6, title: 'Dashboard', url: '/dashboard' },
  ];

  const session = useSession();

  return (
    <div className={style.nav}>
      <Link href='/' className={style.nav__logo}>
        KhoaAir
      </Link>
      <div className={style.nav__links}>
        <DarkModeToggle />
        {links.map(link => (
          <Link href={link.url} key={link.id} className={style.nav__link}>
            {link.title}
          </Link>
        ))}
        {session.status === 'authenticated' && (
          <button
            className={style.btn}
            onClick={() => {
              signOut();
            }}
          >
            logout
          </button>
        )}
      </div>
    </div>
  );
};
export default Navbar;
