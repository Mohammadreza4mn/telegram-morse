import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    secondaryBg: "var(--tg-theme-secondary-bg-color)",
    primaryBg: "var(--tg-theme-section-bg-color)",
    buttonBg: "var(--tg-theme-button-color)",
    buttonTextColor: "var(--tg-theme-button-text-color)",
    primaryText: "var(--tg-theme-text-color)",
    secondaryText: "var(--tg-theme-section-header-text-color)",
    border: "var(--tg-theme-header-bg-color)",
    errorColor: "var(--tg-theme-destructive-text-color)",
    successColor: "#31b545",
  },
  viewportHeight: "var(--tg-viewport-stable-height)",
};

export { theme };
