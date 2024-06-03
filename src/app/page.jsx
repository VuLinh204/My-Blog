// Home.jsx
import React from 'react';
import Image from 'next/image';
import styles from './home.module.css';
import PenAnimation from '../components/penanimation/PenAnimation';
import TechnologyIntroduction from '@/components/technologyIntroduction/technologyIntroduction';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h6 className={`${styles.title} ${styles.animateTitle}`}>
                    {' '}
                    <TechnologyIntroduction />{' '}
                </h6>
                <p className={styles.desc}>
                    Discover new stories, learn fresh insights, and enjoy every moment – join us on this journey every
                    day!.
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
