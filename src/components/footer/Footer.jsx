import Image from 'next/image';
import style from './page.module.css';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div>©2023 KhoaAir. All rights reverved</div>
      <div className={style.footer__social}>
        <Image
          src='/1.png'
          width={15}
          height={15}
          className={style.footer__icon}
          alt='social media'
        />
        <Image
          src='/2.png'
          width={15}
          height={15}
          className={style.footer__icon}
          alt='social media'
        />
        <Image
          src='/3.png'
          width={15}
          height={15}
          className={style.footer__icon}
          alt='social media'
        />
        <Image
          src='/4.png'
          width={15}
          height={15}
          className={style.footer__icon}
          alt='social media'
        />
      </div>
    </div>
  );
};
export default Footer;
