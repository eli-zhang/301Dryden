
import { 
  BackgroundHeaderContainer, EmptyButton, EmptyButtonContainer, BackgroundSquare, LargeHomeImage,
  TaglineContainer, TaglineText,
  SectionTitle, SectionDescription, 
  MapContainer, Map,
  RoomsListContainer } from './styled';
import { Link } from "react-router-dom";
import RoomsList from '../../components/RoomsList/RoomsList'
import NavBar from '../../components/NavBar/NavBar'

function HomePage() {
  return (
    <div className="App">
      <NavBar tab={"Home"}/>

      <BackgroundHeaderContainer>
        <BackgroundSquare />
        <LargeHomeImage />
        <TaglineContainer>
          <TaglineText>Home — two minutes from campus. </TaglineText>
        </TaglineContainer>
        <EmptyButtonContainer>
        <Link to="/rooms" style={{ textDecoration: 'none' }}><EmptyButton>Explore Rooms</EmptyButton></Link>
        </EmptyButtonContainer>
      </BackgroundHeaderContainer>

      <SectionTitle>
        About our home
      </SectionTitle>
      <SectionDescription>
        Fully furnished, all utilities paid for, and close to everything in collegetown.
      </SectionDescription>

      <MapContainer>
        <Map></Map>
      </MapContainer>

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