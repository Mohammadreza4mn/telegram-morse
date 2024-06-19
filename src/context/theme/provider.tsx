import { useTelegram } from "context/telegram";
import { FC, ReactNode } from "react";
import { darkTheme, lightTheme } from "theme";
import { ThemeProvider as ThemeStyled } from "styled-components";

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { colorScheme } = useTelegram();

  const theme = colorScheme === "light" ? lightTheme : darkTheme;

  return <ThemeStyled theme={theme}>{children}</ThemeStyled>;
};

export default ThemeProvider;
