import type { ITextarea } from "./interface";
import { StyledTextarea } from "./styled";

function Textarea(props: ITextarea) {
  return <StyledTextarea {...props} />;
}

export default Textarea;
