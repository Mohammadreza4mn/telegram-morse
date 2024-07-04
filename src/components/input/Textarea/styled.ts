import styled, { CSSProperties } from "styled-components";

const StyledTextarea = styled.textarea.withConfig({
  shouldForwardProp: (prop) => !["customStyle"].includes(prop),
})<{ customStyle?: CSSProperties }>`
  resize: none;
  font-size: 1.063rem;
  line-height: 1.313rem;
  outline: none;
  white-space: pre-wrap;
  border-radius: 0.5rem;
  border: ${({ theme }) => `0.063rem solid ${theme.colors.border}`};
  padding: 0.5rem 0.9rem;
  color: ${({ theme }) => theme.colors.primaryText};
  background-color: ${({ theme }) => theme.colors.primaryBg};
  ${(props) => ({ ...props.customStyle })}
`;

export { StyledTextarea };
