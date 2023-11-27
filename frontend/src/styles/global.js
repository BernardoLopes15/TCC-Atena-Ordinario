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
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    /* Animação aparecer TELA */
    .page-enter {
        opacity: 0;
        transform: translateY(10px);
    }

    .page-enter-active {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 300ms, transform 300ms;
    }

    .page-exit {
        opacity: 1;
        transform: translateY(0);
    }

    .page-exit-active {
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 300ms, transform 300ms;
    }

    /* Animação aparecer Navbar */
    .nav-enter {
        opacity: 0;
        transform: translateY(-10px);
    }

    .nav-enter-active {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 300ms, transform 300ms;
    }

    .nav-exit {
        opacity: 1;
        transform: translateY(0);
    }

    .nav-exit-active {
        opacity: 0;
        transform: translateY(-10px);
        transition: opacity 300ms, transform 300ms;
    }
`