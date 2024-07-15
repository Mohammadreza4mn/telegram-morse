import { InputHTMLAttributes } from "react";

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export type { ICheckbox };
