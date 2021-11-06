import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 7vh;
    background-color: black;
    overflow: visible;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    @media all and (min-width: 50em) {
        height: 8vhpx;
    }
`
export {Nav}