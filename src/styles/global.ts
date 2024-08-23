import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: unset;
        padding: unset;
        background-color: ${({ theme }) => theme.colors.secondaryBg};
        font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
    }
    * {
        -webkit-tap-highlight-color: transparent;
    }
`;

export default GlobalStyles;
