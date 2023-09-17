import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family:var(--font-family); 
    }

    ul, ol, li{
        list-style:none;
    }

    button{
        cursor: pointer;
        background: transparent;
        border: 0;
    }

    :root {
        --cyan-900: #0b7285;
        --cyan-700: ##0c8599;
        --cyan-500: #22b8cf;
        --grey-300:#343a40;
        --font-family:"JetBrains Mono", monospace;
    }
`;
