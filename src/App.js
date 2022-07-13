import logo from './logo.svg';
import { Title, RoomGrid, RoomItem, RoomImage, RoomTitle } from './styled'

function App() {
  return (
    <div className="App">
      <Title>301 Dryden Road</Title>
      <RoomGrid>
        <RoomItem row={1} col={1}>
          <RoomImage />
          <RoomTitle>Room 101</RoomTitle>
        </RoomItem>
        <RoomItem row={1} col={2}/>
        <RoomItem row={1} col={3}/>
        <RoomItem row={1} col={4}/>
        <RoomItem row={2} col={1}/>
        <RoomItem row={2} col={2}/>
        <RoomItem row={2} col={3}/>
        <RoomItem row={2} col={4}/>
        <RoomItem row={3} col={1}/>
        <RoomItem row={3} col={2}/>
        <RoomItem row={3} col={3}/>
        <RoomItem row={3} col={4}/>
        <RoomItem row={4} col={1}/>
        <RoomItem row={4} col={2}/>
        <RoomItem row={4} col={3}/>
        <RoomItem row={4} col={4}/>
      </RoomGrid>
    </div>
  );
}

export default App;