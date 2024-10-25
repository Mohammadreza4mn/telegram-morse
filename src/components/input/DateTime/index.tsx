import { StyledInput } from "./styled";
import { forwardRef, Ref } from "react";
import type { IDateTime } from "./interface";

const DateTime = forwardRef((props: IDateTime, ref: Ref<HTMLInputElement>) => {
  return <StyledInput {...props} ref={ref} />;
});

export default DateTime;
