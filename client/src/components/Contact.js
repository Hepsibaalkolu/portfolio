import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      console.log(response.data); // Log the response from the server
      setStatus('Message Sent Successfully');
    } catch (error) {
      console.error('Error sending message:', error.response || error); // Log the error
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <Container id="contact" className="py-5">
      <h2 className="text-center">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
          </Col>
          <Col md={6}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows="4"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </Col>
        </Row>
        <div className="text-center mt-3">
          <Button type="submit" variant="primary">Send Message</Button>
        </div>
      </form>
      <div className="text-center mt-3">
        <p>{status}</p>
      </div>
    </Container>
  );
};

export default Contact;
