import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/Navbar.css';
import logo from '../assets/image-removebg-preview.png';
import ProgressBar from "react-scroll-progress-bar";
function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary background" >
      <ProgressBar/>
      <Container >
        <Navbar.Brand href="#home ">
            <img src={logo} alt="" height={65} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto color">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <Nav.Link href="#Experience">Experience</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            
          </Nav>
          <Button className='button' href='https://github.com/Tarunsaisrinivas'>
          <FontAwesomeIcon icon={faGithub} style={{marginRight:'10px'}}  />
          Github
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;