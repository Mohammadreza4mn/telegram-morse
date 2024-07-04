import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    backgroundColor: "var(--tg-theme-bg-color)",
    primaryText: "var(--tg-theme-text-color)",
    secondaryText: "var(--tg-theme-accent-text-color)",
    border: "var(--tg-theme-subtitle-text-color)",
    hoverBackgroundColor: "var(--tg-theme-secondary-bg-color)",
    errorBtn: "var(--tg-theme-destructive-text-color)",
    primaryBtn: "#31b545",
  },
  viewportHeight: "var(--tg-viewport-stable-height)",
};

export { theme };
