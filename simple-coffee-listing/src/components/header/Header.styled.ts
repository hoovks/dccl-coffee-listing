import { styled } from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  padding-block: 48px;
  background-image: url(../../src/assets/vector.svg);
  background-repeat: no-repeat;
  background-position-x: right;
  color: #6f757c;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
`;

export const Heading = styled.span`
  color: #fef7ee;
  font-size: 32px;
  font-weight: 700;
`;
