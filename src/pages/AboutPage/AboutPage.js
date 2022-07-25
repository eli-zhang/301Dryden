
import { 
  BackgroundHeaderContainer, EmptyButton, ExploreRoomsButtonContainer, HeaderBackgroundRect, LargeHomeImage,
  TaglineContainer, TaglineText,
  AboutTextContainer, AboutContainer, AboutBackgroundRect, AboutImage, AboutTitle, AboutDescription,
  SectionSpacer,
  ViewMapButtonContainer, Map } from './styled';
import { Link } from "react-router-dom";
import RoomsList from '../../components/RoomsList/RoomsList'
import NavBar from '../../components/NavBar/NavBar'
import { useState } from 'react'

function AboutPage() {
  const [viewingMap, setViewingMap] = useState(false);

  return (
    <div className="App">
      <NavBar tab={"About"}/>

      <iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ2Sa4wY2B0IkRvBhl9LZOMYI&key=AIzaSyATnhh1pmZjCHxOx4A9UwU6_9ovRBKYKz8"></iframe>

      <BackgroundHeaderContainer>
        <HeaderBackgroundRect />
        <LargeHomeImage />
        <TaglineContainer>
          <TaglineText>Quiet, spacious, and 2 minutes from campus. </TaglineText>
        </TaglineContainer>
        <ExploreRoomsButtonContainer>
        <Link to="/rooms" style={{ textDecoration: 'none' }}><EmptyButton>Explore Rooms</EmptyButton></Link>
        </ExploreRoomsButtonContainer>
      </BackgroundHeaderContainer>

      <SectionSpacer/>

      <AboutContainer>
        <AboutBackgroundRect/>
        {viewingMap ? <Map /> : <AboutImage />}
        <AboutTextContainer>
          <AboutTitle>About our home</AboutTitle>
          <AboutDescription>
            {viewingMap ? 
            <>
            One minute walk:
            <ul>
              <li><b>Restaurants</b>: UTea, Hai Hong, Vietnam Restaurant, Pokelava, Oishii Bowl</li>
              <li><b>Services and Stores</b>: Big Red Barber, Uncle Marty's Shipping Office</li>
            </ul>
            Two minute walk:
            <ul>
              <li><b>Restaurants</b>: Collegetown Bagels, Starbucks, Koko, Ithaca Beer Co., Fusia Bento Bar, Mango Mango, Kung Fu Tea, Plum Tree, and more</li>
              <li><b>Services and Stores</b>: Greenstar, Studio 108 Hair Design, UPS Store, Collegetown Wine and Spirits</li>
            </ul>
            </>
            
            : 
            
            <>
            301 Dryden Road is in the heart of collegetown, on the side closest to Cornell. 
            Within <b>one to three minutes</b>, you can walk to the business school, law school, or engineering quad. 
            <br/><br/>
            The house is on the corner of Linden and Dryden, which means the house is surrounded by restaurants and shops, but still quiet and far from the noise of parties and traffic.
            </>}
          </AboutDescription>
          
          <ViewMapButtonContainer>
            <EmptyButton onClick={() => setViewingMap(!viewingMap)}>
              {viewingMap ? 'Read about the home' : 'Check out the map'}</EmptyButton>
          </ViewMapButtonContainer>
        </AboutTextContainer>
      </AboutContainer>

      <SectionSpacer/>

      <RoomsList />
      
    </div>

  );
}

export default AboutPage;