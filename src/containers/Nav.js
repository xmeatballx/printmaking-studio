import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 9vh;
    background-color: black;
    overflow: auto;

    @media all and (min-width: 50em) {
        height: 8vhpx;
    }
`
export {Nav}