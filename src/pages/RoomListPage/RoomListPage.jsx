import RoomsList from "../../components/RoomsList/RoomsList";
import { RoomsListContainer } from './styled'
import NavBar from '../../components/NavBar/NavBar'

const RoomListPage = () => {
    return <>
        <NavBar tab={"Rooms"}/>
        <RoomsListContainer>
            <RoomsList />
        </RoomsListContainer> 
        
    </>
}

export default RoomListPage;