import { useRef, useState, useEffect } from "react";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  category: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link?: string;
}

export default function ProjectCard({
  category,
  title,
  subtitle,
  description,
  image,
  link,
}: ProjectCardProps) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const targetPosRef = useRef({ x: 0, y: 0 });
  const currentPosRef = useRef({ x: 0, y: 0 });
  const animatingRef = useRef(false);
  const rafIdRef = useRef<number | null>(null);

  const startAnimationLoop = () => {
    if (animatingRef.current) return;
    animatingRef.current = true;

    const animate = () => {
      const ease = 0.12;
      const { x: cx, y: cy } = currentPosRef.current;
      const { x: tx, y: ty } = targetPosRef.current;

      const nx = cx + (tx - cx) * ease;
      const ny = cy + (ty - cy) * ease;

      currentPosRef.current = { x: nx, y: ny };
      setCursorPos({ x: nx, y: ny });

      if (Math.abs(tx - nx) > 0.3 || Math.abs(ty - ny) > 0.3) {
        rafIdRef.current = requestAnimationFrame(animate);
      } else {
        currentPosRef.current = { ...targetPosRef.current };
        setCursorPos({ ...targetPosRef.current });
        animatingRef.current = false;
      }
    };

    rafIdRef.current = requestAnimationFrame(animate);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    targetPosRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    startAnimationLoop();
  };

  useEffect(() => {
    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.textTop}>
        <p className={styles.category}>{category}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={styles.imageLink}
          onMouseMove={handleMouseMove}
        >
          <img src={image} alt={`${title} preview`} className={styles.image} />
          {/* always rendered; CSS controls opacity */}
          <div
            className={styles.overlayBox}
            style={{
              left: `${cursorPos.x}px`,
              top: `${cursorPos.y}px`,
            }}
          >
            show more
          </div>
        </a>
      ) : (
        <img src={image} alt={`${title} preview`} className={styles.image} />
      )}

      <p className={styles.description}>{description}</p>
    </div>
  );
}
