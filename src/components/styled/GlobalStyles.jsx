import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        /* font-size: 80%; */
    }

    body {
        background: cyan;
    }

    .react-reveal{
        animation-fill-mode: backwards !important;
    }

    main {
        margin: 1em;
    }

    main section {
        margin: 1em 0;
    }

    h1, h2, p, label {
        font-family: 'Roboto Slab', serif;
    }

    h1 {
        font-weight: 700;
        font-size: 40px;
        /* padding-top: 10%; */
    }

    h2 {
        font-size: 40px;
    }

    p {
        font-size: 16px;
    }

    a {
        text-decoration: none;
    }

    fieldset {
        padding: 0;
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
`;
export { GlobalStyles };
