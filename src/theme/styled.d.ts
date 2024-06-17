import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends customTheme {
    colors: {
      primaryText: string;
      secondaryText: string;
      backgroundColor: string;
      border: string;
      hoverBackgroundColor: string;
    };
    mode: "dark" | "light";
  }
}
