import * as React from "react";
import { IFilterItem } from "../../models";
import CheckboxFilter from "../CheckboxFilter/CheckboxFilter";
import GreyInput from "../greyInput";

export interface ISideBarFilterProps {
    title: string;
    filterKey: keyof IFilterItem;
    filterOptions: string[];
    sortBy: (
        typeOfFilter: keyof IFilterItem,
        value: string,
        filterStatus: boolean
    ) => void;
}

interface AppState {
    filteredItems: string[];
}

export default function SideBarFilter({filterKey, filterOptions, sortBy, title}: ISideBarFilterProps) {
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
                <span>{title}</span>
            </div>
            <div className="grey-input">
                <GreyInput className={""} />
            </div>
            <div>
                <div>
                    <CheckboxFilter
                        title={filterKey}
                        sortBy={sortBy}
                        options={filterOptions}
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
