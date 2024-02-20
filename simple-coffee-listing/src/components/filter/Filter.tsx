import { useState } from "react";
import { Button, Item, StyledFilter } from "./Filter.styled";

interface FilterProps {
  isLoading: boolean;
  regions: string[];
  selectedRegion: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
  showAllProducts: () => void;
}

export const Filter = ({
  isLoading,
  regions,
  selectedRegion,
  setRegion,
  showAllProducts,
}: FilterProps) => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const toggleOptionsVisibility = () => {
    if (!isLoading && regions.length > 0) {
      setIsOptionsVisible(!isOptionsVisible);
    }
  };

  return (
    <StyledFilter>
      <Button
        onClick={showAllProducts}
        className={selectedRegion === "" ? "selected" : ""}
      >
        All Products
      </Button>
      <div className="wrapper">
        <Button
          onClick={() => toggleOptionsVisibility()}
          className={selectedRegion && "selected"}
        >
          {selectedRegion == "" ? "Choose Region" : selectedRegion}
        </Button>
        {isOptionsVisible && (
          <div className="content">
            {regions.map((region) => (
              <Item
                key={region}
                className="item"
                onClick={() => {
                  console.log(region);
                  setRegion(region);
                  toggleOptionsVisibility();
                }}
              >
                {region}
              </Item>
            ))}
          </div>
        )}
      </div>
    </StyledFilter>
  );
};
