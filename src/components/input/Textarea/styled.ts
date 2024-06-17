import styled from "styled-components";

const StyledTextarea = styled.textarea`
  resize: none;
  font-size: 1.5rem;
  line-height: 2rem;
  white-space: pre-wrap;
  border-radius: 0.5rem;
  border: ${({ theme }) => `0.063rem solid ${theme.colors.border}`};
  padding: 0.5rem 0.9rem;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export { StyledTextarea };
