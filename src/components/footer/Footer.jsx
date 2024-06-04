import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>GRP4DEV</div>
      <div className={styles.text}>
       © Copyright belongs to the group 4.
      </div>
    </div>
  );
};

export default Footer;
