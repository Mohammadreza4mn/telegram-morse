import styled from "styled-components";
import { ReactComponent as Top } from "assets/icon/top.svg";

const StyledFieldset = styled.fieldset`
  border-radius: 0.5rem;
  border: ${({ theme }) => `0.063rem solid ${theme.colors.secondaryText}`};
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  font-size: 1.063rem;
  color: ${({ theme }) => theme.colors.secondaryText};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  position: relative;
`;

const ContainerInput = styled.div<{ isHidden: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors.primaryText};
  max-height: ${({ isHidden }) => (isHidden ? 0 : "8.5rem")};
  overflow: hidden;
  transition: 0.3s ease-in-out;
`;

const Divider = styled.hr`
  background-color: ${({ theme }) => theme.colors.secondaryText};
  width: 100%;
  height: 0.063rem;
  border: unset;
`;

const InputHelper = styled.small`
  color: ${({ theme }) => theme.colors.primaryText};
`;

const InputExample = styled(InputHelper)`
  align-self: flex-start;
`;

const Main = styled.div<{ isHidden: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  max-height: ${({ isHidden }) => (isHidden ? 0 : "16rem")};
  overflow: hidden;
  transition: 0.3s ease-in-out;
  margin-bottom: ${({ isHidden }) => (isHidden ? 0 : "1rem")};
`;

const Slogan = styled.b<{ isHidden: boolean }>`
  opacity: ${({ isHidden }) => (isHidden ? 0 : 1)};
  max-height: ${({ isHidden }) => (isHidden ? 0 : "3rem")};
  overflow: hidden;
  transition: 0.3s ease-in-out;
  user-select: none;
`;

const ContainerBtn = styled.div`
  display: grid;
  place-content: center;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  position: absolute;
  bottom: -1rem;
`;

const BtnToggle = styled(Top)<{ direction: "top" | "bottom" }>`
  height: 2rem;
  stroke: ${({ theme }) => theme.colors.secondaryText};
  cursor: pointer;
  transform: ${({ direction }) =>
    `rotate(${direction === "bottom" ? 180 : 0}deg)`};
`;

export {
  Main,
  Slogan,
  Divider,
  BtnToggle,
  InputHelper,
  InputExample,
  ContainerBtn,
  StyledFieldset,
  ContainerInput,
};
