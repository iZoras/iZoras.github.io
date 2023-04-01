import { useState } from "react";
import PriceScale from "./PriceScale";

interface IPriceFilterProps {
  startPrice: number;
  endPrice: number;
  onChange: (startPrice: number, endPrice: number) => void;
}

const PriceFilter: React.FC<IPriceFilterProps> = ({
  startPrice,
  endPrice,
  onChange,
}) => {
  const [localStartPrice, setLocalStartPrice] = useState(startPrice);
  const [localEndPrice, setLocalEndPrice] = useState(endPrice);

  const handleStartPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalStartPrice(Number(event.target.value));
  };

  const handleEndPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalEndPrice(Number(event.target.value));
  };

  const handleSliderChange = (newStartPrice: number, newEndPrice: number) => {
    setLocalStartPrice(newStartPrice);
    setLocalEndPrice(newEndPrice);
  };

  const handleApply = () => {
    onChange(localStartPrice, localEndPrice);
  };

  return (
    <div>
      <div>
        <label htmlFor="startPrice">Start Price:</label>
        <input
          type="number"
          id="startPrice"
          value={localStartPrice}
          onChange={handleStartPriceChange}
        />
      </div>
      <div>
        <label htmlFor="endPrice">End Price:</label>
        <input
          type="number"
          id="endPrice"
          value={localEndPrice}
          onChange={handleEndPriceChange}
        />
      </div>
      <PriceScale
        startPrice={localStartPrice}
        endPrice={localEndPrice}
        onChange={handleSliderChange}
      />
      <button onClick={handleApply}>Apply</button>
    </div>
  );
};

export default PriceFilter;
