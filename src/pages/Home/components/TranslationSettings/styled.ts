import styled from "styled-components";

const StyledFieldset = styled.fieldset`
  border-radius: 0.5rem;
  border: ${({ theme }) => `0.063rem solid ${theme.colors.secondaryText}`};
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  font-size: 1.063rem;
  color: ${({ theme }) => theme.colors.secondaryText};
  margin: unset;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

export { Main, StyledFieldset };
