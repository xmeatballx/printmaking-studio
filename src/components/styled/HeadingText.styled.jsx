import styled from 'styled-components'

const StyledHeadingText = styled.h1`
    //mix-blend-mode: ${({mult}) => mult ? 'multiply' : ''};
    color: ${({color}) => color};
    text-align: ${({alignment}) => alignment};

    @media all and (min-width: 50em) {
        /* position: ${({overlay}) => overlay ? 'absolute' : 'realtive'};
        width: ${({overlay}) => overlay ? '60vh' : '100%'};
        top: ${({overlay}) => overlay ? '10vh' : ''};
        left: 0;
        z-index: 100; */
    }
`
export {StyledHeadingText}