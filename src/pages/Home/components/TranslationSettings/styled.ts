import styled from "styled-components";

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

const StyledLegend = styled.legend`
  cursor: pointer;
  user-select: none;
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
`;

const Slogan = styled.b<{ isHidden: boolean }>`
  cursor: pointer;
  opacity: ${({ isHidden }) => (isHidden ? 0 : 1)};
  max-height: ${({ isHidden }) => (isHidden ? 0 : "3rem")};
  overflow: hidden;
  transition: 0.4s, max-height 0.8s;
  transition-timing-function: ease-in-out;
  user-select: none;
`;

export {
  StyledFieldset,
  ContainerInput,
  Divider,
  InputHelper,
  InputExample,
  Main,
  StyledLegend,
  Slogan,
};
