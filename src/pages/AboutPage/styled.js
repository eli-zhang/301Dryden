import styled from 'styled-components';
import { accentColor } from '../../constants';

export const BackgroundContainer = styled.div`
    background-color: white;
    height: 150px;
    position: absolute;
    display: inline-block;
    width: 70%;
    left: 50%;
    margin-left: -37.5%;
    margin-top: 200px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.35);


    text-align: center;
    vertical-align: middle;
    line-height: 150px;
`

export const HeaderText = styled.span`
    color: ${accentColor};
    font-size: 2.6rem;
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0;
`

export const BlackHeaderText = styled.span`
    color: #333333;
`