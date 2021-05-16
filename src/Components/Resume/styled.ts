import styled from "styled-components";

interface ResumeStyledProps {
    Heading: any,
    LightText: any,
    SubHeading: any,
    Title: any,
    HeadingHorizontalSeperator: any,
    Subtitle: any,
    ProjectSection: any,
    EducationSection: any,
    PersonalContact: any,
    ExperienceDetailList: any,
    VerticalSeperator: any,
    ExperienceSubHeading: any,
    Link: any,
    Skill: any,
    ExperienceSection: any,
    EducationSubHeading: any,
    SkillList: any,
    Contact: any,
    HorizontalSeperator: any,
}


export function ResumeStyled(): ResumeStyledProps {
  const Title = styled.span`
    font-size: 16px;
    font-weight: 500;
  `;
  const SubHeading = styled.h3`
    font-size: 20px;
    margin: 0;
  `;
  const Heading = styled.h1`
    letter-spacing: 2px;
    font-size: 45px;
    margin: 10px 0 0 0;
  `;
  const HeadingHorizontalSeperator = styled.hr`
    border: 2px solid black;
  `;
  const Contact = styled.span`
    font-family: "Merriweather", serif;
    font-size: 14px;
  `;
  const HorizontalSeperator = styled.hr`
    border: 1px solid black;
  `;
  const Skill = styled.li`
    display: inline;
    margin: 0 4px 0 4px;
  `;
  const SkillList = styled.ul`
    display: flex;
    margin: 4px 0 0 0;
    justify-content: flex-start;
    flex-wrap: wrap;
  `;

  const Link = styled.a`
    font-size: 14px;
    text-decoration: none;
    &:visited {
      color: black;
    }
  `;
  const ExperienceSection = styled.section`
    margin-top: 4px;
    display: flex;
    justify-content: space-between;
  `;

  const EducationSubHeading = styled.div`
    font-size: 16px;
  `;

  const VerticalSeperator = styled.span`
    border: 1px solid black;
    margin: 0 4px 0 4px;
  `;

  const ExperienceSubHeading = styled.div`
    font-size: 16px;
  `;

  const ExperienceDetailList = styled.ul`
    font-size: 14px;
    margin: 4px 0 0 0;
  `;

  const PersonalContact = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const Subtitle = styled.div`
    font-size: 12px;
    color: gray;
  `;
  const ProjectSection = styled.section`
    display: flex;
    justify-content: space-between;
  `;
  const EducationSection = styled.section`
    display: flex;
    justify-content: space-between;
  `;
  const LightText = styled.span`
    color: gray;
  `;

  return {
    Heading,
    LightText,
    SubHeading,
    Title,
    HeadingHorizontalSeperator,
    Subtitle,
    ProjectSection,
    EducationSection,
    PersonalContact,
    ExperienceDetailList,
    VerticalSeperator,
    ExperienceSubHeading,
    Link,
    Skill,
    ExperienceSection,
    EducationSubHeading,
    SkillList,
    Contact,
    HorizontalSeperator,
  };
}
