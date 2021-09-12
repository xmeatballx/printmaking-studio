import styled from 'styled-components'

const StyledButtonAccent = styled.button`
    background: ${({primary}) => primary ? 'white' : 'none'};
    border-radius: 3px;
    padding: 6px 17px;
    margin: 0 10px;
    border: 3px solid white;
`

export {StyledButtonAccent}