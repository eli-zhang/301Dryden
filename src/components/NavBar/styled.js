import styled from 'styled-components'
import logo from '../../images/logo.png'
import { accentColor } from '../../constants'

export const Logo = styled.div`
    width: 80px;
    height: 80px;
    margin: 5px;
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

export const NavBarContainer = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1;
    box-sizing: border-box;
    background-color: #FFFFFF;
    padding: 10px 20px;
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

export const FilledButton = styled.button`
    background-color: ${accentColor};
    color: white;
    margin-right: 15px;

    border-style: none;
    padding: 15px 20px;
    font-size: 1rem;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    /* box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05); */

    &:hover {
        cursor: pointer;
    }
`
