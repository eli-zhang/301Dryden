import React from 'react';
import { RoomGridContainer, RoomGrid, RoomItem, RoomImage, RoomTitle, SectionTitle, SectionDescription } from './styled'
import { Link, useNavigate } from "react-router-dom";

const roomNumbers = [101, 102, 103, 104, 105, 0, 1, 106, 201, 202, 203, 204, 205, 301, 302, 303, 2, 304]
const getRoomName = (roomNumber) => {
  switch (roomNumber) {
    case 0: return "Living Room"
    case 1: return "Kitchen"
    case 2: return "Bathrooms"
  }
  return `Room ${roomNumber}`;
}

const getInfoForRoomNumber = (roomNumber, index) => {
  let width = 1, height = 1, offset = 0;
  switch (roomNumber) {
    case 0: 
      width = 3; 
      height = 1;
      break;
    case 1: 
      width = 2; 
      height = 2;
      break;
    case 2:
      width = 2; 
      height = 1;
      break;
    default:
      width = 1; 
      height = 1;
  }

  // These values arrange the grid with the proper offset.
  if (index === 6) {
    offset = 2;
  } else if (index === 7 || index === 8) {
    offset = 3;
  } else if (index >= 9 && index <= 16) {
    offset = 5;
  } else if (index > 16) {
    offset = 6;
  }

  return { width, height, offset };
}

const RoomsList = () => {
  let navigate = useNavigate();
  function handleClick(roomNumber) {
    navigate(`/rooms/${roomNumber}`);
  }

  return (
    <>
      <SectionTitle>
        Explore our rooms
      </SectionTitle>
      <SectionDescription>
        <i>All bedrooms are fully furnished with a bed, desk, chair, lamp, and dresser.</i>
      </SectionDescription>
      <RoomGridContainer>
        <RoomGrid>
          {roomNumbers.map((roomNumber, index) => {
            const { width, height, offset } = getInfoForRoomNumber(roomNumber, index);
            return (
            <RoomItem index={index} offset={offset} key={index} width={width} height={height}
                onClick={() => handleClick(roomNumber)}>
              <RoomImage number={roomNumber} />
              <RoomTitle>{getRoomName(roomNumber)}</RoomTitle>
            </RoomItem>)
          })}
        </RoomGrid>
      </RoomGridContainer>
    </>
    
  )

}

export default RoomsList;