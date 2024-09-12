import styled from "styled-components";
import type { IKnobsOptions } from "./interface";

const SLabel = styled.label`
  font-size: 1rem;
  user-select: none;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryText};
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  height: 2.25rem;
  overflow: hidden;
  border-radius: calc(infinity * 1px);
  width: 8.938rem;
  border: ${({ theme }) => `0.125rem solid ${theme.colors.buttonBg}`};
`;

const StyledCheckbox = styled.input.attrs({
  type: "checkbox",
})`
  opacity: 0;

  &:checked + div > span {
    left: 0.25rem;
  }
`;

const StyledSpan = styled.span`
  left: 4.938rem;
  width: 3.75rem;
  background-color: ${({ theme }) => theme.colors.buttonBg};
  border-radius: calc(infinity * 1px);
  transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
  z-index: 1;
`;

const Knobs = styled.div<{ content: IKnobsOptions }>`
  position: absolute;
  inset: 0;

  &::before {
    content: "${({ content }) => content.unchecked}";
    left: 0.25rem;
  }
  &::after {
    content: "${({ content }) => content.checked}";
    right: 0.25rem;
  }

  &::after,
  &::before {
    color: ${({ theme }) => theme.colors.primaryText};
    display: flex;
    align-items: center;
    padding-inline: 0.438rem;
  }

  &::after,
  &::before,
  span {
    position: absolute;
    top: 0.25rem;
    height: 1.75rem;
  }
`;

export { SLabel, StyledCheckbox, Knobs, StyledSpan, Container };
