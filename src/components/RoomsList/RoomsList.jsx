import React from 'react';
import RoomCard from '../RoomCard/RoomCard';

const RoomsList = () => {
  console.log("here")

  return (
    <div>
      <h2> bro </h2>
      <RoomCard roomID={1} />
      {/* {[...Array(15)].map((_, i) => {
        <RoomCard roomID={i} />
      })} */}
    </div>
  )

}

export default RoomsList;