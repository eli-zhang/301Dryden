
import { Title, NavBar, NavItem, NavItemsContainer, 
  BackgroundHeaderContainer, ContactButton, BackgroundSquare, LargeHomeImage,
  TaglineContainer, TaglineText,
  SectionTitle, RoomsListContainer } from './styled';
import { Link } from "react-router-dom";
import RoomsList from './components/RoomsList/RoomsList'

function App() {

  return (
    <div className="App">
      <NavBar>
        <Link to="/" style={{ textDecoration: 'none' }}><Title>301 Dryden Road</Title></Link>
        <NavItemsContainer>
          <Link to="/" style={{ textDecoration: 'none' }}><NavItem>Home</NavItem></Link>
          <NavItem>Location</NavItem>
          <NavItem>Rooms</NavItem>
          <NavItem>About</NavItem>
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

      <RoomsListContainer>
        <RoomsList></RoomsList>
      </RoomsListContainer>
      
    </div>

  );
}

export default App;