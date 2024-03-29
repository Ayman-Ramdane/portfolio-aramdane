import { Box, styled } from "@mui/material";
import { SectionWrapper, TitleWrapper } from "../../../styles/sectionStyles";
import Experience from "./Experience";
import ExperienceList from "../../../data/Experience.json";
const ExperienceWrapper = styled(Box)(() => ({}));
const ExperienceContainer = () => {
  return (
    <SectionWrapper>
      <TitleWrapper>Experience</TitleWrapper>
      <ExperienceWrapper>
        {ExperienceList.map((experience, ind) => (
          <Experience experience={experience} key={ind} />
        ))}
      </ExperienceWrapper>
    </SectionWrapper>
  );
};
export default ExperienceContainer;
