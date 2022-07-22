
import { 
  BackgroundHeaderContainer, EmptyButton, ExploreRoomsButtonContainer, HeaderBackgroundRect, LargeHomeImage,
  TaglineContainer, TaglineText,
  SectionTitle, SectionDescription, 
  AboutTextContainer, AboutContainer, AboutBackgroundRect, AboutImage, AboutTitle, AboutDescription,
  ViewMapButtonContainer, Map, RoomsListContainer } from './styled';
import { Link } from "react-router-dom";
import RoomsList from '../../components/RoomsList/RoomsList'
import NavBar from '../../components/NavBar/NavBar'
import { useState } from 'react'

function HomePage() {
  const [viewingMap, setViewingMap] = useState(false);

  return (
    <div className="App">
      <NavBar tab={"Home"}/>

      <BackgroundHeaderContainer>
        <HeaderBackgroundRect />
        <LargeHomeImage />
        <TaglineContainer>
          <TaglineText>Home — two minutes from campus. </TaglineText>
        </TaglineContainer>
        <ExploreRoomsButtonContainer>
        <Link to="/rooms" style={{ textDecoration: 'none' }}><EmptyButton>Explore Rooms</EmptyButton></Link>
        </ExploreRoomsButtonContainer>
      </BackgroundHeaderContainer>

      {/* <SectionTitle>
        About our home
      </SectionTitle> */}

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

      <SectionTitle>
        Explore our rooms
      </SectionTitle>
      <SectionDescription>
        <i>All rooms are fully furnished with a bed, desk, chair, lamp, and dresser.</i>
      </SectionDescription>

      <RoomsListContainer>
        <RoomsList></RoomsList>
      </RoomsListContainer>
      
    </div>

  );
}

export default HomePage;