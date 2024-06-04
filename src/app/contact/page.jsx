import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" required minLength={3} maxLength={150} />
          <input type="email" placeholder="Email Address" required />
          <input type="number" placeholder="Phone Number (Optional)" required />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message" required minLength={10} maxLength={500}
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
