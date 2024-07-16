import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../common/Particle";
import Github from "../github/github.component";
import Techstack from "../tech-stack/tech-stack.component";
import Aboutcard from "./about-card.component";
import laptopImg from "../../Assets/about.png";
import Toolstack from "../tool-stack/tool-stack.component";

import "./about.styles.css";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="about-content">
          <Col md={7} className="about-description">
            <h1 className="about-title">
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} className="about-img-container">
            <img src={laptopImg} alt="about" className="img-fluid about-img" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;
