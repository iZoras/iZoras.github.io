import React, { useState } from "react";
import '../../styles/checkbox-filter-style/checkbox-filter-style.css'

interface CheckboxProps {
  options: string[];
  onFilterChange: (checkedItems: Map<string, boolean>) => void;
}

function CheckboxFilter({ options, onFilterChange }: CheckboxProps) {
  const [checkedItems, setCheckedItems] = useState<Map<string, boolean>>(
    new Map()
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const item = event.target.name;
    const isChecked = event.target.checked;
    setCheckedItems((prevState) => prevState.set(item, isChecked));
    onFilterChange(checkedItems);
  };

  return (
    <div>
      <ul>
        {options.map((option) => (
          <li key={option}>
            <label>
              <input
                type="checkbox"
                name={option}
                checked={checkedItems.get(option)}
                onChange={handleChange}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckboxFilter;
