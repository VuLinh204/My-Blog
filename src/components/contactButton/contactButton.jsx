import styles from "./contactButton.module.css";

const ContactButton = () => {
    return (
        <a href="/contact">
            <button className={`${styles.buttonct} ${styles.contactButton}`}>
                Contact
            </button>
        </a>
    );
};

export default ContactButton;
