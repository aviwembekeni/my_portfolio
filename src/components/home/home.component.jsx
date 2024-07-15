import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../../common/Particle";
import SubHome from "./subhome.components";
import Type from "./Type";
import "./home.styles.css";
import "../../style.css";

function Home() {
  return (
    <section className="home-section" id="home">
      <Particle />
      <Container fluid className="home-content">
        <Row>
          <Col md={7} className="home-header">
            <h1 className="heading">
              Hi There!{" "}
              <span className="wave" role="img" aria-label="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="heading-name">
              I'M <strong className="main-name">Aviwe Ngqukumba</strong>
            </h1>
            <div className="type-container">
              <Type />
            </div>
          </Col>
          <Col md={5} className="home-image-container">
            <img src={homeLogo} alt="home" className="img-fluid home-img" />
          </Col>
        </Row>
      </Container>
      <SubHome />
    </section>
  );
}

export default Home;
