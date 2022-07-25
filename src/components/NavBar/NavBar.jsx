import React from 'react';
import { Link } from "react-router-dom";
import { Logo, Title, NavBarContainer, NavItem, NavItemsContainer, FilledButton } from './styled'

const NavBar = ({ tab }) => {

    return <NavBarContainer>
        <Link to="/" style={{ textDecoration: 'none' }}><Logo /></Link>
        <NavItemsContainer>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <NavItem active={tab === "Home"}>Home</NavItem>
            </Link>
            <Link to="/rooms" style={{ textDecoration: 'none' }}>
                <NavItem active={tab === "Rooms"}>Rooms</NavItem>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
                <NavItem active={tab === "About"}>About</NavItem>
            </Link>
            {/* <Link to="/contact" style={{ textDecoration: 'none' }}>
                <NavItem active={tab === "Contact"}>Contact</NavItem>
            </Link> */}
        </NavItemsContainer>
        <Link to="/about" style={{ textDecoration: 'none' }}><FilledButton>Contact Us</FilledButton></Link>
    </NavBarContainer>       
}

export default NavBar;