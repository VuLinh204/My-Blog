'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './technologyIntroduction.module.css';

const TechnologyIntroduction = () => {
    return (
        <section className={styles.container}>
            <div className={`${styles.grid}`}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`${styles.leftSection}`}
                >
                    <div className={styles.headingContainer}>
                        <h6 className={`${styles.heading}`}>
                            <span className={`${styles.gradientText}`}>Hello, I&apos;m </span>
                            <br />
                            <TypeAnimation
                                sequence={[
                                    'Judy',
                                    1000,
                                    'Web Developer',
                                    1000,
                                    'Mobile Developer',
                                    1000,
                                    'UI/UX Designer',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className={styles.typingAnimation}
                            />
                        </h6>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`${styles.rightSection}`}
                ></motion.div>
            </div>
        </section>
    );
};

export default TechnologyIntroduction;
