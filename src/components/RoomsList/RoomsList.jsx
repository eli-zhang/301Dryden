import React from 'react';
import { COLS_IN_GRID, RoomGridContainer, RoomGrid, RoomItem, RoomImage, RoomTitle, SectionTitle, SectionDescription } from './styled'
import { Link, useNavigate } from "react-router-dom";
import { calculateTileInfo } from '../../utils/utils'

// const roomNumbers = [101, 102, 103, 104, 105, 0, 1, 106, 201, 202, 203, 204, 205, 301, 302, 303, 2, 304]
const roomNumbers = [101, 102, 103, 104, 105, 106, 201, 202, 203, 204, 205, 301, 302, 303, 304]

const specialRooms = { 0: [3, 1], 1: [2, 2], 2: [2, 1] };
const { offsets, sizes } = calculateTileInfo(roomNumbers, specialRooms, COLS_IN_GRID);

const getRoomName = (roomNumber) => {
  switch (roomNumber) {
    case 0: return "Living Room"
    case 1: return "Kitchen"
    case 2: return "Bathrooms"
  }
  return `Room ${roomNumber}`;
}


const getInfoForRoomNumber = (roomNumber, index) => {
  if (specialRooms[roomNumber]) {
    return { width: sizes[roomNumber][0], height: sizes[roomNumber][1], offset: offsets[index]};
  }
  return { width: 1, height: 1, offset: offsets[index] };
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
        <RoomGrid count={roomNumbers.length}>
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