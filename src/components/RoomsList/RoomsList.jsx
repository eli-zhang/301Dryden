import React from 'react';
import { RoomGrid, RoomItem, RoomImage, RoomTitle } from './styled'
import { Link, useNavigate } from "react-router-dom";

const roomNumbers = [101, 102, 103, 104, 105, 106, 201, 202, 203, 204, 205, 301, 302, 303, 304]
const getRoomName = (roomNumber) => {
  return `Room ${roomNumber}`;
}

const RoomsList = () => {
  let navigate = useNavigate();
  function handleClick(roomNumber) {
    navigate(`/rooms/${roomNumber}`);
  }

  return (
    <div className="App">
      <RoomGrid>
        {roomNumbers.map((roomNumber, index) => {
          return (<RoomItem index={index} key={index} onClick={() => handleClick(roomNumber)}>
            <RoomImage number={roomNumber} />
            <RoomTitle>{getRoomName(roomNumber)}</RoomTitle>
          </RoomItem>)
        })}
      </RoomGrid>
    </div>

  )

}

export default RoomsList;