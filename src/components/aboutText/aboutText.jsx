"use client";

import { useEffect } from "react";
import Aos from "aos";
import styles from "./aboutText.module.css";

const AboutPage = () => {

    useEffect(() => {
        // Initialize AOS after components are rendered
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div>
            <div
                data-aos="flip-right"
                data-aos-duration="1500"
                className={styles.about}
            >
                <div
                    className={styles.custom}
                >
                    <div className={styles.item}>
                        <h3>Start your Journey</h3>
                        <p>Participating in GSSoC’24 is an opportunity to upgrade your Github profile. Enrich yourselves to learn, explore, improve, enhance, build connections and become a team player to nourish your skills and personality. Don’t miss a chance to get well-versed with Open-Source and essential tools like Git and Github under the supervision of excellent mentors.</p>
                        <button className={styles.btn3d}>
                            <a href="#">
                                <span className={styles.top}>BUTTON</span>
                                <span className={styles.front}>BUTTON</span>
                            </a>
                        </button>
                    </div>
                    <div className={styles.item}>
                        <h3>Start your Journey</h3>
                        <p>Participating in GSSoC’24 is an opportunity to upgrade your Github profile. Enrich yourselves to learn, explore, improve, enhance, build connections and become a team player to nourish your skills and personality. Don’t miss a chance to get well-versed with Open-Source and essential tools like Git and Github under the supervision of excellent mentors.</p>
                        <button className={styles.btn3d}>
                            <a href="#">
                                <span className={styles.top}>BUTTON</span>
                                <span className={styles.front}>BUTTON</span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div
                data-aos="flip-left"
                data-aos-duration="1500"
                className={styles.about}
            >
                <div
                    className={styles.custom}
                >
                    <div className={styles.item}>
                        <h3>Start your Journey</h3>
                        <p>Participating in GSSoC’24 is an opportunity to upgrade your Github profile. Enrich yourselves to learn, explore, improve, enhance, build connections and become a team player to nourish your skills and personality. Don’t miss a chance to get well-versed with Open-Source and essential tools like Git and Github under the supervision of excellent mentors.</p>
                        <button className={styles.btn3d}>
                            <a href="#">
                                <span className={styles.top}>BUTTON</span>
                                <span className={styles.front}>BUTTON</span>
                            </a>
                        </button>
                    </div>
                    <div className={styles.item}>
                        <h3>Start your Journey</h3>
                        <p>Participating in GSSoC’24 is an opportunity to upgrade your Github profile. Enrich yourselves to learn, explore, improve, enhance, build connections and become a team player to nourish your skills and personality. Don’t miss a chance to get well-versed with Open-Source and essential tools like Git and Github under the supervision of excellent mentors.</p>
                        <button className={styles.btn3d}>
                            <a href="#">
                                <span className={styles.top}>BUTTON</span>
                                <span className={styles.front}>BUTTON</span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AboutPage;
