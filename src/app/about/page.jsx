import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/components/Button/Button';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about__img}>
        <Image
          src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          fill={true}
          alt='About image'
          className={styles.img}
        />
        <div className={styles.img__text}>
          <h1 className={styles.img__title}>Digital Storytellers</h1>
          <h2 className={styles.img__desc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.about__text}>
        <div className={styles.text__item}>
          <h1 className={styles.text__title}>Who Are We?</h1>
          <p className={styles.text__desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className={styles.text__item}>
          <h1 className={styles.text__title}>What We Do?</h1>
          <p className={styles.text__desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>

          <Button text='Contact' url='/contact' />
        </div>
      </div>
    </div>
  );
};
export default About;
