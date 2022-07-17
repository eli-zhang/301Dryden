
import { Logo, Title, NavBar, NavItem, NavItemsContainer, 
  BackgroundHeaderContainer, ContactButton, BackgroundSquare, LargeHomeImage,
  TaglineContainer, TaglineText,
  SectionTitle, SectionDescription, 
  RoomsListContainer } from './styled';
import { Link } from "react-router-dom";
import RoomsList from './components/RoomsList/RoomsList'

function App() {
  return (
    <div className="App">
      <NavBar>
        <Logo />
        {/* <Link to="/" style={{ textDecoration: 'none' }}><Title>301 Dryden Road</Title></Link> */}
        <NavItemsContainer>
          <Link to="/" style={{ textDecoration: 'none' }}><NavItem active>Home</NavItem></Link>
          <Link to="/location" style={{ textDecoration: 'none' }}><NavItem>Location</NavItem></Link>
          <Link to="/rooms" style={{ textDecoration: 'none' }}><NavItem>Rooms</NavItem></Link>
          <Link to="/about" style={{ textDecoration: 'none' }}><NavItem>About</NavItem></Link>
        </NavItemsContainer>
        <ContactButton>Contact Us</ContactButton>
      </NavBar>

      <BackgroundHeaderContainer>
        <BackgroundSquare />
        <LargeHomeImage />
        <TaglineContainer>
          <TaglineText>Home — two minutes from campus. </TaglineText>
        </TaglineContainer>
      </BackgroundHeaderContainer>

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

export default App;