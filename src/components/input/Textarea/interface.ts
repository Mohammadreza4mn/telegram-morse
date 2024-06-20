import { CSSProperties, TextareaHTMLAttributes } from "react";

interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  customStyle?: CSSProperties;
}

export type { ITextarea };
