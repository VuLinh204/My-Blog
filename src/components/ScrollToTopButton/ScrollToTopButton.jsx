'use client';
import React, { useEffect, useState } from 'react';
import styles from './ScrollToTopButton.module.css';

const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <button className={`${styles.scrollToTopButton} ${showButton ? styles.show : ''}`} onClick={scrollToTop}>
            <img src="/arrow-up-solid.svg" alt="arrowup icon" />
        </button>
    );
};

export default ScrollToTopButton;
