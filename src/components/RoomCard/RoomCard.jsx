import React from 'react';
import { Link } from "react-router-dom";

const RoomCard = ({ roomID }) => {
  console.log("here1")

  return (
    <div>
      <Link to={`${roomID}`}>
        <h1> card {roomID} </h1>
      </Link>
    </div>
  );
}

export default RoomCard;