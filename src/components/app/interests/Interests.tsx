import { useState } from "react";
import Heading from "../../utility/heading/Heading";
import styles from "./Interests.module.css";

const INTERESTS = [
  {
    id: "dev",
    label: "development",
    rows: ["backend development", "systems programming"],
  },
  {
    id: "design",
    label: "design",
    rows: ["minimal, functional interfaces", "subtle gradients & texture"],
  },
];

export default function Interests() {
  const [activeId, setActiveId] = useState(INTERESTS[0].id);

  const active = INTERESTS.find((item) => item.id === activeId)!;

  return (
    <div>
      <Heading>INTERESTS</Heading>

      <div className={styles.content}>
        {/* Interests List */}
        <ul className={styles.list}>
          {INTERESTS.map((interest) => (
            <li
              key={interest.id}
              className={`${styles.item} ${
                interest.id === activeId ? styles.itemActive : ""
              }`}
              onMouseEnter={() => setActiveId(interest.id)}
            >
              <span className={styles.itemLabel}>{interest.label}</span>
              <span className={styles.itemCircle} />
            </li>
          ))}
        </ul>

        {/* Interest Details */}
        <div className={styles.details} key={active.id}>
          {active.rows.map((row, i) => (
            <p key={i} className={styles.detailsRow}>
              {row}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
