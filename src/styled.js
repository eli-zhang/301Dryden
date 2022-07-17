import styled from 'styled-components';
import logo from './images/logo.png'
import homeImage from './images/home.png';

const accentColor = "#f2843f"

export const Logo = styled.div`
    margin-top: -20px;
    margin-bottom: -20px;
    width: 140px;
    height: 140px;
    background-image: url(${logo});
    background-repeat:no-repeat;
    background-size:cover;
    background-position: center bottom;
`

export const Title = styled.h1`
    color: #333333;
    font-size: 30px;
    font-family: 'Cardo', serif;
    font-weight: 400;
    margin-left: 30px;
`

export const NavBar = styled.div`
    background-color: #FFFFFF;
    padding: 15px 20px;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.05);
    flex-basis: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NavItemsContainer = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const NavItem = styled.li`
    display: block;
    margin-left: 15px;
    margin-right: 15px;

    color: #444444;
    font-size: 1rem;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    transition: all 0.1s ease-in-out;
    position: relative;
    padding-left: 0;
    padding-right: 0;

    &:hover {
        color: black;
        cursor: pointer;
        &:before {
            transform: scaleX(1);
        }
    }

    &:before {  
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        z-index: 0;
        background-color: ${accentColor};
        transform: scaleX(${props => props.active ? 1 : 0});
        transform-origin: left;
        transition: transform 0.2s ease-out, opacity 0.2s ease-out 0.3s;
    }
`

export const ContactButton = styled.button`
    background-color: ${accentColor};
    color: white;
    margin-right: 15px;

    border-style: none;
    padding: 15px 20px;
    font-size: 1rem;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);

    &:hover {
        cursor: pointer;
    }
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
    right: 7%;
    width: 1000px;
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
    top: 45%;
    left: 5%;
    padding: 20px;
`

export const TaglineText = styled.span`
    color: ${accentColor};
    font-size: 1.7rem;
    text-transform: uppercase;
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