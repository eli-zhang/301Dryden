import styled from 'styled-components';
import homeImage from '../../images/home.png';
import { accentColor } from '../../constants';

export const EmptyButton = styled.button`
    background-color: rgba(0, 0, 0, 0);
    color: ${accentColor};

    border: 1px solid ${accentColor};
    padding: 12px 20px;
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
    top: 58%;
    left: 70px;
`

export const BackgroundHeaderContainer = styled.div`
    /* // margin-top: 110px; */
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
    width: calc(95% - 325px);
    height: 600px;
    background-image: url(${homeImage});
    background-repeat:no-repeat;
    background-size:cover;
    background-position: center bottom;
`

export const TaglineContainer = styled.div`
    position: absolute;
    background-color: rgba(255, 255, 255, 0.95);
    display: inline-block;
    top: 47%;
    left: 70px;
    padding: 10px 15px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);

`

export const TaglineText = styled.span`
    color: ${accentColor};
    font-size: 1.7rem;
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
`

export const UtilitiesInfoContainer = styled.div`
    position: relative;
    margin: 0 70px;
    padding: 30px;
`

export const SideLine = styled.div`
    position: absolute;
    left: 0;
    height: 70%;
    width: 4px;
    top: 15%;
    background-color: ${accentColor};
`


export const UtilitiesTaglineHeader = styled.h1`
    color: #555555;
    font-size: 2rem;
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    /* text-transform: uppercase; */
`

export const UtilitiesTagline = styled.span`
    color: #333333;
    font-size: 1rem;
    font-family: 'Cardo', serif;
    font-weight: 400;
`

export const UtilitiesTaglineHighlight = styled.b`
    color: ${accentColor};
`

export const SectionSpacer = styled.div`
    width: 100%;
    height: 60px;
`