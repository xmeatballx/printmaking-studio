import styled from 'styled-components'

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: ${({cta}) => cta ? 'center' : ''};
    justify-content: ${({cta}) => cta ? 'center' : ''};
    height: 100vh;
    background: ${({solid, solidbg, bg, flip }) => solid ? solidbg : bg ? `conic-gradient(from ${flip ? '-163.65deg' : '163.65deg'} at 50% 50%, ${bg} 0deg, white 390deg)` : ''};
`

export {Section}