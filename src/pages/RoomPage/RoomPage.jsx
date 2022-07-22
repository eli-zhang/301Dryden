
import NavBar from '../../components/NavBar/NavBar'
import RoomView from '../../components/RoomView/RoomView'
import { RoomViewContainer } from './styled';
import { useParams } from 'react-router-dom';

const RoomPage = () => {
    const params = useParams();

    return <>
        <NavBar tab={"Rooms"}/>
        <RoomViewContainer>
            <RoomView id={params.id}/>
        </RoomViewContainer>
    </>
}

export default RoomPage;

