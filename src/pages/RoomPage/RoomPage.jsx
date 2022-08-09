
import NavBar from '../../components/NavBar/NavBar'
import RoomView from '../../components/RoomView/RoomView'
import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { getRoom } from '../../requests/graphql'

const RoomPage = () => {
    const { id } = useParams();
    const { state } = useLocation();
    const [room, setRoom] = useState();

    useEffect(() => {
        const fetchRoom = async (roomNumber) => {
            const roomData = await getRoom(roomNumber);
            if (roomData) { 
                setRoom(roomData["room"])
            }
        }

        if (state && state.room) {
            setRoom(state.room);
        } else {
            if (id) {
                fetchRoom(id);
            }
        }
    }, [state, id])

    return <>
        <NavBar tab={"Rooms"}/>
        {room && <RoomView id={id} room={room}/>}
    </>
}

export default RoomPage;

