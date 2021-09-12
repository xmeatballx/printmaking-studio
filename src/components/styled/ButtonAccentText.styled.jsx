import styled from 'styled-components'

const StyledButtonAccentText = styled.p`
    margin: 0;
    color: ${({primary}) => primary ? 'cyan' : 'white'};
`

export {StyledButtonAccentText}