import React from 'react';
import { COLS_IN_GRID, RoomGridContainer, RoomGrid, RoomItem, RoomImage, RoomTitle, SectionTitle, SectionDescription } from './styled'
import { Link, useNavigate } from "react-router-dom";
import { calculateTileInfo } from '../../utils/utils'
import { useState, useEffect } from 'react';
import { getRooms } from '../../requests/graphql'

// const roomNumbers = [101, 102, 103, 104, 105, 0, 1, 106, 201, 202, 203, 204, 205, 301, 302, 303, 2, 304]
const defaultRoomNumbers = [101, 102, 103, 104, 105, 106, 201, 202, 203, 204, 205, 301, 302, 303, 304]
const defaultPrices = { 101: 995, 102: 965, 103: 935, 104: 950, 105: 995, 106: 975,
  201: 995, 202: 975, 203: 950, 204: 995, 205: 950, 
  301: 895, 302: 895, 303: 855, 304: 910 }
const defaultRooms = defaultRoomNumbers.map((number) => { return { number, price: defaultPrices[number]}})
const defaultSpecialRooms = { 0: [3, 1], 1: [2, 2], 2: [2, 1], 106: [2, 2], 301: [2, 2], 302: [2, 2] };
const { offsets, sizes } = calculateTileInfo(defaultRoomNumbers, defaultSpecialRooms, COLS_IN_GRID);

const getRoomName = (roomNumber) => {
  switch (roomNumber) {
    case 0: return "Living Room"
    case 1: return "Kitchen"
    case 2: return "Bathrooms"
  }
  return `Room ${roomNumber}`;
}

const getInfoForRoomNumber = (roomNumber, specialRooms, index) => {
  if (specialRooms[roomNumber]) {
    return { width: sizes[roomNumber][0], height: sizes[roomNumber][1], offset: offsets[index]};
  }
  return { width: 1, height: 1, offset: offsets[index] };
}

const RoomsList = () => {
  let navigate = useNavigate();
  const [rooms, setRooms] = useState(defaultRooms);
  const [specialRooms, setSpecialRooms] = useState(defaultSpecialRooms);

  const handleClick = (room) => {
    navigate(`/rooms/${room.number}`, { state: { room }});
  }

  const getImageUrlForRoom = (room) => {
    if (room && room.images && room.images.length > 0) {
      room.images.sort((a, b) => { return a.fileName.localeCompare(b.fileName); });
      return room.images[0].url;
    }
  }

  useEffect(() => {
    const fetchRooms = async () => {
      const roomData = await getRooms();
      if (roomData) { 
        setRooms(roomData["rooms"]);
      }
    }

    fetchRooms();
  }, [])

  return (
    <>
      <SectionTitle>
        Explore our rooms
      </SectionTitle>
      <SectionDescription>
        <i>All bedrooms are fully furnished with a bed, desk, chair, lamp, and dresser.</i>
      </SectionDescription>
      <RoomGridContainer>
        <RoomGrid count={rooms.length}>
          {rooms.map((room, index) => {
            const roomNumber = room.number;
            const { width, height, offset } = getInfoForRoomNumber(roomNumber, specialRooms, index);
            return (
              <RoomItem index={index} offset={offset} key={index} width={width} height={height}
                onClick={() => handleClick(room)}>
                <RoomImage number={roomNumber} url={getImageUrlForRoom(room)}/>
                <RoomTitle>{getRoomName(roomNumber)}</RoomTitle>
              </RoomItem>)
          })}
        </RoomGrid>
      </RoomGridContainer>
    </>

  )

}

export default RoomsList;