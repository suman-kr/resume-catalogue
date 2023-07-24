import "./styles.css";
import styled from "styled-components";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Resume() {
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

  const ExperienceHeading = styled.span`
    font-weight: 600;
    color: #585858;
    letter-spacing: 0.5px;
  `

  return (
    <div>
      <Heading>Suman Kumar</Heading>
      <PersonalContact>
        <div>
          <div>
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: "3px" }} />
            <Contact>+91 8951928710 </Contact>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "3px" }} />
            <Link href="mailto:kr.suman2207@gmail.com">
              kr.suman2207@gmail.com
            </Link>
          </div>
        </div>
        <div>
          <div>
            <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: "3px" }} />
            <Link href="https://www.linkedin.com/in/suman-kr/">
              linkedin/suman-kr
            </Link>
          </div>
          <div>
            <FontAwesomeIcon icon={faGithub} style={{ marginRight: "3px" }} />
            <Link href="https://www.github.com/suman-kr">github/suman-kr</Link>
          </div>
          <div>
            <FontAwesomeIcon icon={faGlobe} style={{ marginRight: "3px" }} />
            <Link href="https://suman-kr.github.io">github.io/suman-kr</Link>
          </div>
        </div>
      </PersonalContact>

      <HeadingHorizontalSeperator />
      <p style={{ textDecoration: "underline", margin: 0, marginBottom: 5, textUnderlineOffset: 3, letterSpacing: 0.5 }}>
      Skilled Software Developer with nearly 4 years of hands-on experience
      </p>

      <div className="experience-container">
        <SubHeading>Experience</SubHeading>
        <ExperienceSection>
          <ExperienceSubHeading>
            <Title>Scripbox</Title>, <ExperienceHeading>Software Engineer</ExperienceHeading>
          </ExperienceSubHeading>
          <ExperienceSubHeading>Jan 2022 - Present</ExperienceSubHeading>
        </ExperienceSection>
        <Subtitle>Bangalore</Subtitle>
        <ExperienceDetailList>
          <li>
            Template 1
          </li>

          <li>
          Template 1
          </li>

          <li>
          Template 1
          </li>
          <li>
          Template 1
          </li>

          

          <li>
          Template 1
          </li>
          <li>
          Template 1
          </li>

          
        </ExperienceDetailList>
        <ExperienceSection style={{marginTop: 2}}>
          <ExperienceSubHeading>
            <Title>Kreditbee</Title>, <ExperienceHeading>Software Engineer</ExperienceHeading>
          </ExperienceSubHeading>
          <ExperienceSubHeading>Jun 2021 - Dec 2021</ExperienceSubHeading>
        </ExperienceSection>
        <Subtitle>Bangalore</Subtitle>
        <ExperienceDetailList>
          <li>
            Added an UI component in Admin Panel to manage the PG configuration
            data stored in the database for easier access and control
          </li>
          <li>
            Worked on Loan Application generation PDF using HTML template in
            Golang and wkhtmltopdf.
          </li>
        </ExperienceDetailList>

        <ExperienceSection style={{marginTop: 2}}>
          <ExperienceSubHeading>
            <Title>Quotient Technology</Title>, <ExperienceHeading>Software Engineer</ExperienceHeading>
          </ExperienceSubHeading>
          <ExperienceSubHeading>Feb 2021 - Oct 2021</ExperienceSubHeading>
        </ExperienceSection>
        <Subtitle>Bangalore</Subtitle>
        <ExperienceDetailList>
          <li>
          Template 1
          </li>
          <li>
          Template 1
          </li>
          <li>
          Template 1
          </li>
          <li>
          Template 1
          </li>
        </ExperienceDetailList>
        <ExperienceSection style={{marginTop: 2}}>
          <ExperienceSubHeading>
            <Title>Quotient Technology</Title>, <ExperienceHeading>Software Engineer Intern</ExperienceHeading>
          </ExperienceSubHeading>
          <ExperienceSubHeading>Feb 2020 - Feb 2021</ExperienceSubHeading>
        </ExperienceSection>
        <Subtitle>Bangalore</Subtitle>
        <ExperienceDetailList>
          <li>
          Template 1
          </li>
          <li>
          Template 1
          </li>
          <li>
          Template 1
          </li>
          <li>
          Template 1
          </li>
        </ExperienceDetailList>
      </div>
      <HorizontalSeperator />
      <div className="skills">
        <SubHeading>Skills</SubHeading>
        <SkillList>
          <Skill>ReactJS</Skill>
          <Skill>React-Native</Skill>
          <Skill>Javascript</Skill>
          <Skill>Typescript</Skill>
          <Skill>Redux</Skill>
          <Skill>Jest</Skill>
          <Skill>RTL</Skill>
          <Skill>Webpack</Skill>
          <Skill>NextJS</Skill>
          <Skill>REST API</Skill>
          <Skill>NodeJS</Skill>
          <Skill>GraphQL</Skill>
          <Skill>MongoDB</Skill>
          <Skill>MySQL</Skill>
        </SkillList>
      </div>
      <HorizontalSeperator />
      <div className="projects-container">
        <SubHeading>Open source Projects</SubHeading>
        <div className="projects">
          <ProjectSection>
            <Title>QUOTERS</Title>{" "}
            <div>
              <Link href="https://github.com/suman-kr/quoters">Github</Link>
              <VerticalSeperator />
              <Link href="https://pypi.org/project/quoters/">PyPi</Link>
              <VerticalSeperator />
              <Link href="https://www.npmjs.com/package/quoters">NPM</Link>
            </div>
          </ProjectSection>

          <ExperienceDetailList>
            <li>
              Developed a data scraping package that extracts quotes from
              various websites, providing multiple quote categories. It can be
              seamlessly integrated into both Python and Node projects and
              offers the flexibility of being configured as a CLI command for
              Linux.
            </li>
            <li>Reached an user base with over 180 dependents.</li>
          </ExperienceDetailList>
        </div>
      </div>
      <HorizontalSeperator />
      <div className="education-container">
        <SubHeading>Education</SubHeading>
        <div className="education">
          <EducationSubHeading>
            <EducationSection>
              <div>
                <Title>CMR Institute of Technology</Title>,{" "}
                <LightText style={{ fontSize: "14px" }}>Bangalore</LightText>
              </div>
              <div>2015 - 2019</div>
            </EducationSection>
          </EducationSubHeading>
          <div>B.E. in Computer Science</div>
        </div>
      </div>
      <div className="achievement-container">
      </div>
    </div>
  );
}
