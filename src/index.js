import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RoomView from './components/RoomView/RoomView';
import RoomsList from './components/RoomsList/RoomsList';


const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <BrowserRouter >
    {/* <button onClick={navigateToRooms}>Rooms</button> */}

    <Routes>
      <Route path="/">
        <Route index={true} element={<App />} />
      </Route>
      <Route path="/rooms" >
        <Route index={true} element={<RoomsList />} />
        <Route index={false} path=":id" element={<RoomView />} />
      </Route>
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter >

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
