import Heading from "../../utility/heading/Heading";
import styles from "./About.module.css";

export default function About() {
  return (
    <div>
      <Heading>About Me</Heading>
      <div className={styles.description}>
        Currently studying Software Engineering & Mathematics @ The University
        of Auckland. Presently seeking opportunities to help contribute to a
        positive difference ♥
      </div>
    </div>
  );
}
