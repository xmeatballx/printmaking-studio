import styled from 'styled-components'

const StyledButton = styled.button`
    color: ${({primary}) => primary ? 'cyan' : 'white'};
    background: ${({primary}) => primary ? 'yellow' : 'white'};
    border-radius: 3px;
    padding: 6px 17px;
    margin: 0 10px;
    border: 3px solid yellow;
`

export {StyledButton}