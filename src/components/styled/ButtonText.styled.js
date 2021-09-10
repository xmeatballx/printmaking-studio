import styled from 'styled-components'

const StyledButtonText = styled.p`
    margin: 0;
    mix-blend-mode: ${({primary}) => primary ? 'multiply' : 'none'};
    color: ${({primary}) => primary ? 'cyan' : 'white'};
`

export {StyledButtonText}