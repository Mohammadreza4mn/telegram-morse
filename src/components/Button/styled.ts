import styled from "styled-components";
import type { TColor } from "./interface";

const StyledButton = styled.button<{ color?: TColor }>`
  display: flex;
  align-items: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.625rem;
  border: none;
  padding: 0.25rem;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors[props.color || "buttonBg"]};
  color: ${({ theme }) => theme.colors.buttonTextColor};

  svg {
    fill: ${({ theme }) => theme.colors.buttonTextColor};
  }

  &:active {
    background-color: ${(props) =>
      `color-mix(in srgb, ${
        props.theme.colors[props.color || "buttonBg"]
      } 60%, ${props.theme.colors.buttonTextColor})`};
  }
`;

export { StyledButton };
