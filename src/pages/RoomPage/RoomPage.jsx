
import NavBar from '../../components/NavBar/NavBar'
import RoomView from '../../components/RoomView/RoomView'
import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'

const RoomPage = () => {
    const params = useParams();
    const { state } = useLocation();
    const [room, setRoom] = useState();

    useEffect(() => {
        if (state) {
          setRoom(state.room);
        }
    }, [state])

    return <>
        <NavBar tab={"Rooms"}/>
        <RoomView id={params.id} room={room}/>
    </>
}

export default RoomPage;

