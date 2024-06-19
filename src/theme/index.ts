import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
  colors: {
    backgroundColor: "#ffffff",
    primaryText: "#3c4043",
    secondaryText: "#1a73e8",
    border: "#0000001f",
    hoverBackgroundColor: "#f5f5f5",
  },
  mode: "light",
};

const darkTheme: DefaultTheme = {
  colors: {
    backgroundColor: "#202124",
    primaryText: "#979a9e",
    secondaryText: "#bdc1c6",
    border: "#bdc1c680",
    hoverBackgroundColor: "#bdc1c610",
  },
  mode: "dark",
};

export { darkTheme, lightTheme };
