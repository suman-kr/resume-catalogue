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
            accessible UI, resilient and robust backend. Working on MERN stack.
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
            Built a PDF Annotation interface to draw bounding boxes on the PDF
            pages to annotate text with HTML labels using canvas. Added
            functionalities for dragging, resizing, merging and splitting of the
            boxes. Created service for storing and generating HTML output of the
            PDF. It reduced the efforts of PDF remediations.
          </li>
          <li>
            Developed an Admin flow through which user/organization requests can
            be managed from the portal. It eliminated the efforts of managing
            requests through email. And solved the vulnerability of exposing the
            API to unauthorized users. Added role-based authorization to the
            portal using JWT and casl.
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
              Worked on multiple webapp projects using ReactJS and Django
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
            <li>Worked on core Java and MySQL for developing REST services.</li>
            <li>
              Developed UI components such as Carousel and flashcards for the
              product using jQuery and Bootstrap.
            </li>
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
            <li>
              A notepad app to save multiple notes on the fly. It supports
              personalized URL and also have random URL generation by default.
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
              Built a python library that scrapes data from multiple websites
              and offers multiple quote genres. Also added offline support for
              fallback. It has more than ten dependents on Github.
            </li>
            <li>Exposed a public API which consumes the package.</li>
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
              <Styled.VerticalSeperator />
              <Styled.Link href="https://resume-catalogue.vercel.app/">
                Website
              </Styled.Link>
            </div>
          </Styled.ProjectSection>
          <Styled.ExperienceDetailList>
            <li>
              Developed a web-based resume builder to facilitate the user in
              creating and managing resumes of different layouts using the
              resume wizard. It provides a sharable link for the generated
              resume.
            </li>
            <li>
              <Styled.LightText>Tech Stack</Styled.LightText>: NextJS, Redux,
              NodeJS
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
          <li>
            Among Top 250 in Jio Code Gladiators - 2019 (<b>Semi-finalist</b>){" "}
          </li>
          <li>Secured 98 percentile in Coursera - Python for Everybody</li>
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
