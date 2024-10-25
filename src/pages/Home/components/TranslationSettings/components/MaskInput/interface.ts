import { RefObject, ChangeEventHandler, SetStateAction, Dispatch } from "react";

type TToggleMask = Dispatch<SetStateAction<boolean>>;

interface IRenderInput {
  ref: RefObject<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  toggleMask: TToggleMask;
}

interface IHandleShowInput {
  toggleMask: TToggleMask;
  ref: RefObject<HTMLInputElement>;
}

interface IMaskInput {
  maskTitle: string;
  handleShowInput: (parameter: IHandleShowInput) => void;
  onChangeInput: ChangeEventHandler<HTMLInputElement>;
  renderInput: (parameter: IRenderInput) => JSX.Element;
}

export type { IMaskInput, IHandleShowInput, TToggleMask };
