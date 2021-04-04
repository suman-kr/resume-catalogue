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
    justify-content: space-between;
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
      <div className="experience-container">
        <SubHeading>Experience</SubHeading>
        <ExperienceSection>
          <ExperienceSubHeading>
            <Title>I-STEM</Title>, Software Engineer
          </ExperienceSubHeading>
          <ExperienceSubHeading>Oct 2020 - Present</ExperienceSubHeading>
        </ExperienceSection>
        <Subtitle>Bangalore</Subtitle>
        <ExperienceDetailList>
          <li>
            Contributed to the development of I-Stem portal for responsive and
            accessible UI, resilient and robust backend.
          </li>
          <li>
            Implemented caching logic for AFC requests on AWS S3 bucket and
            added cron sweep for failing requests.
          </li>
          <li>
            Responsible for API design and development of RESTFUL services for
            the product.
          </li>
          <li>
            Developed University flow for onboarding of students and staffs to
            the portal.
          </li>
          <li>
            Designed and developed Admin flow for managing user/organization
            requests.
          </li>

          <li>
            Managed role based authorization of users on portal through JWT and
            casl.
          </li>
          <li>
            Perform Unit Testing and API Testing with code coverage of more than
            60%
          </li>
        </ExperienceDetailList>
        <div className="experience">
          <ExperienceSection>
            <ExperienceSubHeading>
              <Title>SCRIPT IT SOLUTION</Title>, Full Stack Engineer
            </ExperienceSubHeading>
            <ExperienceSubHeading>Jan 2020 - Oct 2020</ExperienceSubHeading>
          </ExperienceSection>
          <Subtitle>Bangalore</Subtitle>
          <ExperienceDetailList>
            <li>
              Worked on multiple webapp projects using React.js, Django and
              Rust.
            </li>
            <li>
              Worked on developement and integration of REST API and GraphQL API
            </li>
            <li>Worked on deployment using Docker and CI/CD</li>
            <li>
              Projects:
              <ul>
                <li>
                  <b>Nidhi</b>: Built a web based CRM to manage customer loans
                  for the client.
                </li>
              </ul>
            </li>
          </ExperienceDetailList>
        </div>
        <div className="experience">
          <ExperienceSection>
            <ExperienceSubHeading>
              <Title>SALESKEN</Title>, Trainee Software Engineer
            </ExperienceSubHeading>
            <ExperienceSubHeading>Aug 2019 - Jan 2020</ExperienceSubHeading>
          </ExperienceSection>
          <Subtitle>Bangalore</Subtitle>
          <ExperienceDetailList>
            <li>Worked on core Java for backend development</li>
            <li>Worked on REST services and API testing</li>
            <li>Worked with Bootstrap and HTML/CSS for UI development</li>
          </ExperienceDetailList>
        </div>
      </div>
      <HorizontalSeperator />
      <div className="skills">
        <SubHeading>Skills</SubHeading>
        <SkillList>
          <Skill>ReactJS</Skill>
          <Skill>NodeJS</Skill>
          <Skill>NextJS</Skill>
          <Skill>Python</Skill>
          <Skill>Typescript</Skill>
          <Skill>REST API</Skill>
          <Skill>GraphQL</Skill>
          <Skill>Django</Skill>
          <Skill>Java</Skill>
          <Skill>MongoDB</Skill>
          <Skill>MySQL</Skill>
        </SkillList>
      </div>
      <HorizontalSeperator />
      <div className="projects-container">
        <SubHeading>Personal Projects</SubHeading>
        <div className="projects">
          <ProjectSection>
            <Title>REMARQUES</Title>
            <div>
              <Link href="https://github.com/suman-kr/remarques">Github</Link>
              <VerticalSeperator />
              <Link href="https://suman-kr.github.io/remarques/">Website</Link>
            </div>
          </ProjectSection>
          <ExperienceDetailList>
            <li>A notepad app to save multiple notes on the fly.</li>
            <li>
              It supports personalized URL and also have random URL generation
              by default.
            </li>
            <li>
              <LightText>Tech Stack</LightText>: React.JS, Django, GraphQL
            </li>
          </ExperienceDetailList>
        </div>
        <div className="projects">
          <ProjectSection>
            <Title>QUOTERS</Title>{" "}
            <div>
              <Link href="https://github.com/suman-kr/quoters">Github</Link>
              <VerticalSeperator />
              <Link href="https://pypi.org/project/quoters/">PyPi</Link>
            </div>
          </ProjectSection>

          <ExperienceDetailList>
            <li>
              Built a random quotes generator which scrapes data from multiple
              websites and offers multiple quote genres.
            </li>
            <li>
              It is deployed on PyPi and have also exposed a public API which
              consumes the package.
            </li>
            <li>
              <LightText>Tech Stack</LightText>: Python, FastAPI
            </li>
          </ExperienceDetailList>
        </div>
        <div className="projects">
          <ProjectSection>
            <Title>VISITOR MANAGEMENT SYSTEM</Title>
            <div>
              <Link href="https://github.com/suman-kr/visitor-management-project">Github</Link>
            </div>
          </ProjectSection>
          <ExperienceDetailList>
            <li>A web app to facilitate visitor management for college.</li>
            <li>
              <LightText>Tech Stack</LightText>: PHP, HTML/CSS, Bootstrap, MySQL
            </li>
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
                <LightText style={{fontSize: "14px"}}>Bangalore</LightText>
              </div>
              <div>2015 - 2019</div>
            </EducationSection>
          </EducationSubHeading>
          <div>B.E. in Computer Science</div>
        </div>
      </div>
      <HorizontalSeperator />
      <div className="achievement-container">
        <SubHeading>Achievements / Participations</SubHeading>
        <ExperienceDetailList>
          <li>
            Among Top 250 in Jio Code Gladiators - 2019 (<b>Semi-finalist</b>){" "}
          </li>
          <li>Secured 98 percentile in Coursera - Python for Everybody</li>
        </ExperienceDetailList>
      </div>
    </div>
  );
}
