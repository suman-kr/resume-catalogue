import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { ResumeStyled } from "../../src/Components/Resume/styled";
import Head from "next/head";
import { FormActions } from "../../src/Redux/Actions/FormActions";
import { connect } from "react-redux";
import { FormPayload } from "../../src/Redux/Reducers/FormDetails";

const Styled = ResumeStyled();
const Resume = (props: { forms: FormPayload }) => {
  const { forms } = props;
  return (
    <div className="resume-container">
      <Head>Resume</Head>
      <Styled.Heading>{forms.fullName}</Styled.Heading>
      <Styled.PersonalContact>
        <div>
          <div>
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: "3px" }} />
            <Styled.Contact>{forms.contact}</Styled.Contact>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "3px" }} />
            <Styled.Link href={`mailto:${forms.email}`}>
              {forms.email}
            </Styled.Link>
          </div>
        </div>
        <div>
          <div>
            <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: "3px" }} />
            <Styled.Link href={forms.linkedIn}>linkedin/suman-kr</Styled.Link>
          </div>
          <div>
            <FontAwesomeIcon icon={faGithub} style={{ marginRight: "3px" }} />
            <Styled.Link href={forms.github}>github/suman-kr</Styled.Link>
          </div>
          <div>
            <FontAwesomeIcon icon={faGlobe} style={{ marginRight: "3px" }} />
            <Styled.Link href={forms.website}>github.io/suman-kr</Styled.Link>
          </div>
        </div>
      </Styled.PersonalContact>

      <Styled.HeadingHorizontalSeperator />
      <div className="experience-container">
        <Styled.SubHeading>Experience</Styled.SubHeading>
        {forms.experience.map((experinence) => (
          <>
            <Styled.ExperienceSection>
              <Styled.ExperienceSubHeading>
                <Styled.Title>{experinence.company}</Styled.Title>,{" "}
                {experinence.title}
              </Styled.ExperienceSubHeading>
              <Styled.ExperienceSubHeading>
                Oct 2020 - Present
              </Styled.ExperienceSubHeading>
            </Styled.ExperienceSection>
            <Styled.Subtitle>{experinence.location}</Styled.Subtitle>
            <Styled.ExperienceDetailList>
              {experinence.description.split("\n").map((item) => (
                <li>{item}</li>
              ))}
            </Styled.ExperienceDetailList>
          </>
        ))}
      </div>
      <Styled.HorizontalSeperator />
      <div className="skills">
        <Styled.SubHeading>Skills</Styled.SubHeading>
        <Styled.SkillList>
          {forms.skills.map((skill) => (
            <Styled.Skill>{skill.skillName}</Styled.Skill>
          ))}
        </Styled.SkillList>
      </div>
      <Styled.HorizontalSeperator />
      <div className="projects-container">
        <Styled.SubHeading>Personal Projects</Styled.SubHeading>

        {forms.projects.map((project) => (
          <>
            <Styled.ProjectSection>
              <Styled.Title>{project.projectName}</Styled.Title>
              {/* <div>
                <Styled.Link href="https://github.com/suman-kr/remarques">
                  Github
                </Styled.Link>
                <Styled.VerticalSeperator />
                <Styled.Link href="https://suman-kr.github.io/remarques/">
                  Website
                </Styled.Link>
              </div> */}
            </Styled.ProjectSection>
            <Styled.ExperienceDetailList>
              {project.projectDescription.split("\n").map((item) => (
                <>{item}</>
              ))}
              {/* <Styled.LightText>Tech Stack</Styled.LightText>: ReactJS, Django,
              GraphQL */}
            </Styled.ExperienceDetailList>
          </>
        ))}
      </div>
      <Styled.HorizontalSeperator />
      <div className="education-container">
        <Styled.SubHeading>Education</Styled.SubHeading>
        <div className="education">
          <Styled.EducationSubHeading>
            <Styled.EducationSection>
              <div>
                <Styled.Title>{forms.instituteName}</Styled.Title>,{" "}
                <Styled.LightText style={{ fontSize: "14px" }}>
                  Bangalore
                </Styled.LightText>
              </div>
              <div>
                {forms.startYear} - {forms.endYear}
              </div>
            </Styled.EducationSection>
          </Styled.EducationSubHeading>
          <div>
            {forms.degree} in {forms.major}
          </div>
        </div>
      </div>
      <Styled.HorizontalSeperator />
      <div className="achievement-container">
        <Styled.SubHeading>Achievements / Participations</Styled.SubHeading>
        <Styled.ExperienceDetailList>
          {forms.achievements.split("\n").map((item) => (
            <li>{item}</li>
          ))}
        </Styled.ExperienceDetailList>
      </div>
    </div>
  );
};

const mapStateToProps = (store: any) => {
  const { forms } = store;
  return {
    forms,
  };
};

const mapDispatchToProps = {
  updateForms: FormActions.UpdateForms,
};

export default connect(mapStateToProps, mapDispatchToProps)(Resume);
