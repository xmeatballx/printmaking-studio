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
`

export {StyledImageCard}