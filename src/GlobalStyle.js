import { createGlobalStyle } from "styled-components";
import normalize from './normalize.css';

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    :root {
        --white: #fff;
        --lightGrey:
        --mediumGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontExtaBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMedium: 1.2rem;
        --fontSmall: 1rem;
    }

    * {
        box-sizing: border-box;
        font-family: Helvetica;
    }

    body {
        margin: 0;
        padding: 0;

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
            color: var(--white);
        }
    }
`;