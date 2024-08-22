import { InputHTMLAttributes } from "react";

interface ISwitch extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  knobs: IKnobsOptions;
}

interface IKnobsOptions {
  checked: string;
  unchecked: string;
}

export type { ISwitch, IKnobsOptions };
