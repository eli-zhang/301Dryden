import React, { useState, useEffect } from 'react';
import { Form, Col } from 'react-bootstrap';
import { ContactTitle, FormContainer, SubmitButton, ConfirmationHeader, ConfirmationText, ContactMessage } from './styled';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialFormData = Object.freeze({
  name: "",
  email: "",
  mobile: "",
  message: ""
});

const ContactForm = ({ roomId }) => {
  const [validated, setValidated] = useState(false);
  const [formData, updateFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [readySend, setReadySend] = useState(false);
  const [autoMessage, setAutoMessage] = useState("");

  const handleChange = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value.trim()
    });
  };

  useEffect(() => {
    if (roomId) {
      setAutoMessage(`Hello! I was looking at some rooms on your website and am particularly interested in room ${roomId}. Is it still available?`)
    }
  }, [roomId])

  useEffect(() => {
    if (readySend) {
      sendEmail();
      setSubmitted(true);
    }
  }, [readySend])

  const sendEmail = async () => {
    const serviceID = "service_qbx8nhm";
    const templateID = "template_fi374y6";
    const publicKey = "2DPXSXDLDxNEax738";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.mobile,
      reply_to: formData.email,
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
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      event.preventDefault();
      setReadySend(true)
    }

    setValidated(true)
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
                Please provide your name.
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
              <Form.Control required onChange={handleChange} name="mobile" placeholder="Phone number" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid phone number.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" as={Col} id="formGridQuery">
              {/* <Form.Label>Query*</Form.Label> */}
              <Form.Control required onChange={handleChange} name="message" as="textarea" defaultValue={autoMessage} placeholder={"Message"} rows={5} />
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