import ExperienceCard from "../../utility/experience-card/ExperienceCard";
import Heading from "../../utility/heading/Heading";

export default function Extracurriculars() {
  return (
    <div>
      <Heading>Extracurriculars</Heading>
      <ExperienceCard
        imagePath="/devs.jpeg"
        companyName="Developers Society"
        roleName="Competitions Lead"
        description=""
        startDate="Feb 2025"
        endDate="Present"
      />
      <ExperienceCard
        imagePath="/sesa.jpeg"
        companyName="Software Engineering Students Association"
        roleName="Sponsorship Manager"
        description=""
        startDate="Feb 2024"
        endDate="Nov 2024"
      />
    </div>
  );
}
