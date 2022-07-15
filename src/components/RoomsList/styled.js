import styled from 'styled-components';
import room1 from '../../images/room1.jpg'
import room2 from '../../images/room2.jpg';
import room3 from '../../images/room3.jpg';
import room4 from '../../images/room4.jpg';
import room5 from '../../images/room5.jpg';
import room6 from '../../images/room6.jpg';
import room7 from '../../images/room7.jpg';
import room8 from '../../images/room8.jpg';
import room9 from '../../images/room9.jpg';
import room10 from '../../images/room10.jpg';
import room11 from '../../images/room11.jpg';
import room12 from '../../images/room12.jpg';
import room13 from '../../images/room13.jpg';
import room14 from '../../images/room14.jpg';
import room15 from '../../images/room15.jpg';

const ROWS_IN_GRID = 4;
const COLS_IN_GRID = 4;

const images = {
  room1, room2, room3, room4, room5,
  room6, room7, room8, room9, room10,
  room11, room12, room13, room14, room15,
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
    height: 1100px;
    place-items: stretch;
    background: none;
`

export const RoomItem = styled.div`
    grid-column-start: ${props => props.index % COLS_IN_GRID + 1};
    grid-row-start: ${props => Math.floor(props.index / COLS_IN_GRID) + 1};
    background: white;
    grid-column-end: span 1;
    grid-row-end: span 1;
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
    height: 80%;
    background-image: url(${props => getImageByKey(`room${props.number + 1}`)});
    background-repeat:no-repeat;
    background-size:cover;
    background-position: center bottom;
`

export const RoomTitle = styled.p`
    color: black;
    font-weight: 600;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
`