import styled from 'styled-components';
import homeImage from '../../images/home.png';
import map from '../../images/map.png';
import homeExterior from '../../images/home_exterior.jpg';
import { accentColor } from '../../constants';

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

    transition: background-color 0.5s ease;

    &:hover {
        cursor: pointer;
        background-color: white;
    }
`

export const ExploreRoomsButtonContainer = styled.div`
    position: absolute;
    display: inline-block;
    top: 60%;
    left: 70px;
`

export const BackgroundHeaderContainer = styled.div`
    // margin-top: 110px;
    position: relative;
    height: 700px;
`

export const HeaderBackgroundRect = styled.div`
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
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
`

export const AboutContainer = styled.div`
    margin-top: 150px;
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
    margin-top: 130px;
    /* padding: 20px 40px; */
    /* background-color: white; */
`

export const AboutTitle = styled.h1`
    color: ${accentColor};
    font-size: 3.5rem;
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0;
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