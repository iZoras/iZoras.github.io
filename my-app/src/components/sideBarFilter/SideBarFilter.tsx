import * as React from "react";
import CheckboxFilter from "../CheckboxFilter/CheckboxFilter";
import GreyInput from "../greyInput";

export interface ISideBarFilterProps {
    title: string;
    filterOptions: string[];
}

interface AppState {
    filteredItems: string[];
}

export default function SideBarFilter(props: ISideBarFilterProps) {    
    const [appState, setAppState] = React.useState<AppState>({
        filteredItems: [],
    });

    const handleFilterChange = (checkedItems: Map<string, boolean>) => {
        const filteredItems = props.filterOptions.filter((option) =>
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
                        options={props.filterOptions}
                        onFilterChange={handleFilterChange}
                    />
                    <ul>
                        {appState.filteredItems.map((item) => (
                            <li key={item}></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
