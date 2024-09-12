import styled from "styled-components";

const SLabel = styled.label`
  font-size: 1rem;
  user-select: none;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryText};
  cursor: pointer;
`;

const StyledCheckbox = styled.input.attrs({
  type: "checkbox",
})`
  cursor: pointer !important;
`;

export { SLabel, StyledCheckbox };
