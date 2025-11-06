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
    image: "/ai-assist.png",
    link: "https://github.com/vqiu25/part-iv-project",
  },
  {
    category: "🐙 GROUP PROJECT",
    title: "Inky",
    subtitle: "MERN Stack Development",
    description:
      "A pictionary-style game featuring creative powerups and real time multiplayer gameplay.",
    image: "/inky.png",
    link: "https://github.com/vqiu25/inky",
  },
  {
    category: "🎨 PERSONAL PROJECT",
    title: "Colorée",
    subtitle: "Swift iOS Development",
    description:
      "A simplistic colour based mood tracker to help users log and reflect on their emotions.",
    image: "/coloree.png",
    link: "https://github.com/vqiu25/coloree",
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
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
