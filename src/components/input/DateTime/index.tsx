import { SLabel } from "./styled";
import type { IDateTime } from "./interface";

function DateTime(props: IDateTime) {
  return (
    <SLabel>
      {props.label}
      <input type="datetime-local" {...props} />
    </SLabel>
  );
}

export default DateTime;
