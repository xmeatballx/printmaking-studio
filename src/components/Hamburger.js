import React, {useState} from 'react';
import { StyledHamburger, StyledHamburgerSlice } from './styled/Hamburger.styled';
import { NavLink } from './NavLink';
import Fade from 'react-reveal/Fade'
import { StyledNavList } from './styled/NavLink.styled';

const Hamburger = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <React.Fragment>
            <StyledHamburger onClick={openMenu}>
                <StyledHamburgerSlice/>
                <StyledHamburgerSlice/>
                <StyledHamburgerSlice/>
            </StyledHamburger>
                <StyledNavList>
            <Fade top when={menuOpen}>
                    <NavLink>Create</NavLink>
                    <NavLink>Docs</NavLink>
            </Fade>
                </StyledNavList>
        </React.Fragment>
    )
}

export {Hamburger}