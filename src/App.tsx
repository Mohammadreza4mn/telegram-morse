import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Home from "pages/Home";
import GlobalStyles from "styles/global";
import {
  darkTheme,
  defaultColorThemeName,
  lightTheme,
  type ThemeName,
} from "theme";

function App() {
  const [mode, _] = useState<ThemeName>(defaultColorThemeName);
  const theme = mode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
