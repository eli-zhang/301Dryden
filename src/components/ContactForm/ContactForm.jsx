import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';
import { ContactTitle, FormContainer, SubmitButton, ConfirmationContainer, ConfirmationHeader, ConfirmationText, ContactBackgroundRect, ContactContainer } from './styled';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialFormData = Object.freeze({
  name: "",
  email: "",
  mobile: "",
  message: ""
});

const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const [formData, updateFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value.trim()
    });
  };

  const sendEmail = async () => {
    const serviceID = "service_hrdk5ax";
    const templateID = "template_dqxnor1";
    const publicKey = "7CeNtuGEyEflxRHOK";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };

    try {
      await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );
    } catch (e) {
      console.log(e);
    }

  }
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    setSubmitted(true);
    sendEmail();
  };

  return (

    (!submitted) ? (
      <ContactContainer>
        <ContactBackgroundRect />
        <ContactTitle> Contact Us!</ContactTitle>
        <FormContainer>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-4" as={Col} controlId="formGridName">
              {/* <Form.Label>Name*</Form.Label> */}
              <Form.Control required onChange={handleChange} name="name" type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-4" as={Col} controlId="formGridEmail">
              {/* <Form.Label>Email*</Form.Label> */}
              <Form.Control required onChange={handleChange} name="email" type="email" placeholder="Email" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4" as={Col} controlId="formGridMobile">
              {/* <Form.Label>Mobile no.*</Form.Label> */}
              <Form.Control onChange={handleChange} name="mobile" placeholder="Phone number" />
            </Form.Group>
            <Form.Group className="mb-4" as={Col} id="formGridQuery">
              {/* <Form.Label>Query*</Form.Label> */}
              <Form.Control required onChange={handleChange} name="message" as="textarea" placeholder="Message" rows={5} />
            </Form.Group>

            <SubmitButton variant="primary" type="submit">
              Submit
            </SubmitButton>
          </Form >
        </FormContainer>
      </ContactContainer>
    ) : (
      <ConfirmationContainer>
        <ConfirmationHeader>
          Thank you!
        </ConfirmationHeader>
        <ConfirmationText>
          We've received your message and will get back to you soon!
        </ConfirmationText>
      </ConfirmationContainer>
    )

  )
}

export default ContactForm;