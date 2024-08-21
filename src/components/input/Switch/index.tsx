import { Knobs, SLabel, StyledCheckbox, StyledSpan, Container } from "./styled";
import type { ISwitch } from "./interface";

function Switch(props: ISwitch) {
  const { knobs, label, ...res } = props;

  return (
    <SLabel>
      {props.label}
      <Container>
        <StyledCheckbox type="checkbox" {...res} />
        <Knobs content={knobs}>
          <StyledSpan />
        </Knobs>
      </Container>
    </SLabel>
  );
}

export default Switch;
