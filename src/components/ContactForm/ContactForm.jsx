import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';
import { ContactTitle, FormContainer, SubmitButton, ConfirmationContainer, ConfirmationHeader, ConfirmationText, ContactMessage, ContactBackgroundRect, ContactContainer } from './styled';
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
  const [readySend, setReadySend] = useState(false);

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
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      setReadySend(true)
    }

    setValidated(true)

    if (readySend) {
      sendEmail();
      setSubmitted(true);
    }

  };

  return (
    <FormContainer>
      {(!submitted) ? (
        <>
          {/* <ContactBackgroundRect /> */}
          <ContactTitle> Get in Touch with Us</ContactTitle>
          <ContactMessage> Feel free to message us with any questions and inquiries you might have. We'll do our best to get back to you as soon as we can!</ContactMessage>
          {/* <FormContainer> */}
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" as={Col} controlId="formGridName">
              {/* <Form.Label>Name*</Form.Label> */}
              <Form.Control required onChange={handleChange} name="name" type="text" placeholder="Name" />
              <Form.Control.Feedback type="invalid">
                Name is a required field.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
              {/* <Form.Label>Email*</Form.Label> */}
              <Form.Control required onChange={handleChange} name="email" type="email" placeholder="Email" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" as={Col} controlId="formGridMobile">
              {/* <Form.Label>Mobile no.*</Form.Label> */}
              <Form.Control onChange={handleChange} name="mobile" placeholder="Phone number" />
            </Form.Group>
            <Form.Group className="mb-3" as={Col} id="formGridQuery">
              {/* <Form.Label>Query*</Form.Label> */}
              <Form.Control required onChange={handleChange} name="message" as="textarea" placeholder="Message" rows={5} />
              <Form.Control.Feedback type="invalid">
                A message is required.
              </Form.Control.Feedback>
            </Form.Group>

            <SubmitButton variant="primary" type="submit">
              Submit
            </SubmitButton>
          </Form >
          {/* </FormContainer> */}

        </>) : (<>
          {/* <ConfirmationContainer> */}
          <ConfirmationHeader>
            Thank you!
          </ConfirmationHeader>
          <ConfirmationText>
            We've received your message and will get back to you soon!
          </ConfirmationText>
        </>
        /* </ConfirmationContainer> */
      )}
    </FormContainer >
  )
}

export default ContactForm;