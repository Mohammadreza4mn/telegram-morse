import type { IInput } from "./interface";
import { StyledInput } from "./styled";

function Input(props: IInput) {
  return <StyledInput {...props} />;
}

export default Input;
