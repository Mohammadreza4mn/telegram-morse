import { forwardRef, Ref } from "react";
import type { IInput } from "./interface";
import { StyledInput } from "./styled";

const Input = forwardRef((props: IInput, ref: Ref<HTMLInputElement>) => {
  return <StyledInput {...props} ref={ref} />;
});

export default Input;
