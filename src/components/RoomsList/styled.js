import styled from 'styled-components';
import room101 from '../../images/room101.jpg'
import room102 from '../../images/room102.jpg';
import room103 from '../../images/room103.jpg';
import room104 from '../../images/room104.jpg';
import room105 from '../../images/room105.jpg';
import room106 from '../../images/room106.jpg';
import room201 from '../../images/room201.jpg';
import room202 from '../../images/room202.jpg';
import room203 from '../../images/room203.jpg';
import room204 from '../../images/room204.jpg';
import room205 from '../../images/room205.jpg';
import room301 from '../../images/room301.jpg';
import room302 from '../../images/room302.jpg';
import room303 from '../../images/room303.jpg';
import room304 from '../../images/room304.jpg';
import room0 from '../../images/living_room.jpg';
import room1 from '../../images/kitchen.jpg';
import room2 from '../../images/bathroom.jpg';

const ROWS_IN_GRID = 6;
const COLS_IN_GRID = 4;

const images = {
  room0, room1, room2,
  room101, room102, room103, room104, room105,
  room106, room201, room202, room203, room204,
  room205, room301, room302, room303, room304,
};

function getImageByKey(key) {
  return images[key]
}

export const RoomGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(COLS_IN_GRID, 1fr);
    column-gap: 20px;
    row-gap: 20px;
    grid-template-rows: auto;
    height: 1800px;
    place-items: stretch;
    background: none;
`

export const RoomItem = styled.div`
    grid-column-start: ${props => (props.index + props.offset) % COLS_IN_GRID + 1};
    grid-row-start: ${props => Math.floor((props.index + props.offset) / COLS_IN_GRID) + 1};
    background: white;
    grid-column-end: span ${props => props.width};
    grid-row-end: span ${props => props.height};
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    transition: all .1s ease-in-out;
    &:hover {
        cursor: pointer;
        transform: scale(1.02);
    }
`

export const RoomImage = styled.div`
    width: 100%;
    height: calc(100% - 50px);
    background-image: url(${props => getImageByKey(`room${props.number}`)});
    background-repeat:no-repeat;
    background-size:cover;
    background-position: center bottom;
    filter: contrast(70%) saturate(140%);
`

export const RoomTitle = styled.p`
    color: black;
    margin-top: 15px;
    font-weight: 600;
    font-size: 14px;
    font-family: 'Ubuntu', sans-serif;
    text-transform: uppercase;
`