
import { Title, NavLink } from './styled';
import { Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Link to="/" style={{ textDecoration: 'none' }}><Title>301 Dryden Road</Title></Link>
      <NavLink>about</NavLink>
      <NavLink>contact</NavLink>
    </div>

  );
}

export default App;