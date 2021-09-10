import styled from 'styled-components'

const StyledButtonText = styled.p`
    margin: 0;
    mix-blend-mode: multiply;
    color: ${({primary}) => primary ? 'cyan' : 'white'};
`

export {StyledButtonText}