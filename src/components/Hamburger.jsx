import React, { useState } from 'react';
import { StyledHamburger, StyledHamburgerSlice } from './styled/Hamburger.styled';
import { NavLink } from './NavLink';
import Slide from 'react-reveal/Slide'
import { StyledNavList } from './styled/NavLink.styled';
import { Link } from 'react-router-dom';

const Hamburger = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <React.Fragment>
            <StyledHamburger onClick={openMenu}>
                <StyledHamburgerSlice />
                <StyledHamburgerSlice />
                <StyledHamburgerSlice />
            </StyledHamburger>
            <StyledNavList>
                <Slide right when={menuOpen}>
                    <Link to="/upload">
                        <NavLink>Create</NavLink>
                    </Link>
                    <NavLink>Docs</NavLink>
                </Slide>
            </StyledNavList>
        </React.Fragment>
    )
}

export { Hamburger }