import React from "react";
import { useState } from "react";
import { postEmailForm } from "../../Services/Contact";
import "./Contact.css";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Contact = () => {
  const [formData, setFormData] = useState({});

  const updateState = (e) => {
    const newData = formData;
    newData[e.target.id] = e.target.value;
    setFormData(newData);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (
      !formData.subject === null &&
      !formData.email === null &&
      !formData.message === null
    ) {
      console.log(postEmailForm(formData));
    }
  };

  return (
    <>
      <Container id='contact'>
        <h2>Got a question?</h2>
        <Form id='email-form'>
          <Form.Group className='mb-3'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              id='email'
              type='email'
              placeholder='Enter email'
              onChange={updateState}
            />
            <Form.Text style={{ color: "white" }}>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Subject</Form.Label>
            <Form.Control
              id='subject'
              type='text'
              placeholder='Subject'
              onChange={updateState}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Message</Form.Label>
            <Form.Control
              id='message'
              type='text'
              placeholder='Message'
              onChange={updateState}
            />
          </Form.Group>
          <Button type='submit' onClick={submitForm}>
            Submit
          </Button>
        </Form>
      </Container>
      <Container id='reachus'>
        <h3>Contact</h3>
        <div id='grid'>
          <div style={{ gridCol: 1 }}>
            <h4>Address:</h4>
            <p>53 Portland St, Manchester, M1 3LD</p>
          </div>
          <div style={{ gridCol: 2 }}>
            <h4>Tel:</h4>
            <p>0161 6161 161</p>
          </div>
          <div style={{ gridColumn: 3 }}>
            <h4>Email:</h4>
            <p>info@qacinema.com</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
