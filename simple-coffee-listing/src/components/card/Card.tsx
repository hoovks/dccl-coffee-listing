import { StyledCard, Image, Price, RoastLevel, Row, Name } from "./Card.styled";

interface CardProps {
  name: string;
  price: string;
  roastLevel: string;
}

export interface ImageProps {
  imageUrl: string;
}

export const Card = ({
  name,
  price,
  roastLevel,
  imageUrl,
}: CardProps & ImageProps) => {
  return (
    <StyledCard>
      <Image imageUrl={imageUrl} />
      <Row>
        <Name>{name}</Name>
        <Price>$ {price}</Price>
      </Row>
      <RoastLevel>
        <img src="../../src/assets/Star_fill.svg" alt="product_photo" />
        {roastLevel}/5 <span>(roast level)</span>
      </RoastLevel>
    </StyledCard>
  );
};
