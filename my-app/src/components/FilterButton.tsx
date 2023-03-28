import { useState } from "react";
import { FilterItem } from "../pages/catalog/catalog_viewController";
import "../styles/filter_button-styles/filter_button.css";

export interface IFilterButtonProps {
    filter: FilterItem;
    sortBy: () => void;
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

    return (
        <div id={filter.id} onClick={toggleActive} className={`filter-btn shadow-md ${isActive ? 'active' : 'inactive'}`}>
            <span>{filter.text}</span>
        </div>
    );
}
