import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faYoutube, faDiscord } from '@fortawesome/free-brands-svg-icons';
import styles from './brandButtons.module.css';

const BrandButtons = () => {
    return (
        <ul className={styles.example2}>
            <li className={styles.iconContent}>
                <a
                    href="https://linkedin.com/"
                    aria-label="LinkedIn"
                    data-social="linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    <div className={styles.filled}></div>
                </a>
                <div className={styles.tooltip}>LinkedIn</div>
            </li>
            <li className={styles.iconContent}>
                <a
                    href="https://www.github.com/"
                    aria-label="GitHub"
                    data-social="github"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    <div className={styles.filled}></div>
                </a>
                <div className={styles.tooltip}>GitHub</div>
            </li>
            <li className={styles.iconContent}>
                <a
                    href="https://www.discord.com/"
                    aria-label="Discord"
                    data-social="discord"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faDiscord} size="2x" />
                    <div className={styles.filled}></div>
                </a>
                <div className={styles.tooltip}>Discord</div>
            </li>
            <li className={styles.iconContent}>
                <a
                    href="https://youtube.com/"
                    aria-label="Youtube"
                    data-social="youtube"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                    <div className={styles.filled}></div>
                </a>
                <div className={styles.tooltip}>Youtube</div>
            </li>
        </ul>
    );
};

export default BrandButtons;
