import { useEffect, useState, useMemo } from "react";
import styles from "./Header.module.css";
import logo from "../../../assets/textLogo.png";

function getTimeOfDayGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return "🌸 Good morning!";
  if (hour < 18) return "🌸  Good afternoon!";
  return "🌸 Good evening!";
}

function TypewriterGreeting() {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 80;
  const deletingSpeed = 50;
  const holdDelay = 1500;
  const gapDelay = 400;

  const greetings = useMemo(
    () => [getTimeOfDayGreeting(), "🖍️ Last updated November 2025"],
    []
  );

  const segmenter = useMemo(
    () => new Intl.Segmenter("en", { granularity: "grapheme" }),
    []
  );

  const graphemes = useMemo(
    () => Array.from(segmenter.segment(greetings[index]), (s) => s.segment),
    [index, greetings, segmenter]
  );

  useEffect(() => {
    let timeout: number;

    if (!isDeleting && count < graphemes.length) {
      timeout = window.setTimeout(() => setCount((c) => c + 1), typingSpeed);
    } else if (!isDeleting && count === graphemes.length) {
      timeout = window.setTimeout(() => setIsDeleting(true), holdDelay);
    } else if (isDeleting && count > 0) {
      timeout = window.setTimeout(() => setCount((c) => c - 1), deletingSpeed);
    } else if (isDeleting && count === 0) {
      timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setIndex((i) => (i + 1) % greetings.length);
      }, gapDelay);
    }

    return () => clearTimeout(timeout);
  }, [count, isDeleting, graphemes.length, greetings.length]);

  const visible = graphemes.slice(graphemes.length - count).join("");

  return (
    <div className={styles.greeting}>
      <span className={styles.greetingInner}>{visible}</span>
    </div>
  );
}

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" className={styles.logoImage} />
      </div>
      <TypewriterGreeting />
    </header>
  );
}
