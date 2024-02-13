import { styled } from "styled-components";

export const StyledContainer = styled.div`
  margin-block: 100px;

  width: 100%;
  background-color: #1b1d1f;
  border-radius: 16px;
  z-index: 1;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

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
