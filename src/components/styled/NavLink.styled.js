import styled from 'styled-components'

const StyledNavLink = styled.li`
    font-family: 'Roboto Slab', serif;
    padding: 10px;
    width: 100vw;
    text-align: center;
    background-color: black;
    color: white;
`

const StyledNavList = styled.ul`
    position: absolute;
    top: 7vh;
    left: 0;
    z-index: 0;
    list-style: none;
    padding: 0;
`

export {StyledNavLink,StyledNavList}