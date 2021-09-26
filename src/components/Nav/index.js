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

    function handleClick(target){
      setContactSelected(false);
      setPortfolioSelected(false);
      setAboutSelected(false);
      setResumeSelected(false);

      if (target===0){
        setContactSelected(true);
      }
      if (target===1){
        setAboutSelected(true);
      }
      if(target===2){
        setPortfolioSelected(true);
      }
      if(target===3){
        setResumeSelected(true);
      }
    }

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Lukas Keel</Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link onClick={() => handleClick(0)}> Contact </Nav.Link>
              <Nav.Link onClick={() => handleClick(1)}> About Me </Nav.Link>
              <Nav.Link onClick={() => handleClick(2)}> Portfolio </Nav.Link>
              <Nav.Link onClick={() => handleClick(3)}> Resume </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )}

export default CustomNav;