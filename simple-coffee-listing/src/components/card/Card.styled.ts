import { styled } from "styled-components";

interface ImageProps {
  imageUrl: string;
}

export const StyledCard = styled.div`
  color: #fef7ee;
  font-weight: 600;
`;

export const Image = styled.div<ImageProps>`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-color: #1d1f21;

  width: auto;
  height: 230px;
  border-radius: 16px;
`;

export const Price = styled.div`
  background-color: #bee3cc;
  color: #111315;
  border-radius: 4px;
  padding: 4px 6px;
`;

export const RoastLevel = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    color: #6f757c;
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
  font-size: 18px;
`;
