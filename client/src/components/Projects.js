import React from 'react';
import { Card, Row, Col, Button, Container } from 'react-bootstrap';

const projectList = [
  {
    title: "Password Validation",
    description: "Welcome to the Password Validation using React JS project! This is a simple yet effective password validation application built using React.js.",
    link: "https://github.com/Hepsibaalkolu/Password_Validation.git"
  },
  {
    title: "Inventory Management System MERN CRUD App",
    description: "A simple MERN project that lets the user insert, update, delete & get products from the MongoDB.",
    link: "https://github.com/Hepsibaalkolu/crud_operation.git"
  }
];

const Projects = () => {
  return (
    <Container className="py-4">
      <Row>
        {projectList.map((project, index) => (
          <Col md={6} lg={4} className="mb-4" key={index}>
            <Card className="h-100 shadow">
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.link} target="_blank">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
