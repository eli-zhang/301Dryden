import ContactForm from '../../components/ContactForm/ContactForm';
import NavBar from '../../components/NavBar/NavBar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactContainer, ContactInfoContainer, ContactInfoHeader, ContactInfoMessage, GridWrapper } from './styled'
import { ContactTitle } from '../../components/ContactForm/styled'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


function ContactPage(props) {
  const { state } = useLocation();
  const [roomId, setRoomId] = useState(null);

  useEffect(() => {
    if (state) {
      setRoomId(state.id);
    }
  }, [state])

  return (
    <>
      <NavBar tab={"Contact"} />
      <div>
        <iframe src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ2Sa4wY2B0IkRvBhl9LZOMYI&key=AIzaSyATnhh1pmZjCHxOx4A9UwU6_9ovRBKYKz8" width="100%" height="250px" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
      <ContactContainer>
        {/* <ContactBackgroundRect /> */}
        <ContactInfoContainer>
          <ContactTitle>Contact Info</ContactTitle>
          <GridWrapper>
            <ContactInfoHeader>Address: </ContactInfoHeader>
            <ContactInfoMessage>301 Dryden Road, Ithaca NY, 14850</ContactInfoMessage>
            <ContactInfoHeader>Phone: </ContactInfoHeader>
            <ContactInfoMessage>(607) 351-1115</ContactInfoMessage>
          </GridWrapper>
        </ContactInfoContainer>
        <ContactForm roomId={roomId}/>
      </ContactContainer>
    </>
  )

}

export default ContactPage;