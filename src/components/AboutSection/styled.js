import styled from 'styled-components'
import map from '../../images/map.png';
import homeExterior from '../../images/home_exterior.jpg';
import { accentColor } from '../../constants';

export const AboutContainer = styled.div`
    /* margin-top: 0px; */
    /* margin-bottom: 60px; */
    position: relative;
    height: 600px;
`

export const AboutBackgroundRect = styled.div`
    position: absolute;
    top: 0;
    background-color: #F3F3F3;
    height: 600px;
    display: block;
    width: 70%;
    right: 0;
`;


export const AboutImage = styled.div`
    position: absolute;
    margin-top: 50px;
    top: 0;
    left: 70px;
    width: 50%;
    height: 500px;
    background-image: url(${homeExterior});
    background-repeat:no-repeat;
    background-size:cover;
    background-position: center bottom;
    filter: contrast(70%) saturate(140%);
`

export const AboutTextContainer = styled.div`
    position: absolute;
    top: 0;
    left: calc(50% + 70px);
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 120px;
    /* padding: 20px 40px; */
    /* background-color: white; */
`

export const AboutTitle = styled.h1`
    color: ${accentColor};
    font-size: 3.2rem;
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 20px;
`

export const AboutDescription = styled.p`
    color: #333333;
    font-size: 1rem;
    font-family: 'Cardo', serif;
    font-weight: 400;
    line-height: 1.6;
`

export const ViewMapButtonContainer = styled.div`
    display: inline-block;
    margin-top: 15px;
    left: 70px;
`

export const Map = styled.div`
    position: absolute;
    margin-top: 50px;
    top: 0;
    left: 70px;
    width: 50%;
    height: 500px;
    background-image: url(${map});
    background-repeat:no-repeat;
    background-size:cover;
    background-position: center bottom;
`