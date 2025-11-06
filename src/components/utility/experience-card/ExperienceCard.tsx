import React from "react";
import styles from "./ExperienceCard.module.css";

interface ExperienceCardProps {
  imagePath: string;
  companyName: string;
  roleName: string;
  description: string;
  startDate: string;
  endDate: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  imagePath,
  companyName,
  roleName,
  description,
  startDate,
  endDate,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <img src={imagePath} alt={companyName} className={styles.logo} />
        <div className={styles.textContainer}>
          <h3 className={styles.company}>{companyName}</h3>
          <p className={styles.role}>
            {roleName} <span className={styles.description}>{description}</span>
          </p>
        </div>
      </div>

      <div className={styles.dates}>
        {startDate.toUpperCase()} – {endDate.toUpperCase()}
      </div>
    </div>
  );
};

export default ExperienceCard;
