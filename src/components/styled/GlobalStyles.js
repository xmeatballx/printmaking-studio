import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
    }

    h1, h2, p {
        font-family: 'Roboto Slab', serif;
        margin: 10px;
        padding: 0px 20px;
    }

    h1 {
        font-weight: 700;
        font-size: 40px;
        padding-top: 10%;
    }

    h2 {
        font-size: 40px;
    }

    p {
        font-size: 20px;
    }

    @media all and (min-width: 50em) {
        h1 {
            font-weight: 700;
            font-size: 64px;
        }

        h2 {
            font-weight: 700;
            font-size: 32px;
        }

        p {
            font-size: 24px;
        }
    }
`
export {GlobalStyles}