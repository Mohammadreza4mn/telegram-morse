import type { IButton } from "./interface";
import { StyledButton } from "./styled";

function Button(props: IButton) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

export default Button;
