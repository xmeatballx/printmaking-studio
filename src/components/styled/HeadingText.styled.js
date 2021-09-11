import styled from 'styled-components'

const StyledHeadingText = styled.h1`
    mix-blend-mode: ${({mult}) => mult ? 'multiply' : ''};
    color: ${({color}) => color};
    text-align: ${({alignment}) => alignment};
`
export {StyledHeadingText}