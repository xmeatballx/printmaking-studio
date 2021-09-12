import styled from 'styled-components'

const StyledImageCard = styled.div`
    background-image: ${({source}) => source ? `url(${source})` : ''};
    background-size: ${({hero}) => hero ? '170%' : '100%'};
    background-position-x: right;
    background-position-y: bottom;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    height: 50vh;

    @media all and (min-width: 50em) {
        height: 100vh;
        background-size: 100%;
        background-position-y: top;
        width: ${({hero}) => hero ? '100vw' : '50vw'};
    }
`

export {StyledImageCard}