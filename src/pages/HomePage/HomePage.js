
import { 
  BackgroundHeaderContainer, ExploreRoomsButtonContainer, HeaderBackgroundRect, LargeHomeImage,
  TaglineContainer, TaglineText,
  SectionSpacer } from './styled';

import { EmptyButton } from '../../components/styled'
import { Link } from "react-router-dom";
import RoomsList from '../../components/RoomsList/RoomsList'
import NavBar from '../../components/NavBar/NavBar'
import AboutSection from '../../components/AboutSection/AboutSection'

function HomePage() {

  return (
    <div className="App">
      <NavBar tab={"Home"}/>

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

      {/* <SectionSpacer/> */}

      {/* <AboutSection/> */}

      <SectionSpacer/>

      <RoomsList/>
      
    </div>

  );
}

export default HomePage;