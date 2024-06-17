import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: unset;
        padding: unset;
    }
    * {
        transition: 0.3s ease-out;
        font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
        background-color: ${({ theme }) => theme.colors.backgroundColor};
        outline: none;
    }
`;

export default GlobalStyles;
