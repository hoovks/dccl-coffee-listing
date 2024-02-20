import { styled } from "styled-components";

export const StyledFilter = styled.div`
  color: ${(props) => props.theme.palette.typography.light};
  font-weight: ${(props) => props.theme.fontWeight.light};
  font-size: ${(props) => props.theme.fontSize.md};
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 32px;

  .wrapper {
    position: relative;
    display: inline-block;
  }

  .content {
    background-color: ${(props) => props.theme.palette.background.main};
    border-radius: ${(props) => props.theme.borderRadius.medium};
    box-shadow: 0px 3px 35px 3px rgba(17, 19, 21, 1);
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    width: 100%;
    z-index: 1;
    padding: 6px;
  }
`;

export const Button = styled.div`
  border-radius: ${(props) => props.theme.borderRadius.medium};
  align-self: center;
  text-align: center;
  cursor: pointer;
  min-width: 150px;
  padding: 6px 10px;

  &.selected {
    background-color: ${(props) => props.theme.palette.button.active};
  }
`;

export const Item = styled.div`
  border-radius: ${(props) => props.theme.borderRadius.medium};
  color: ${(props) => props.theme.palette.typography.main};
  cursor: pointer;
  padding: 6px;

  &:hover {
    color: ${(props) => props.theme.palette.typography.light};
    transition: 0.5s;
  }
`;
