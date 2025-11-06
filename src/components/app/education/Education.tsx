import ExperienceCard from "../../utility/experience-card/ExperienceCard";
import Heading from "../../utility/heading/Heading";

export default function Education() {
  return (
    <div>
      <Heading>Education</Heading>
      <ExperienceCard
        imagePath="src/assets/uni.png"
        companyName="University of Auckland"
        roleName="Software Engineering & Mathematics"
        description=""
        startDate="Feb 2022"
        endDate="Present"
      />
    </div>
  );
}
