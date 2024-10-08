import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/aviwe.jfif";
import Tilt from "react-parallax-tilt";
// import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

import "./home.styles.css";

function SubHome() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="home-about-title">
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am Experienced in the languages
              <i>
                <b className="purple"> Javascript, TypeScript and Java. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also a bit of <b className="purple">Mobile Apps.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Libraries and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React and Next</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="home-avatar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        {/* <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/aviwembekeni"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/aviwe3226"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aviwembekeni/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export default SubHome;
