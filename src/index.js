import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RoomPage from './pages/RoomPage/RoomPage';
import RoomListPage from './pages/RoomListPage/RoomListPage';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <BrowserRouter >
    {/* <button onClick={navigateToRooms}>Rooms</button> */}

    <Routes>
      <Route path="/">
        <Route index={true} element={<HomePage />} />
      </Route>
      <Route path="/rooms" >
        <Route index={true} element={<RoomListPage />} />
        <Route index={false} path=":id" element={<RoomPage />} />
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  </BrowserRouter >

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
