import { InputHTMLAttributes } from "react";

interface IDateTime extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export type { IDateTime };
