import { styled } from "styled-components";

export const Hero = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 150px 0;
  background-image: url("../../src/assets/bg-cafe.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledPageWrapper = styled.div`
  min-height: 100vh;
  background: #111315;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-inline: 60px;

  @media (min-width: 640px) {
    padding-inline: 90px;
  }
`;
