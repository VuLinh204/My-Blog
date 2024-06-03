// Home.jsx
import React from 'react';
import Image from 'next/image';
import styles from './home.module.css';
import PenAnimation from '../components/penanimation/PenAnimation';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
      <h1 className={`${styles.title} ${styles.animateTitle}`}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis adipisci minima reiciendis
          a autem assumenda dolore.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="Brands" fill className={styles.brandImg} />
        </div>
      </div>
      <PenAnimation /> 
    </div>
  );
};

export default Home;
