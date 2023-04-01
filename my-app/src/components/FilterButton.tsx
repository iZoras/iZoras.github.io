import { useState } from "react";
import { IFilterItem } from "../models";
import { FilterItem } from "../pages/catalog/catalog_viewController";
import "../styles/filter_button-styles/filter_button.css";

export interface IFilterButtonProps {
    filter: FilterItem;
    sortBy: (
        typeOfFilter: keyof IFilterItem,
        value: string,
        filterStatus: boolean
    ) => void;
}

export default function FilterButton({
    filter,
    sortBy,
    ...props
}: IFilterButtonProps) {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    const handleClick = () => {
        toggleActive();
        sortBy("keywords", filter.keyword, isActive);
    };

    return (
        <div
            id={filter.id}
            onClick={handleClick}
            className={`filter-btn shadow-md ${
                isActive ? "active" : "inactive"
            }`}
        >
            <span>{filter.text}</span>
        </div>
    );
}
