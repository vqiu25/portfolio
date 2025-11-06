import { useEffect, useState } from "react";
import Heading from "../../utility/heading/Heading";
import styles from "./Contact.module.css";

export default function Contact() {
  const [emoji, setEmoji] = useState("");

  useEffect(() => {
    const lat = -36.8485;
    const lon = 174.7635;
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    )
      .then((res) => res.json())
      .then((data) => {
        const code = data.current_weather.weathercode;
        const mapEmoji = weatherCodeToEmoji(code);
        setEmoji(mapEmoji);
      })
      .catch((err) => {
        console.error("Weather fetch error", err);
        setEmoji("☀️");
      });
  }, []);

  function weatherCodeToEmoji(code: number) {
    if (code === 0) return "☀️";
    if (code === 1 || code === 2) return "🌤️";
    if (code === 3) return "🌥️";
    if (code >= 45 && code <= 48) return "🌫️";
    if (code >= 51 && code <= 57) return "🌧️";
    if (code >= 61 && code <= 67) return "🌧️";
    if (code >= 71 && code <= 79) return "❄️";
    if (code >= 80 && code <= 82) return "⛈️";
    if (code >= 95) return "🌩️";
    return "❓";
  }

  return (
    <section className={styles.contact}>
      <div className={styles.left}>
        <Heading>Contact</Heading>
        <h2 className={styles.location}>
          Presently located in <br />
          <span className={styles.city}>Auckland, NZ {emoji}</span>
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
