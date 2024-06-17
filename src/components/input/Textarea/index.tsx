import { TextareaHTMLAttributes } from "react";
import { StyledTextarea } from "./styled";

function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <StyledTextarea rows={10} {...props} />;
}

export default Textarea;
