import { styled } from "styled-components";

export const StyledLoader = styled.div`
  display: grid;
  place-items: center;
  padding-top: 100px;

  span {
    color: ${(props) => props.theme.palette.background.accent};
    font-weight: ${(props) => props.theme.fontWeight.medium};
    font-size: ${(props) => props.theme.fontSize.md};
  }
`;
