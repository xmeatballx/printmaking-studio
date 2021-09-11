import styled from 'styled-components'

const StyledButton = styled.button`
    background: ${({primary}) => primary ? 'yellow' : 'none'};
    border-radius: 3px;
    padding: 6px 17px;
    margin: 20px;
    border: 3px solid yellow;
    width: 119px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export {StyledButton}