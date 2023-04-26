import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    background-color: ${({ theme }) => theme.background};
    display: grid;
    grid-template-rows: 1fr;
    font-family: 'Work Sans', sans-serif;
    height: 100vh;
    margin: 0;
};
`;
