import styled from 'styled-components';

export const Title = styled.h1`
    color: #333333;
    font-size: 30px;
    font-family: 'Cardo', serif;
    font-weight: 400;
    margin-left: 30px;
`

export const NavBar = styled.div`
    background-color: #FFFFFF;
    padding: 20px;
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

    color: #222222;
    font-size: 25px;
    font-family: 'Ubuntu', sans-serif;
    text-transform: uppercase;
    font-weight: 400;

    font-size: 1.1rem;
    color: #555555;
    font-weight: 600;
    letter-spacing: 0.03em;
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
        background-color: #FFA754;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.2s ease-out, opacity 0.2s ease-out 0.3s;
    }


`
