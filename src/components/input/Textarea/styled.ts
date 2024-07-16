import styled, { CSSProperties } from "styled-components";
import { ReactComponent as Top } from "assets/icon/top.svg";

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

const BtnTop = styled(Top)`
  position: absolute;
  width: 60%;
  height: 1.2rem;
  left: calc(50% - 30%);
  bottom: -0.225rem;
  stroke: ${({ theme }) => theme.colors.primaryBg};
  opacity: 0.5;
  cursor: pointer;
  filter: invert();
`;

const Container = styled("main")`
  display: grid;
  position: relative;
`;

export { StyledTextarea, BtnTop, Container };
