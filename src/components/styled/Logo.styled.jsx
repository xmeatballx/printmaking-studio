import styled from 'styled-components'

const StyledLogoText = styled.h2`
    font-size: 24pt;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    mix-blend-mode: exclusion;
    color: ${({color}) => color ? color : 'black'};
    transform: ${({offset}) => offset ? `translateX(${offset})` : 'none'};
`
const StyledLogo = styled.div`
    position: relative;
    width: 75%;
    height: 50px;
    margin: auto 1em;
    overflow: visible;
`
export {StyledLogoText, StyledLogo}