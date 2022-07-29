import ContactForm from '../../components/ContactForm/ContactForm';
import NavBar from '../../components/NavBar/NavBar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactBackgroundRect, ContactContainer, ContactInfoContainer, ContactInfoHeader, ContactInfoMessage, GridWrapper } from './styled'
import { ContactTitle, ContactMessage } from '../../components/ContactForm/styled'

function ContactPage() {
  return (
    <>
      <NavBar tab={"Contact"} />
      <div>
        <iframe src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ2Sa4wY2B0IkRvBhl9LZOMYI&key=AIzaSyATnhh1pmZjCHxOx4A9UwU6_9ovRBKYKz8&center=42.44019471051277,-76.48396272128262" width="100%" height="400px" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
      <ContactContainer>
        {/* <ContactBackgroundRect /> */}
        <ContactInfoContainer>
          <ContactTitle> Contact Info </ContactTitle>
          <GridWrapper>
            <ContactInfoHeader> Address: </ContactInfoHeader>
            <ContactInfoMessage> 301 Dryden Road, Ithaca NY 14853 </ContactInfoMessage>
            <ContactInfoHeader> Phone: </ContactInfoHeader>
            <ContactInfoMessage> (111)-222-3333 </ContactInfoMessage>
          </GridWrapper>
        </ContactInfoContainer>
        <ContactForm />
      </ContactContainer>
    </>
  )

}

export default ContactPage;