import styled from 'styled-components';

import { accentColor } from '../../constants';

const ROWS_IN_GRID = 6;
const COLS_IN_GRID = 4;

function getImageByKey(key) {
    switch (key) {
        case 0:
            return require(`../../images/livingroom/livingroom-1.jpg`);
        case 1:
            return require(`../../images/kitchen/kitchen-1.jpg`);
        case 2:
            return require(`../../images/bathroom/bathroom-1.jpg`);
        default:
            return require(`../../images/room${key}/room${key}-1.jpg`);
    }
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
    background-image: url(${props => getImageByKey(props.number)});
    background-repeat:no-repeat;
    background-size:cover;
    background-position: center bottom;
    filter: contrast(70%) saturate(140%);
`

export const RoomTitle = styled.p`
    color: black;
    margin-top: 13px;
    font-weight: 600;
    font-size: 14px;
    font-family: 'Ubuntu', sans-serif;
    text-transform: uppercase;
`

export const RoomGridContainer = styled.div`
    margin: 40px 80px;
`

export const SectionTitle = styled.h1`
    margin-top: 35px;
    margin-bottom: 20px;
    color: ${accentColor};
    font-family: 'Oswald', sans-serif;
    font-size: 2.4rem;
    text-align: center;
    font-weight: 400;
    text-transform: uppercase;
`

export const SectionDescription = styled.h1`
    color: #333333;
    font-size: 1rem;
    text-align: center;
    font-family: 'Cardo', serif;
    font-weight: 400;
`