import Image from "next/image";
import styles from "./brandButtons.module.css";

const BrandButtons = () => {
    return (
        <div className={styles.brandButtons}>
            <a
                href="https://store.steampowered.com"
                target="_blank"
                rel="noopener noreferrer">
                <div className={`${styles.brandButton} ${styles.brandButton1}`}>
                    <Image src="/steam.png" alt="Steam" width={50} height={50} />
                </div>
            </a>
            <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer">
                <div className={`${styles.brandButton} ${styles.brandButton2}`}>
                    <Image
                        src="/discord.png"
                        alt="Discord"
                        width={50}
                        height={50}
                    />
                </div>
            </a>
            <a
                href="https://www.twitch.tv"
                target="_blank"
                rel="noopener noreferrer">
                <div className={`${styles.brandButton} ${styles.brandButton3}`}>
                    <Image
                        src="/twitch.png"
                        alt="Twitch"
                        width={50}
                        height={50}
                    />
                </div>
            </a>
        </div>
    );
};

export default BrandButtons;