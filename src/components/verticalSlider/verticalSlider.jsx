"use client"
import React, { useState, useEffect } from 'react';
import styles from './verticalSlider.module.css';

const slides = [
    { image: '/pic1.jpg', alt: 'Picture 1' },
    { image: '/pic2.jpg', alt: 'Picture 2' },
    { image: '/pic3.jpg', alt: 'Picture 3' },
    { image: '/pic4.jpg', alt: 'Picture 4' },
];

const VerticalSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.slider}>
            <div
                className={styles.slides}
                style={{ transform: `translateY(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div className={styles.slide} key={index}>
                        <div
                            className={styles.background}
                            style={{ backgroundImage: `url(${slide.image})` }}
                        ></div>
                    </div>
                ))}
            </div>
            <div className={styles.curvedBackground}></div>
        </div>
    );
};

export default VerticalSlider;
