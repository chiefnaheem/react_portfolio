import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/about_img.jpeg";
import downloadIcon from "../../assets/icons/download-icon.svg";
import resume from "../../assets/NAHEEM-ADEDOKUN.pdf";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
            My name is Naheem Adedokun, a graduate of Pharmacy at the premier school of pharmacy in West Africa, the Obafemi Awolowo University, Ile Ife, Nigeria.
            I am a full-stack developer specializing on the MERN stack. I am based in Lagos, Nigeria and a lover of knowledge exploits.
          </StyledParagraph>
          <StyledParagraph>
            Since transitioning from the medical field to software, 
            I have found fun in developing fully functional and responsive website using Javascript frameworks.
            I have a lifelong goal of providing solutions to some of the challenges
            facing humans in all aspects of their living and more particularly,
            the African peculiar ones. And I live in perpetual remembrance
            of this challenge. 
            I work with tools and languages such as HTML5, CSS, Javascript, 
            React JS, Node JS, Express JS, Bootstrap, MongoDB, Typescript And
            Git on daily basis and well familiar with them.
          </StyledParagraph>
          <StyledParagraph>
            I am a fast learner who puts himself forward always to learn more. 
            I look forward to meeting you and learning from you.
          </StyledParagraph>
          <Resume>
            <ResumeLink
              href={resume}
              icon={downloadIcon}
              download="resume-naheem-adedokun"
            >
              Download Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
