import styled from "styled-components";
import { ReactComponent as Swap } from "assets/icon/swap.svg";

const Container = styled.main`
  display: grid;
  gap: 1rem;
  margin-inline: 1rem;
  height: 100dvh;
`;

const TextareaWrap = styled.section<{
  direction: "column" | "column-reverse";
}>`
  display: flex;
  height: fit-content;
  gap: 0.5rem;
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

  strong {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 2.25rem;
    color: ${({ theme }) => theme.colors.secondaryText};
    user-select: none;
  }

  .titleWrap__button {
    position: absolute;
    bottom: 0;
    left: calc(50% - 1.25rem);
  }
`;

const ButtonSwap = styled(Swap)`
  width: 1.2rem;
  height: 1.2rem;
  padding: 0.65rem;
  cursor: pointer;
  fill: ${({ theme }) => theme.colors.primaryText};
  border-radius: calc(infinity * 1px);

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBackgroundColor};
  }
`;

export { Container, ButtonSwap, TextareaWrap, TitleWrap };
