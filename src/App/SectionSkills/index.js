import {
  Divider,
  EllipseIconItem,
  SkillsContainer,
  SkillsHeader,
  SkillsItem,
  SkillsList,
} from "./styled";

export const SectionSkills = ({ title, content }) => {
  return (
    <SkillsContainer>
      <SkillsHeader>{title}</SkillsHeader>
      <Divider />
      <SkillsList>
        {content.map((skills) => (
          <SkillsItem key={skills}>
            <EllipseIconItem />
            {skills}
          </SkillsItem>
        ))}
      </SkillsList>
    </SkillsContainer>
  );
};
