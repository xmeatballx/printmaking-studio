import styled from 'styled-components'

const StyledBodyText = styled.p`
    mix-blend-mode: multiply;
    color: ${({color}) => color};

    @media all and (min-width: 50em) {
        
    }
`
export {StyledBodyText}