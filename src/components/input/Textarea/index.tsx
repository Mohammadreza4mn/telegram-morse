import { TextareaHTMLAttributes } from "react";
import { StyledTextarea } from "./styled";

function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <StyledTextarea {...props} />;
}

export default Textarea;
