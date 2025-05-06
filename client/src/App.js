
import React from 'react';
import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Hema's Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="home" smooth={true} duration={500} className="nav-link">Home</Link>
              <Link to="about" smooth={true} duration={500} className="nav-link">About</Link>
              <Link to="projects" smooth={true} duration={500} className="nav-link">Projects</Link>
              <Link to="contact" smooth={true} duration={500} className="nav-link">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Container fluid className="bg-primary text-white text-center py-5" id="home">
          <Row>
            <Col>
              <h1>Hema Alkolu</h1>
              <p>React Developer | MERN Stack Expert</p>
              {/* 🔹 Resume Button Added Below */}
              <Button variant="light" href="Hema.pdf" download className="me-3">
                Download Resume
              </Button>
              <Button variant="outline-light" href="#projects">View Projects</Button>
            </Col>
          </Row>
        </Container>

        {/* About Section */}
        <Container id="about" className="py-5">
          <Row>
            <Col md={6}>
              <h2>About Me</h2>
              <p>I am a passionate web developer skilled in MERN stack, always eager to learn new technologies and create meaningful web applications.</p>
              <p>I love building scalable, performant web applications that solve real-world problems.</p>
            </Col>
            <Col md={6}>
              <img src="hema_image.jpg" alt="Hema Alkolu" className="w-50 img-fluid rounded-circle" />
            </Col>
          </Row>
        </Container>

        {/* Projects Section */}
        <Container id="projects" className="py-5">
          <h2>My Projects</h2>
          <Projects />
        </Container>

        {/* Contact Section */}
        <Container id="contact" className="py-5">
          <h2 className="text-center">Contact Me</h2>
          <form>
            <Row>
              <Col md={6}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="form-control" placeholder="Your name" />
              </Col>
              <Col md={6}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Your email" />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <label htmlFor="message">Message</label>
                <textarea id="message" className="form-control" rows="4" placeholder="Your message"></textarea>
              </Col>
            </Row>
            <div className="text-center mt-3">
              <Button type="submit" variant="primary">Send Message</Button>
            </div>
          </form>
        </Container>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>© {new Date().getFullYear()} Hema Alkolu. All rights reserved.</p>
        
        {/* 🔹 Social Links Added Below */}
        <div className="d-flex justify-content-center gap-3 mt-2">
          <a href="https://github.com/Hepsibaalkolu" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" width="30" />
          </a>
          <a href="https://linkedin.com/in/hema-alkolu" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" width="30" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

