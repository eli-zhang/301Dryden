
import NavBar from '../../components/NavBar/NavBar'
import RoomView from '../../components/RoomView/RoomView'
import { useParams } from 'react-router-dom';

const RoomPage = () => {
    const params = useParams();

    return <>
        <NavBar tab={"Rooms"}/>
        <RoomView id={params.id}/>
    </>
}

export default RoomPage;

