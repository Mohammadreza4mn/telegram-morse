import { InputHTMLAttributes } from "react";

interface ISwitch extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  knobs: IKnobsContent;
}

interface IKnobsContent {
  checked: string;
  unchecked: string;
}

export type { ISwitch, IKnobsContent };
