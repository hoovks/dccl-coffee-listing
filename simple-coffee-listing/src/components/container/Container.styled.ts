import { styled } from "styled-components";

export const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.palette.background.main};
  border-radius: ${(props) => props.theme.borderRadius.large};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 70vh;
  padding: 32px;
  margin-block: 100px;
  z-index: 1;

  @media (min-width: 1024px) {
    max-width: 1280px;
  }
`;

export const Grid = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
  padding-top: 24px;
  gap: 16px;
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
