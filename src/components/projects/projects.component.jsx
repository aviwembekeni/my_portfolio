import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./projects-card.component";
import Particle from "../../common/Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

const projectData = [
  {
    imgPath: chatify,
    title: "Chatify",
    description:
      "Personal Chat Room or Workspace to share resources and hangout with friends built with React.js, Material-UI, and Firebase. Features real-time messaging, image sharing, and message reactions.",
    ghLink: "https://github.com/soumyajit4419/Chatify",
    demoLink: "https://chatify-49.web.app/",
  },
  {
    imgPath: bitsOfCode,
    title: "Bits-0f-C0de",
    description:
      "My personal blog page built with Next.js and Tailwind CSS, rendering content from markdown files. Supports dark mode and easy blog writing using markdown.",
    ghLink: "https://github.com/soumyajit4419/Bits-0f-C0de",
    demoLink: "https://blogs.soumya-jit.tech/",
  },
  {
    imgPath: editor,
    title: "Editor.io",
    description:
      "Online code and markdown editor built with React.js. Supports HTML, CSS, and JS code with instant previews, along with markdown editing for README files. Features auto-save using local storage.",
    ghLink: "https://github.com/soumyajit4419/Editor.io",
    demoLink: "https://editor.soumya-jit.tech/",
  },
  {
    imgPath: leaf,
    title: "Plant AI",
    description:
      "Trained an image classifier model using PyTorch on a plant disease dataset from Kaggle, achieving 98% accuracy with ResNet34. Can detect diseased and healthy leaves of 14 unique plants.",
    ghLink: "https://github.com/soumyajit4419/Plant_AI",
    demoLink: "https://plant49-ai.herokuapp.com/",
  },
  {
    imgPath: suicide,
    title: "AI For Social Good",
    description:
      "Utilizing Natural Language Processing to detect suicide-related posts and user ideation in cyberspace, aiding in suicide prevention.",
    ghLink: "https://github.com/soumyajit4419/AI_For_Social_Good",
    demoLink: null, // Add demo link here
  },
  {
    imgPath: emotion,
    title: "Face Recognition and Emotion Detection",
    description:
      "Trained a CNN classifier using the FER-2013 dataset with Keras. Achieved 60.1% accuracy in emotion prediction, using OpenCV for face detection.",
    ghLink: "https://github.com/soumyajit4419/Face_And_Emotion_Detection",
    demoLink: null, // Add demo link here
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
