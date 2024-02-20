import { styled } from "styled-components";

export const Hero = styled.div`
  background-image: url("./assets/images/bg-cafe.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 150px 0;
`;

export const StyledPageWrapper = styled.div`
  background-color: ${(props) => props.theme.palette.background.dark};
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding-inline: 60px;

  @media (min-width: 640px) {
    padding-inline: 90px;
  }
`;
