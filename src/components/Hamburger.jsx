import React, {useState} from 'react';
import { StyledHamburger, StyledHamburgerSlice } from './styled/Hamburger.styled';
import { NavLink } from './NavLink';
import Slide from 'react-reveal/Slide'
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
            <Slide right when={menuOpen}>
                    <NavLink>Create</NavLink>
                    <NavLink>Docs</NavLink>
            </Slide>
                </StyledNavList>
        </React.Fragment>
    )
}

export {Hamburger}