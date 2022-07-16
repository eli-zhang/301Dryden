
import { Title, NavBar, NavItem, NavItemsContainer } from './styled';
import { Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <NavBar>
        <Link to="/" style={{ textDecoration: 'none' }}><Title>301 Dryden Road</Title></Link>
        <NavItemsContainer>
          <NavItem>Home</NavItem>
          <NavItem>Location</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Contact Us</NavItem>
        </NavItemsContainer>
        <NavItemsContainer>
          <NavItem>Hi</NavItem>

        </NavItemsContainer>
      </NavBar>
      
    </div>

  );
}

export default App;