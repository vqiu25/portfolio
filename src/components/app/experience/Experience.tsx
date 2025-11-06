import ExperienceCard from "../../utility/experience-card/ExperienceCard";
import Heading from "../../utility/heading/Heading";

export default function Experience() {
  return (
    <div>
      <Heading>Experience</Heading>
      <ExperienceCard
        imagePath="src/assets/windcave.png"
        companyName="Windcave"
        roleName="Software Intern"
        description="C++ Development"
        startDate="Nov 2025"
        endDate="Present"
      />
    </div>
  );
}
