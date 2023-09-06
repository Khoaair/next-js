'use client';
import Link from 'next/link';
import style from './page.module.css';

const Navbar = () => {
  const links = [
    { id: 1, title: 'Home', url: '/' },
    { id: 2, title: 'Portfolio', url: '/portfolio' },
    { id: 3, title: 'Blog', url: '/blog' },
    { id: 4, title: 'About', url: '/about' },
    { id: 5, title: 'Contact', url: '/contact' },
    { id: 6, title: 'Dashboard', url: '/dashboard' },
  ];

  return (
    <div className={style.nav}>
      <Link href='/' className={style.nav__logo}>
        KhoaAir
      </Link>
      <div className={style.nav__links}>
        {links.map(link => (
          <Link href={link.url} key={link.id} className={style.nav__link}>
            {link.title}
          </Link>
        ))}
        <button
          className={style.btn}
          onClick={() => {
            console.log('Clicked');
          }}
        >
          logout
        </button>
      </div>
    </div>
  );
};
export default Navbar;
