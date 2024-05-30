"use client"
import React, { useEffect, useRef } from 'react';
import styles from './scrollEffect.module.css';

const ScrollEffect = () => {
    const divRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = scrollPosition / maxScroll;

            if (divRef.current) {
                divRef.current.style.width = `${scrollPercentage * 100}%`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.scrollIndicator} ref={divRef}></div>
        </div>
    );
};

export default ScrollEffect;
