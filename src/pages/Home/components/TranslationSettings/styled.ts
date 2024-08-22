import { Input } from "components";
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
  max-height: ${({ isHidden }) => (isHidden ? 0 : "9.5rem")};
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

const StyledInput = styled(Input)`
  width: 80%;
`;

export {
  StyledFieldset,
  ContainerInput,
  Divider,
  InputHelper,
  InputExample,
  StyledInput,
};
