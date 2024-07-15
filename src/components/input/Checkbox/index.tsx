import { SLabel, StyledCheckbox } from "./styled";
import type { ICheckbox } from "./interface";

function Checkbox(props: ICheckbox) {
  return (
    <SLabel>
      <StyledCheckbox type="checkbox" {...props} />
      {props.label}
    </SLabel>
  );
}

export default Checkbox;
