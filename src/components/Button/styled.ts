import styled from "styled-components";
import type { TColor } from "./interface";

const StyledButton = styled.button<{ color: TColor }>`
  display: flex;
  align-items: center;
  width: 2.375rem;
  height: 1.875rem;
  border-radius: 0.438rem;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors[props.color]};

  svg {
    fill: #fff;
    width: inherit;
    height: inherit;
    background-color: transparent;
  }

  &:hover {
    filter: contrast(0.7);
  }
`;

export { StyledButton };
