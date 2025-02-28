import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import texttools from "../../Assets/Projects/textutils.jpeg";
import hf from "../../Assets/Projects_pictures/cinematic.jpeg";
import bc from "../../Assets/Projects_pictures/bc.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <strong className="project-heading" >
            <p className="purple">Web Based Projects</p>
          </strong>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hf}
              isBlog={false}
              title="Hidden Friends"
              description="Empowering students to overcome challenges and thrive anonymously. Our platform provides a safe, judgment-free space for confidential communication on academic, psychological, and personal issues, fostering growth and resilience in every learner."
              ghLink="https://github.com/MukundJain1/hiddenFriends"
              demoLink="https://mukundjain1.github.io/hiddenFriends/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={texttools}
              isBlog={false}
              title="Text-Utils"
              description=" React-based application that provides text manipulation features such as converting text to uppercase/lowercase,word/character count, removing extra spaces, and more. The app is built using ReactJS and is fully responsive with fastrendering for seamless user experience."
              ghLink="https://github.com/MukundJain1/TextUtils"
              demoLink="https://text-utils-seven-pied.vercel.app/"
            />
          </Col>

        </Row >


        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <strong className="project-heading">
            <p className="purple">App Based Projects</p>
          </strong>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bc}
              isBlog={false}
              title="BMI Calculator"
              description="Comprehensive health profiling app featuring intuitive input methods: height slider, weight buttons, and gender/age selection. Collects key user data to deliver personalized health insights and tailored fitness recommendations."
              ghLink="https://github.com/MukundJain1/"
              demoLink="https://drive.google.com/file/d/1xH-RCgX3cUgoPF9t4zvNmllU-oRCRKfx/view?usp=drive_link"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
