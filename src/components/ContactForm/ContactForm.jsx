import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { ContactTitle, FormContainer, SubmitButton } from './styled';
import { EmptyButton } from '../../pages/HomePage/styled'

const ContactForm = () => {
  return (
    <div>
      <ContactTitle> Contact Us!</ContactTitle>
      <FormContainer>
        <Form>
          <Form.Group className="mb-4" as={Col} controlId="formGridName">
            {/* <Form.Label>Name*</Form.Label> */}
            <Form.Control name="name" type="name" placeholder="Name*" />
          </Form.Group>

          <Form.Group className="mb-4" as={Col} controlId="formGridEmail">
            {/* <Form.Label>Email*</Form.Label> */}
            <Form.Control name="email" type="email" placeholder="Email*"
            />
          </Form.Group>
          <Form.Group className="mb-4" as={Col} controlId="formGridMobile">
            {/* <Form.Label>Mobile no.*</Form.Label> */}
            <Form.Control name="mobile" placeholder="Phone number" />
          </Form.Group>
          <Form.Group className="mb-4" as={Col} id="formGridQuery">
            {/* <Form.Label>Query*</Form.Label> */}
            <Form.Control name="query" as="textarea" placeholder="Message*" rows={5} />
          </Form.Group>

          <SubmitButton variant="primary" type="submit">
            Submit
          </SubmitButton>
        </Form >
      </FormContainer>
    </div>
  )
}

export default ContactForm;