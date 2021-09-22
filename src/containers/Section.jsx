import styled from 'styled-components'

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: ${({ cta }) => cta ? 'center' : ''};
    justify-content: ${({ cta }) => cta ? 'center' : ''};
    height: ${({ small }) => small ? '90vh' : '100vh'};
    background: ${({ solid, solidbg, bg, flip }) => solid ? solidbg : bg ? `conic-gradient(from ${flip ? '-163.65deg' : '163.65deg'} at 50% 50%, ${bg} 0deg, white 390deg)` : ''};
    
    @media all and(min-width: 50em) {
        flex-direction: ${({ bisect, reverse }) => reverse ? 'row-reverse' : bisect ? 'row' : 'column'};
        align-items: center;
    }
`
const TextContainer = styled.div`

margin-top: 1em;
overflow: hidden;

@media all and(min-width: 50em) {
    display: flex;
    flex-direction: column;
    padding: 50px;

    position: ${({ overlay }) => overlay ? 'absolute' : 'realtive'};
    width: ${({ overlay }) => overlay ? '60vw' : '100%'};
    top: ${({ overlay }) => overlay ? '10vh' : ''};
    left: 0;
}
`

export { Section, TextContainer }