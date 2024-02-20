import { styled } from "styled-components";
import { ImageProps } from "./Card";

export const StyledCard = styled.div`
  color: ${(props) => props.theme.palette.typography.light};
  font-weight: ${(props) => props.theme.fontWeight.medium};
`;

export const Image = styled.div<ImageProps>`
  background-color: ${(props) => props.theme.palette.background.light};
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: ${(props) => props.theme.borderRadius.large};
  width: auto;
  height: 230px;
`;

export const Price = styled.div`
  background-color: ${(props) => props.theme.palette.background.accent};
  border-radius: ${(props) => props.theme.borderRadius.small};
  color: ${(props) => props.theme.palette.typography.dark};
  white-space: nowrap;
  padding: 4px 6px;
`;

export const RoastLevel = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    color: ${(props) => props.theme.palette.typography.main};
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 12px;
  gap: 32px;
`;

export const Name = styled.span`
  font-size: ${(props) => props.theme.fontSize.md};
`;
