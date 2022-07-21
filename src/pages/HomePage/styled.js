import styled from 'styled-components';
import homeImage from '../../images/home.png';
import map from '../../images/map.png';
import { accentColor } from '../../constants'

export const EmptyButton = styled.button`
    background-color: rgba(0, 0, 0, 0);
    color: ${accentColor};

    border: 1px solid ${accentColor};
    padding: 15px 20px;
    font-size: 1rem;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);

    &:hover {
        cursor: pointer;
    }
`

export const EmptyButtonContainer = styled.div`
    position: absolute;
    display: inline-block;
    top: 60%;
    left: 70px;
`

export const BackgroundHeaderContainer = styled.div`
    position: relative;
    height: 700px;
`

export const BackgroundSquare = styled.div`
    position: absolute;
    top: 0;
    background-color: #F3F3F3;
    height: 700px;
    display: block;
    width: 70%;
`;

export const LargeHomeImage = styled.div`
    position: absolute;
    margin-top: 50px;
    top: 0;
    left: 325px;
    width: 70%;
    height: 600px;
    background-image: url(${homeImage});
    background-repeat:no-repeat;
    background-size:cover;
    background-position: center bottom;
`

export const TaglineContainer = styled.div`
    position: absolute;
    background-color: rgba(255, 255, 255, 1);
    display: inline-block;
    top: 47%;
    left: 70px;
    padding: 15px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);

`

export const TaglineText = styled.span`
    color: ${accentColor};
    font-size: 2.5rem;
    font-family: 'Bebas Neue', cursive;
    font-weight: 400;
    text-transform: uppercase;
`

export const MapContainer = styled.div`
    position: relative;
    height: 500px;
`

export const Map = styled.div`
    position: absolute;
    margin-top: 50px;
    top: 0;
    left: 70px;
    width: 40%;
    height: 400px;
    background-image: url(${map});
    background-repeat:no-repeat;
    background-size:cover;
    background-position: center bottom;
`

export const SectionTitle = styled.h1`
    margin-top: 70px;
    color: ${accentColor};
    font-size: 1.9rem;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
`

export const SectionDescription = styled.h1`
    margin-top: 20px;
    color: #333333;
    font-size: 1rem;
    text-align: center;
    font-family: 'Cardo', serif;
    font-weight: 400;
`

export const RoomsListContainer = styled.div`
    margin: 40px 80px;
`