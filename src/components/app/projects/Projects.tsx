import Heading from "../../utility/heading/Heading";
import ProjectCard from "../../utility/project-card/ProjectCard";
import styles from "./Projects.module.css";

const PROJECTS = [
  {
    category: "🎓 RESEARCH PROJECT",
    title: "AI Assist Problems",
    subtitle: "MERN Stack Development",
    description:
      "A block based coding platform that helps students practice AI code comprehension.",
    image: "src/assets/ai-assist.png",
  },
  {
    category: "🐙 GROUP PROJECT",
    title: "Inky",
    subtitle: "MERN Stack Development",
    description:
      "A Pictionary-style game featuring creative powerups and real time multiplayer gameplay.",
    image: "src/assets/inky.png",
  },
  {
    category: "🎨 PERSONAL PROJECT",
    title: "Colorée",
    subtitle: "Swift iOS Development",
    description:
      "A simplistic colour based mood tracker to help users log and reflect on their emotions.",
    image: "src/assets/coloree.png",
  },
];

export default function Projects() {
  return (
    <div>
      <Heading>Projects</Heading>

      <div className={styles.grid}>
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            category={project.category}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}
