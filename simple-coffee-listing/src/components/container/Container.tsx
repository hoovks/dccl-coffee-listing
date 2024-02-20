import { useState, useEffect } from "react";
import { Card } from "../card/Card";
import { Header } from "../header/Header";
import { StyledContainer, Grid } from "./Container.styled";
import { Loader } from "../loader/Loader";
import { Filter } from "../filter/Filter";

interface Coffee {
  id: number;
  name: string;
  price: string;
  roast_level: string;
  image_url: string;
  region: string;
}

export const Container = () => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setTimeout(() => {
      fetch("https://fake-coffee-api.vercel.app/api")
        .then((res: Response) => res.json())
        .then((data: Coffee[]) => {
          setCoffees(data);
          const uniqueRegions = Array.from(
            new Set(data.map((coffee) => coffee.region))
          );
          setRegions(uniqueRegions);
          setIsLoading(false);
        });
    }, 1000);
  };

  const showAllProducts = () => {
    setSelectedRegion("");
  };

  const filteredCoffees =
    selectedRegion === ""
      ? coffees
      : coffees.filter((coffee) => coffee.region === selectedRegion);

  return (
    <StyledContainer>
      <Header />
      <Filter
        isLoading={isLoading}
        regions={regions}
        selectedRegion={selectedRegion}
        setRegion={setSelectedRegion}
        showAllProducts={showAllProducts}
      />
      {isLoading && <Loader />}
      <Grid>
        {filteredCoffees.map(({ id, name, price, roast_level, image_url }) => (
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
