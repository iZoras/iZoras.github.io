import * as React from "react";
import CheckboxFilter from "../CheckboxFilter/CheckboxFilter";
import GreyInput from "../greyInput";

export interface ISideBarFilterProps {
  title: string;
}

interface AppState {
  filteredItems: string[];
}

export default function SideBarFilter(props: ISideBarFilterProps) {
  const filterOptions = ["Brand A", "Brand B", "Brand C", "Type A", "Type B"];
  const [appState, setAppState] = React.useState<AppState>({
    filteredItems: [],
  });

  const handleFilterChange = (checkedItems: Map<string, boolean>) => {
    const filteredItems = filterOptions.filter((option) =>
      checkedItems.get(option)
    );
    setAppState({ filteredItems });
  };

  return (
    <div>
      <div className=" mb-6">
        <span>{props.title}</span>
      </div>
      <div className="grey-input">
        <GreyInput />
      </div>
      <div>
        <div>
          <CheckboxFilter
            options={filterOptions}
            onFilterChange={handleFilterChange}
          />
          {/* Render your other components here */}
          <ul>
            {appState.filteredItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
