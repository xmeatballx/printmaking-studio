import React, { useState } from 'react';
import { StyledHamburger, StyledHamburgerSlice } from './styled/Hamburger.styled';
import { NavBarLink } from './NavLink';
import Fade from 'react-reveal/Fade'
import { StyledNavList } from './styled/NavLink.styled';
import { Link } from 'react-router-dom';

const Hamburger = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <>
            <StyledHamburger onClick={openMenu}>
                <StyledHamburgerSlice />
                <StyledHamburgerSlice />
                <StyledHamburgerSlice />
            </StyledHamburger>
            <StyledNavList>
                <Link to="/upload">
                    <Fade right when={menuOpen}>
                        <NavBarLink>Create</NavBarLink>
                    </Fade>
                </Link>
                <Link to="/docs">
                    <Fade left when={menuOpen}>
                        <NavBarLink>Docs</NavBarLink>
                    </Fade>
                </Link>
            </StyledNavList>
        </>
    )
}

export { Hamburger }