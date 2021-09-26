import React from "react";
import {Navbar, Nav, Container, Row, Col} from "react-bootstrap";

function CustomNav(props){

    const {
        contactSelected,
        setContactSelected,
        aboutSelected,
        setAboutSelected,
        portfolioSelected,
        setPortfolioSelected,
        resumeSelected,
        setResumeSelected
    } = props;

  return (
    <header>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">Lukas Keel</Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link onClick={() => setContactSelected(true)}> Contact </Nav.Link>
              <Nav.Link onClick={() => setAboutSelected(true)}> About Me </Nav.Link>
              <Nav.Link onClick={() => setPortfolioSelected(true)}> Portfolio </Nav.Link>
              <Nav.Link onClick={() => setResumeSelected(true)}> Resume </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )}

export default CustomNav;