import logo from './logo.svg';
import { Title, RoomGrid, RoomItem, RoomImage, RoomTitle } from './styled'

const roomNumbers = [101, 102, 103, 104, 105, 106, 201, 202, 203, 204, 205, 301, 302, 303, 304]
const getRoomName = (roomNumber) => {
  return `Room ${roomNumber}`;
}

function App() {

  return (
    <div className="App">
      <Title>301 Dryden Road</Title>
      <RoomGrid>
        {roomNumbers.map((roomNumber, index) => {
          return (<RoomItem index={index} key={index}>
            <RoomImage number={index} />
            <RoomTitle>{getRoomName(roomNumber)}</RoomTitle>
          </RoomItem>)
        })}
      </RoomGrid>
    </div>

  );
}

export default App;