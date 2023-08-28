import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Contact.css';

function Contact() {
  return (
    <section className='contact' id="contact">
        <h1 className="ContactHeading">You have any projects?</h1>
        <span className="contactSubtitle">Lets chat </span>
        <Form className="contactForm">
          <Form.Control type="name" placeholder="Name" ></Form.Control>
          <Form.Control type="surname" placeholder="Surname" ></Form.Control>
          <Form.Control type="cellphone number" placeholder="Cellphone Number" ></Form.Control>
          <Form.Control type="email" placeholder="Email" ></Form.Control>
          <Form.Group className="textarea" control Id="Description" ><Form.Control as="textarea" rows={3} /></Form.Group>
        </Form>
        <Button variant='custom' type='submit'>Send</Button>
    </section>
  )
}

export default Contact