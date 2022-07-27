import ContactForm from '../../components/ContactForm/ContactForm';
import NavBar from '../../components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactBackgroundRect, ContactContainer } from './styled'

function ContactPage() {
  return (
    <>
      <NavBar tab={"Contact"} />

      <ContactContainer>
        <ContactBackgroundRect />
        <ContactForm />
      </ContactContainer>
    </>
  )

}

export default ContactPage;