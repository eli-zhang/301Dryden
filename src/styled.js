import styled from 'styled-components';
import room1 from './images/room1.jpg';

export const Title = styled.h1`
    color: #222222;
    font-size: 40px;
`

export const RoomGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 10px;
    grid-template-rows: auto;
    height: 400px;
    row-gap: 10px;
    place-items: stretch;
    background: #F1F1F6;
`

export const RoomItem = styled.div`
    grid-column-start: ${props => props.col};
    grid-row-start: ${props => props.row};
    background: white;
    grid-column-end: span 1;
    grid-row-end: span 1;
`

export const RoomImage = styled.div`
    width: 100%;
    height: 70%;
    background-image: url(${room1});
    background-repeat:no-repeat;
    background-size:cover;
`

export const RoomTitle = styled.p`
    color: black;
`