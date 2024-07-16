import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiUbuntu,
  SiWindows,
} from "react-icons/si";

import "./tool-stack.styles.css";

const tools = [
  { component: SiUbuntu, name: "SiUbuntu" },
  { component: SiWindows, name: "SiWindows" },
  { component: SiVisualstudiocode, name: "SiVisualstudiocode" },
  { component: SiPostman, name: "SiPostman" },
  { component: SiSlack, name: "SiSlack" },
];

function Toolstack() {
  return (
    <Row className="toolstack-container">
      {tools.map((tool, index) => {
        const ToolComponent = tool.component;
        return (
          <Col key={index} xs={4} md={2} className="tech-icons">
            <ToolComponent />
          </Col>
        );
      })}
    </Row>
  );
}

export default Toolstack;
