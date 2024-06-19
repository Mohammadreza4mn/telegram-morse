import styled from "styled-components";
import { ReactComponent as Spinner } from "assets/icon/spinner.svg";

const Container = styled.div`
  background-color: #e6e9ef;
  border-radius: 1rem;
  height: calc(100dvh - 16px);
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  b {
    color: #2e4392;
  }
`;

const StyledSpinner = styled(Spinner)`
  stroke: #24a1de;
  font-size: 4rem;
`;

export { StyledSpinner, Container };
