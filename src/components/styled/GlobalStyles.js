import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        background-color: cyan;
    }

    h1, h2, p {
        font-family: 'Roboto Slab', serif;
    }

    p {
        font-size: 16px;
    }

    h2 {
        font-size: 24;
    }

    h3 {
        font-size: 32;
    }
`
export {GlobalStyles}