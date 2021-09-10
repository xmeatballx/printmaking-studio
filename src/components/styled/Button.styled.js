import styled from 'styled-components'

const StyledButton = styled.button`
    background: ${({primary}) => primary ? 'yellow' : 'none'};
    border-radius: 3px;
    padding: 6px 17px;
    margin: 0 10px;
    border: 3px solid yellow;
`

export {StyledButton}