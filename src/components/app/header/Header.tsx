import styles from "./Header.module.css";
import logo from "../../../assets/textLogo.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" className={styles.logoImage} />
      </div>
      <div className={styles.greeting}>🖍️ Last updated November 2025</div>
    </header>
  );
}

export default Header;
