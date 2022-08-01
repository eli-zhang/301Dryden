import NavBar from '../../components/NavBar/NavBar'
import { useState, useCallback } from 'react'
import { BackgroundContainer, HeaderText, BlackHeaderText } from './styled'
import AboutSection from '../../components/AboutSection/AboutSection'

function AboutPage() {

  return (
    <>
      <NavBar tab={"About"}/>
      {/* <BackgroundContainer>
        <HeaderText>Give us a call: <BlackHeaderText>607-351-1115</BlackHeaderText></HeaderText>

      </BackgroundContainer>
      <div>
        <iframe src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ2Sa4wY2B0IkRvBhl9LZOMYI&key=AIzaSyATnhh1pmZjCHxOx4A9UwU6_9ovRBKYKz8&center=42.44019471051277,-76.48396272128262" width="100%" height="600px" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div> */}
      <AboutSection />
    </>
  );
}

export default AboutPage;