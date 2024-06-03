import styles from "./slider.module.css";

const Slider = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sliders}>
                <div className={styles.slide}><img src="/pic1.jpg" alt="img1" /></div>
                <div className={styles.slide}><img src="/pic2.jpg" alt="img2" /></div>
                <div className={styles.slide}><img src="/pic3.jpg" alt="img3" /></div>
                <div className={styles.slide}><img src="/pic4.jpg" alt="img4" /></div>
                <div className={styles.slide}><img src="/pic5.jpg" alt="img5" /></div>
                <div className={styles.slide}><img src="/pic6.jpg" alt="img6" /></div>
                <div className={styles.slide}><img src="/pic7.jpg" alt="img7" /></div>
                <div className={styles.slide}><img src="/pic8.jpg" alt="img8" /></div>
                <div className={styles.slide}><img src="/pic1.jpg" alt="img1" /></div>
                <div className={styles.slide}><img src="/pic2.jpg" alt="img2" /></div>
                <div className={styles.slide}><img src="/pic3.jpg" alt="img3" /></div>
                <div className={styles.slide}><img src="/pic4.jpg" alt="img4" /></div>
                <div className={styles.slide}><img src="/pic5.jpg" alt="img5" /></div>
                <div className={styles.slide}><img src="/pic6.jpg" alt="img6" /></div>
                <div className={styles.slide}><img src="/pic7.jpg" alt="img7" /></div>
                <div className={styles.slide}><img src="/pic8.jpg" alt="img8" /></div>
            </div>
        </div>
    )
}

export default Slider;