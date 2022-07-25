import RoomsList from "../../components/RoomsList/RoomsList";
import NavBar from '../../components/NavBar/NavBar'

const RoomListPage = () => {
    return <>
        <NavBar tab={"Rooms"}/>
        <RoomsList />
    </>
}

export default RoomListPage;