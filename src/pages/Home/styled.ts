import { Button } from "components";
import styled from "styled-components";

const Container = styled.main`
  display: grid;
  gap: 1rem;
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

  textarea {
    padding: 0.5rem 3.375rem 0.5rem 0.9rem;
  }
`;

const TitleWrap = styled.section<{
  direction: "row" | "row-reverse";
}>`
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  flex-direction: ${({ direction }) => direction};
  position: relative;

  strong {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 2.25rem;
    color: ${({ theme }) => theme.colors.secondaryText};
    user-select: none;
  }
`;

const ButtonSwap = styled(Button)`
  position: absolute;
  bottom: 0.125rem;
  left: calc(50% - 1.188rem);
`;

const ButtonCopy = styled(Button)`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
`;

const ButtonClear = styled(Button)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

export {
  Container,
  TextareaWrap,
  TitleWrap,
  ButtonCopy,
  ButtonSwap,
  ButtonClear,
};
