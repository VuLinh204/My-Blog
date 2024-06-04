import React from "react";
import styles from "./home.module.css";
import ContactButton from "@/components/contactButton/contactButton";
import PenAnimation from "@/components/penAnimation/penAnimation";
import TechnologyIntroduction from "@/components/technologyIntroduction/technologyIntroduction";
import BrandButtons from "@/components/brandButtons/brandButtons";

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h6 className={`${styles.title} ${styles.animateTitle}`}>
                    <TechnologyIntroduction />
                </h6>
                <p className={styles.desc}>
                    Discover new stories, learn fresh insights, and enjoy every moment –
                    join us on this journey every day!.
                </p>
                <div className={styles.buttons}>
                    <button className={styles.button}>Load more</button>
                    <button className={styles.button}>Contact</button> 
                </div>
                <div className={styles.contactButton}>
                    <ContactButton />
                </div>
                <div className={styles.brandButtons}>
                   <BrandButtons />
                </div>
            </div>
            <div className={styles.penAnimation}>
                <PenAnimation />
            </div>
        </div>
    );
};

export default Home;
