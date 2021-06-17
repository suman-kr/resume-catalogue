import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { ResumeStyled } from "../styled";
import Head from "next/head";
import { Month } from "../../../data/month";
import { FormPayload } from "../../../Redux/Reducers/FormDetails";

const Styled = ResumeStyled();
export const SummerResume = (props: { forms: FormPayload }) => {
  const { forms } = props;
  const _userNameParser = (link: string) => {
    const index = link.lastIndexOf("/");
    if (index > -1) {
      return link.substring(index + 1);
    }
    return "";
  };

  const _formatDateForExperienceSection = (
    startDate: string,
    endDate: string
  ) => {
    const _startDate = new Date(startDate);
    const _startMonth = Month[_startDate.getMonth()].abbreviation;
    const _startYear = _startDate.getFullYear();
    let formattedDate = `${_startMonth} ${_startYear} - `;
    if (endDate === "") formattedDate += "Present";
    else {
      const _endDate = new Date(endDate);
      const _endMonth = Month[_endDate.getMonth()].abbreviation;
      const _endYear = _endDate.getFullYear();
      formattedDate += `${_endMonth} ${_endYear}`;
    }
    return formattedDate;
  };

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
          {forms.linkedIn && (
            <div>
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ marginRight: "3px" }}
              />
              <Styled.Link href={forms.linkedIn}>
                linkedin/{_userNameParser(forms.linkedIn)}
              </Styled.Link>
            </div>
          )}
          {forms.github && (
            <div>
              <FontAwesomeIcon icon={faGithub} style={{ marginRight: "3px" }} />
              <Styled.Link href={forms.github}>
                github/{_userNameParser(forms.github)}
              </Styled.Link>
            </div>
          )}
          {forms.website && (
            <div>
              <FontAwesomeIcon icon={faGlobe} style={{ marginRight: "3px" }} />
              <Styled.Link href={forms.website}>
                github.io/{_userNameParser(forms.website)}
              </Styled.Link>
            </div>
          )}
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
                {_formatDateForExperienceSection(
                  experinence.startDate,
                  experinence.endDate
                )}
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
                <li>{item}</li>
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
      {forms.achievements && (
        <>
          <Styled.HorizontalSeperator />
          <div className="achievement-container">
            <Styled.SubHeading>Achievements / Participations</Styled.SubHeading>
            <Styled.ExperienceDetailList>
              {forms.achievements.split("\n").map((item) => (
                <li>{item}</li>
              ))}
            </Styled.ExperienceDetailList>
          </div>
        </>
      )}
    </div>
  );
};
