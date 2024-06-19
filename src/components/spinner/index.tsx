import type { ISpinner } from "./interface";
import { StyledSpinner, Container } from "./styled";

function Spinner({ text }: ISpinner) {
  return (
    <Container>
      <StyledSpinner />
      {!!text && <b>{text}</b>}
    </Container>
  );
}

export default Spinner;
