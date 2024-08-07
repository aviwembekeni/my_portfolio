import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./projects-card.component";
import Particle from "../../common/Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

const projectData = [
  {
    imgPath: chatify,
    title: "Monsters Rolodex",
    description: "Simple Monster Searching React App",
    ghLink: "https://github.com/aviwembekeni/monsters-rolodex",
    demoLink: "https://gorgeous-maamoul-09cf8c.netlify.app/",
  },
  {
    imgPath: bitsOfCode,
    title: "Kasi Clothing",
    description:
      "E-commerce app built with React, Redux, Hooks, GraphQL, Stripe, Firebase",
    ghLink: "https://github.com/aviwembekeni/kasi-clothing",
    demoLink: "https://master--zesty-twilight-178458.netlify.app/",
  },
  {
    imgPath: editor,
    title: "Developer Connector",
    description: "Social web application for developers",
    ghLink: "https://github.com/aviwembekeni/developer-connector",
    demoLink: "https://dev-connector-1t9o.onrender.com/",
  },
  {
    imgPath: editor,
    title: "Face Detection App",
    description: "Web application that detects faces in a pictures using AI",
    ghLink: "https://github.com/aviwembekeni/react-face-detection-app",
    demoLink: "https://react-face-detection-app-s6jt.onrender.com",
  },
  {
    imgPath: leaf,
    title: "Rock Paper Scisscor",
    description: "Rock Paper Sciscor game built using Javascript",
    ghLink: "https://github.com/aviwembekeni/Rock-Paper-Scissors-Game",
    demoLink: "https://master--rock-paper-scisscor.netlify.app/",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectData.map((project, index) => (
            <Col key={index} md={4} className="project-card">
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
