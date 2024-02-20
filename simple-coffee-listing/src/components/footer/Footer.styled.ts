import { styled } from "styled-components";

export const StyledFooter = styled.div`
  color: ${(props) => props.theme.palette.typography.main};
  padding-bottom: 16px;

  a {
    color: inherit;
    font-weight: ${(props) => props.theme.fontWeight.medium};
    text-decoration: none;
  }
`;
