import React, { useState } from "react";

interface IPriceScaleProps {
    startPrice: number;
    endPrice: number;
    onChange: (newStartPrice: number, newEndPrice: number) => void;
  }

const PriceScale: React.FC<IPriceScaleProps> = ({
  startPrice,
  endPrice,
  onChange}) => {
  const [localStartPrice, setLocalStartPrice] = useState(startPrice);
  const [localEndPrice, setLocalEndPrice] = useState(endPrice);

  const handleStartPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalStartPrice(parseInt(e.target.value, 10));
  };

  const handleEndPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalEndPrice(parseInt(e.target.value, 10));
  };

  const handlePriceChange = () => {
    onChange(localStartPrice, localEndPrice);
  };

  return (
    <div>
      <input
        type="number"
        min="0"
        value={localStartPrice}
        onChange={handleStartPriceChange}
      />
      {" - "}
      <input
        type="number"
        min="0"
        value={localEndPrice}
        onChange={handleEndPriceChange}
      />
      <button onClick={handlePriceChange}>Apply</button>
    </div>
  );
};

export default PriceScale;
