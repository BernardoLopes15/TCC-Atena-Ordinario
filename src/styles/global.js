import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body{
        color: #000;
        background-color: #fff;
        font-family: 'Maven Pro', sans-serif;
    }
`