import Heading from "../../utility/heading/Heading";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.left}>
        <Heading>Contact</Heading>
        <h2 className={styles.location}>
          Presently located in <br />
          <span className={styles.city}>Auckland, NZ</span>
        </h2>
      </div>

      <div className={styles.right}>
        <a
          href="mailto:victorqiu.dev@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          email
        </a>
        <a
          href="https://www.linkedin.com/in/vqiu25"
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>
        <a href="https://github.com/vqiu25" target="_blank" rel="noreferrer">
          github
        </a>
      </div>
    </section>
  );
}
