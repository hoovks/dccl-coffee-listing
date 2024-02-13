import { useState, useEffect } from "react";
import { Card } from "../card/Card";
import { Header } from "../header/Header";
import { StyledContainer, Grid } from "./Container.styled";

export const Container = () => {
  const [coffees, setCoffees] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://fake-coffee-api.vercel.app/api")
      .then((res: Response) => res.json())
      .then((data: any[]) => setCoffees(data));
  }, []);

  return (
    <StyledContainer>
      <Header />
      <Grid>
        {coffees.map(({ id, name, price, roast_level, image_url }) => (
          <Card
            key={id}
            name={name}
            price={price}
            roastLevel={roast_level}
            imageUrl={image_url}
          />
        ))}
      </Grid>
    </StyledContainer>
  );
};
