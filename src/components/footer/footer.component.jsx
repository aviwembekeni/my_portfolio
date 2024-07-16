import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Aviwe Ngqukumba</h3>
        </Col>
        <Col md="4" className="footer-copywright text-center">
          <h3>Copyright © {year} A.N</h3>
        </Col>
        <Col md="4" className="footer-body text-end">
          <ul className="footer-icons list-unstyled d-flex justify-content-end">
            <li className="social-icons">
              <a
                href="https://github.com/aviwembekeni"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/aviwe3226"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/aviwembekeni/"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
