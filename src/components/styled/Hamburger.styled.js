import styled from 'styled-components'

const StyledHamburgerSlice = styled.span`
    background-color: white;
    width: 24px;
    height: 2.5px;
    margin: 2.5px;
`
const StyledHamburger = styled.div`
    flex: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 100%; 
`
export {StyledHamburgerSlice, StyledHamburger}