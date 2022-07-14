import logo from './logo.svg';
import { Title, RoomGrid, RoomItem, RoomImage, RoomTitle, NavLink } from './styled'
import { Link, useNavigate } from "react-router-dom";

const roomNumbers = [101, 102, 103, 104, 105, 106, 201, 202, 203, 204, 205, 301, 302, 303, 304]
const getRoomName = (roomNumber) => {
  return `Room ${roomNumber}`;
}

function App() {
  let navigate = useNavigate();
  function handleClick(roomNumber) {
    navigate(`/rooms/${roomNumber}`);
  }

  return (
    <div className="App">
      <Link to="/" style={{ textDecoration: 'none' }}><Title>301 Dryden Road</Title></Link>
      <NavLink>about</NavLink>
      <NavLink>contact</NavLink>
      <RoomGrid>
        {roomNumbers.map((roomNumber, index) => {
          return (<RoomItem index={index} key={index} onClick={() => handleClick(roomNumber)}>
            <RoomImage number={index} />
            <RoomTitle>{getRoomName(roomNumber)}</RoomTitle>
          </RoomItem>)
        })}
      </RoomGrid>
    </div>

  );
}

export default App;