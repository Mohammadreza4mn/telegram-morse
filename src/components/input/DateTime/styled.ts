import styled from "styled-components";

const SLabel = styled.label`
  font-size: 1rem;
  user-select: none;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryText};
  cursor: pointer;
`;

export { SLabel };
