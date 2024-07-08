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
  overflow: auto !important;
  background: linear-gradient(
        ${({ theme }) => theme.colors.primaryBg} 30px,
        transparent
      )
      top/100% 40px,
    radial-gradient(
        at top,
        ${({ theme }) => theme.colors.secondaryText},
        transparent 70%
      )
      top/100% 15px,
    linear-gradient(
        to top,
        ${({ theme }) => theme.colors.primaryBg} 30px,
        transparent
      )
      bottom/100% 40px,
    radial-gradient(
        at bottom,
        ${({ theme }) => theme.colors.secondaryText},
        transparent 70%
      )
      bottom/100% 15px;
  background-color: ${({ theme }) => theme.colors.primaryBg};
  background-repeat: no-repeat;
  background-attachment: local, scroll;
  ${(props) => ({ ...props.customStyle })}
`;

export { StyledTextarea };
