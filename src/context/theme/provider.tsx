import { FC, ReactNode } from "react";
import { ThemeProvider as ThemeStyled } from "styled-components";
import { theme } from "theme";

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <ThemeStyled theme={theme}>{children}</ThemeStyled>;
};

export default ThemeProvider;
