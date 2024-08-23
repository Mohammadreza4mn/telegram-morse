import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends customTheme {
    colors: {
      secondaryBg: string;
      primaryText: string;
      buttonBg: string;
      buttonTextColor: string;
      primaryBg: string;
      secondaryText: string;
      border: string;
      successColor: string;
      errorColor: string;
    };
  }
}
