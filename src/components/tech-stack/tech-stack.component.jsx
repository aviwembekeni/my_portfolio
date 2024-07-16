import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

import "./tech-stack.styles.css";

const techStackIcons = [
  { component: DiJavascript1, name: "DiJavascript1" },
  { component: DiNodejs, name: "DiNodejs" },
  { component: DiReact, name: "DiReact" },
  { component: DiMongodb, name: "DiMongodb" },
  { component: SiNextdotjs, name: "SiNextdotjs" },
  { component: DiGit, name: "DiGit" },
  { component: SiFirebase, name: "SiFirebase" },
  { component: SiPostgresql, name: "SiPostgresql" },
  { component: DiPython, name: "DiPython" },
  { component: DiJava, name: "DiJava" },
];

function Techstack() {
  return (
    <Row className="techstack-container">
      {techStackIcons.map((icon, index) => {
        const IconComponent = icon.component;
        return (
          <Col key={index} xs={4} md={2} className="tech-icons">
            <IconComponent />
          </Col>
        );
      })}
    </Row>
  );
}

export default Techstack;
