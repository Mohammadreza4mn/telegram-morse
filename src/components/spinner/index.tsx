import type { ISpinner } from "./interface";
import { StyledSpinner, Container } from "./styled";

function Spinner({ text }: ISpinner) {
  return (
    <Container>
      {!!text && <b>{text}</b>}
      <StyledSpinner />
    </Container>
  );
}

export default Spinner;
