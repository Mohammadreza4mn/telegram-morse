import styled from "styled-components";

const ContainerMaskInput = styled.div`
  position: relative;
  display: flex;
`;

const Mask = styled.span`
  position: absolute;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.primaryBg};
  border-radius: 0.5rem;
  border: ${({ theme }) => `0.063rem solid ${theme.colors.border}`};
  display: grid;
  place-content: center;
  color: ${({ theme }) => theme.colors.primaryText};
  cursor: pointer;
  &:active {
    background-color: ${(props) =>
      `color-mix(in srgb, ${props.theme.colors.buttonBg} 60%, ${props.theme.colors.buttonTextColor})`};
  }
`;

export { Mask, ContainerMaskInput };
