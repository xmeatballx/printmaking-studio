import React from 'react';
import { StyledHamburger, StyledHamburgerSlice } from './styled/Hamburger.styled';

const Hamburger = (() => {
    return (
        <React.Fragment>
            <StyledHamburger>
                <StyledHamburgerSlice/>
                <StyledHamburgerSlice/>
                <StyledHamburgerSlice/>
            </StyledHamburger>
        </React.Fragment>
    )
})

export {Hamburger}