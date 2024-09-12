import styled from "styled-components";

const StyledInput = styled.input.attrs({
  type: "text",
})`
  font-size: 1.063rem;
  line-height: 1.313rem;
  outline: none;
  border-radius: 0.5rem;
  border: ${({ theme }) => `0.063rem solid ${theme.colors.border}`};
  padding: 0.5rem 0.9rem;
  color: ${({ theme }) => theme.colors.primaryText};
  background-color: ${({ theme }) => theme.colors.primaryBg};
  &::placeholder {
    color: ${({ theme }) => theme.colors.primaryText};
  }
`;

export { StyledInput };
