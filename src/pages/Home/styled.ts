import { Button, Textarea } from "components";
import styled from "styled-components";

const Container = styled.main`
  display: grid;
  gap: 0.75rem;
  margin-inline: 1rem;
  height: ${({ theme }) => theme.viewportHeight};
`;

const TextareaWrap = styled.section<{
  direction: "column" | "column-reverse";
}>`
  display: flex;
  height: fit-content;
  gap: 0.5rem;
  position: relative;
  flex-direction: ${({ direction }) => direction};
`;

const TitleWrap = styled.section<{
  direction: "row" | "row-reverse";
}>`
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  flex-direction: ${({ direction }) => direction};
  position: relative;
  height: 2.75rem;
  align-items: center;

  strong {
    font-size: 1.063rem;
    line-height: 0.75rem;
    color: ${({ theme }) => theme.colors.secondaryText};
    user-select: none;
  }
`;

const STextarea = styled(Textarea)`
  padding: 0.5rem 3.375rem 0.5rem 0.9rem;
`;

const ButtonSwap = styled(Button)`
  position: absolute;
  left: calc(50% - 1.375rem);
`;

const ButtonCopy = styled(Button)`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  z-index: 1;
`;

const ButtonClear = styled(Button)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 1;
`;

export {
  Container,
  TextareaWrap,
  TitleWrap,
  ButtonCopy,
  ButtonSwap,
  ButtonClear,
  STextarea,
};
