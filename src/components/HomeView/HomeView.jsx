import React from 'react';
import { Link } from "react-router-dom";

const HomeView = () => {

  return (
    <div>
      <h1> Home </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="rooms">Rooms</Link>
      </nav>
    </div>
  );
}

export default HomeView;