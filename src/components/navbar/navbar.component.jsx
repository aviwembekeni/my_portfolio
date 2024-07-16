import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { CgFileDocument, CgGitFork } from "react-icons/cg";
import logo from "../../Assets/my-logo.PNG";
// import "../styles/NavBar.css";

const NavBar = () => {
  const [expand, setExpand] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 20) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const toggleExpand = () => {
    setExpand(!expand);
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navScrolled ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggleExpand} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpand(false)}>
              <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpand(false)}>
              <AiOutlineUser style={{ marginBottom: "2px" }} /> About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={() => setExpand(false)}>
              <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/resume" onClick={() => setExpand(false)}>
              <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
            </Nav.Link>
            <Button
              href="https://github.com/aviwembekeni/my_portfolio"
              target="_blank"
              className="fork-btn-inner"
            >
              <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
              <AiFillStar style={{ fontSize: "1.1em" }} />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
