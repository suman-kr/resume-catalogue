import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { ResumeStyled } from "../../src/Components/Resume/styled";
const Styled = ResumeStyled();
const Resume = () => {
  return (
    <div>
      <Styled.Heading>Suman Kumar</Styled.Heading>
      <Styled.PersonalContact>
        <div>
          <div>
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: "3px" }} />
            <Styled.Contact>+91 8951928710 </Styled.Contact>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "3px" }} />
            <Styled.Link href="mailto:kr.suman2207@gmail.com">
              kr.suman2207@gmail.com
            </Styled.Link>
          </div>
        </div>
        <div>
          <div>
            <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: "3px" }} />
            <Styled.Link href="https://www.linkedin.com/in/suman-kr/">
              linkedin/suman-kr
            </Styled.Link>
          </div>
          <div>
            <FontAwesomeIcon icon={faGithub} style={{ marginRight: "3px" }} />
            <Styled.Link href="https://www.github.com/suman-kr">
              github/suman-kr
            </Styled.Link>
          </div>
          <div>
            <FontAwesomeIcon icon={faGlobe} style={{ marginRight: "3px" }} />
            <Styled.Link href="https://suman-kr.github.io">
              github.io/suman-kr
            </Styled.Link>
          </div>
        </div>
      </Styled.PersonalContact>

      <Styled.HeadingHorizontalSeperator />
      <div className="experience-container">
        <Styled.SubHeading>Experience</Styled.SubHeading>
        <Styled.ExperienceSection>
          <Styled.ExperienceSubHeading>
            <Styled.Title>I-STEM</Styled.Title>, Software Engineer
          </Styled.ExperienceSubHeading>
          <Styled.ExperienceSubHeading>
            Oct 2020 - Present
          </Styled.ExperienceSubHeading>
        </Styled.ExperienceSection>
        <Styled.Subtitle>Bangalore</Styled.Subtitle>
        <Styled.ExperienceDetailList>
          <li>
            Contributed to the development of I-Stem portal for responsive and
            accessible UI, resilient and robust backend.
          </li>
          <li>
            Implemented caching logic for AFC requests on AWS S3 bucket and
            added cron sweep for failing requests.
          </li>
          {/* <li>
            Responsible for API design and development of RESTFUL services for
            the product.
          </li> */}
          <li>
            Built reusable commonly used components. Working on interactive UIs
            from scratch using React-Bootstrap.
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
        </Styled.ExperienceDetailList>
        <div className="experience">
          <Styled.ExperienceSection>
            <Styled.ExperienceSubHeading>
              <Styled.Title>SCRIPT IT SOLUTION</Styled.Title>, Full Stack
              Engineer
            </Styled.ExperienceSubHeading>
            <Styled.ExperienceSubHeading>
              Jan 2020 - Oct 2020
            </Styled.ExperienceSubHeading>
          </Styled.ExperienceSection>
          <Styled.Subtitle>Bangalore</Styled.Subtitle>
          <Styled.ExperienceDetailList>
            <li>
              Worked on multiple webapp projects using React.js and Django
              {/* Rust. */}
            </li>
            <li>
              Have worked on Material-UI and styled-components for creating
              reusable React components{" "}
            </li>
            <li>
              Worked on developement and integration of REST API and GraphQL API
            </li>
            {/* <li>
              Projects:
              <ul>
                <li>
                  <b>Nidhi</b>: Built a web based CRM to manage customer loans
                  for the client.
                </li>
              </ul>
            </li> */}
          </Styled.ExperienceDetailList>
        </div>
        <div className="experience">
          <Styled.ExperienceSection>
            <Styled.ExperienceSubHeading>
              <Styled.Title>SALESKEN</Styled.Title>, Trainee Software Engineer
            </Styled.ExperienceSubHeading>
            <Styled.ExperienceSubHeading>
              Aug 2019 - Jan 2020
            </Styled.ExperienceSubHeading>
          </Styled.ExperienceSection>
          <Styled.Subtitle>Bangalore</Styled.Subtitle>
          <Styled.ExperienceDetailList>
            <li>Worked on core Java for backend development</li>
            <li>Worked on REST services and API testing</li>
            <li>Worked with Bootstrap and HTML/CSS for UI development</li>
          </Styled.ExperienceDetailList>
        </div>
      </div>
      <Styled.HorizontalSeperator />
      <div className="skills">
        <Styled.SubHeading>Skills</Styled.SubHeading>
        <Styled.SkillList>
          <Styled.Skill>ReactJS</Styled.Skill>
          <Styled.Skill>Redux</Styled.Skill>
          <Styled.Skill>NextJS</Styled.Skill>
          <Styled.Skill>Jest</Styled.Skill>
          <Styled.Skill>NodeJS</Styled.Skill>
          <Styled.Skill>Python</Styled.Skill>
          <Styled.Skill>Typescript</Styled.Skill>
          <Styled.Skill>REST API</Styled.Skill>
          <Styled.Skill>GraphQL</Styled.Skill>
          <Styled.Skill>Django</Styled.Skill>
          <Styled.Skill>Java</Styled.Skill>
          <Styled.Skill>MongoDB</Styled.Skill>
          <Styled.Skill>MySQL</Styled.Skill>
        </Styled.SkillList>
      </div>
      <Styled.HorizontalSeperator />
      <div className="projects-container">
        <Styled.SubHeading>Personal Projects</Styled.SubHeading>
        <div className="projects">
          <Styled.ProjectSection>
            <Styled.Title>REMARQUES</Styled.Title>
            <div>
              <Styled.Link href="https://github.com/suman-kr/remarques">
                Github
              </Styled.Link>
              <Styled.VerticalSeperator />
              <Styled.Link href="https://suman-kr.github.io/remarques/">
                Website
              </Styled.Link>
            </div>
          </Styled.ProjectSection>
          <Styled.ExperienceDetailList>
            <li>A notepad app to save multiple notes on the fly.</li>
            <li>
              It supports personalized URL and also have random URL generation
              by default.
            </li>
            <li>
              <Styled.LightText>Tech Stack</Styled.LightText>: ReactJS, Django,
              GraphQL
            </li>
          </Styled.ExperienceDetailList>
        </div>
        <div className="projects">
          <Styled.ProjectSection>
            <Styled.Title>QUOTERS</Styled.Title>{" "}
            <div>
              <Styled.Link href="https://github.com/suman-kr/quoters">
                Github
              </Styled.Link>
              <Styled.VerticalSeperator />
              <Styled.Link href="https://pypi.org/project/quoters/">
                PyPi
              </Styled.Link>
            </div>
          </Styled.ProjectSection>

          <Styled.ExperienceDetailList>
            <li>
              A python library which scrapes scrapes data from multiple websites
              and offers multiple quote genres.
            </li>
            <li>
              It is deployed on PyPi and have also exposed a public API which
              consumes the package.
            </li>
            <li>
              <Styled.LightText>Tech Stack</Styled.LightText>: Python, FastAPI
            </li>
          </Styled.ExperienceDetailList>
        </div>
        <div className="projects">
          <Styled.ProjectSection>
            <Styled.Title>RESUME CATALOGUE</Styled.Title>
            <div>
              <Styled.Link href="https://github.com/suman-kr/resume-catalogue">
                Github
              </Styled.Link>
            </div>
          </Styled.ProjectSection>
          <Styled.ExperienceDetailList>
            <li>
              A web app to facilitate the user in creating a resume of different
              layouts using the resume wizard.
            </li>
            <li>
              Implemented stepper component from scratch using React-Bootstrap.
            </li>
            <li>It provides a sharable link for the generated resume.</li>
            <li>
              <Styled.LightText>Tech Stack</Styled.LightText>: ReactJS
            </li>
          </Styled.ExperienceDetailList>
        </div>
      </div>
      <Styled.HorizontalSeperator />
      <div className="education-container">
        <Styled.SubHeading>Education</Styled.SubHeading>
        <div className="education">
          <Styled.EducationSubHeading>
            <Styled.EducationSection>
              <div>
                <Styled.Title>CMR Institute of Technology</Styled.Title>,{" "}
                <Styled.LightText style={{ fontSize: "14px" }}>
                  Bangalore
                </Styled.LightText>
              </div>
              <div>2015 - 2019</div>
            </Styled.EducationSection>
          </Styled.EducationSubHeading>
          <div>B.E. in Computer Science</div>
        </div>
      </div>
      <Styled.HorizontalSeperator />
      <div className="achievement-container">
        <Styled.SubHeading>Achievements / Participations</Styled.SubHeading>
        <Styled.ExperienceDetailList>
          <li>
            Among Top 250 in Jio Code Gladiators - 2019 (<b>Semi-finalist</b>){" "}
          </li>
          <li>Secured 98 percentile in Coursera - Python for Everybody</li>
        </Styled.ExperienceDetailList>
      </div>
    </div>
  );
};

export default Resume;
