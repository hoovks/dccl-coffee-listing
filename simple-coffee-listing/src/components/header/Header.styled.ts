import { styled } from "styled-components";

export const StyledHeader = styled.div`
  background-image: url(../../src/assets/vector.svg);
  background-repeat: no-repeat;
  background-position-x: right;
  color: ${(props) => props.theme.palette.typography.main};
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.light};
  line-height: 1.5;
  text-align: center;
  display: flex;
  flex-direction: column;
  max-width: 450px;
  padding-block: 48px;
`;

export const Heading = styled.span`
  color: ${(props) => props.theme.palette.typography.light};
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;
