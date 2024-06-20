import { ButtonHTMLAttributes, ReactNode } from "react";
import type { DefaultTheme } from "styled-components";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color: TColor;
}

type TColor = keyof DefaultTheme["colors"];

export type { IButton, TColor };
