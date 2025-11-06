import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  category: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export default function ProjectCard({
  category,
  title,
  subtitle,
  description,
  image,
}: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.textTop}>
        <p className={styles.category}>{category}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <img src={image} alt={`${title} preview`} className={styles.image} />

      <p className={styles.description}>{description}</p>
    </div>
  );
}
