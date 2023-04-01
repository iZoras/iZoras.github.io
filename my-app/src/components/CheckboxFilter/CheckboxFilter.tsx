import { useState } from "react";
import { IFilterItem } from "../../models";

interface CheckboxProps {
    options: string[];
    onFilterChange: (checkedItems: Map<string, boolean>) => void;
    title: keyof IFilterItem;

    sortBy: (
        typeOfFilter: keyof IFilterItem,
        value: string,
        filterStatus: boolean
    ) => void;
}

function CheckboxFilter({
    options,
    onFilterChange,
    sortBy,
    title,
}: CheckboxProps) {
    const [checkedItems, setCheckedItems] = useState<Map<string, boolean>>(
        new Map()
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const item = event.target.name;
        const isChecked = event.target.checked;

        setCheckedItems((prevState) => prevState.set(item, isChecked));
        onFilterChange(checkedItems);

        sortBy(title, item, !isChecked);
        console.log(item);
    };

    return (
        <div>
            <ul className="flex flex-col justify-start">
                {options.map((option) => (
                    <li key={option}>
                        <label>
                            <input
                                className=" w-8"
                                type="checkbox"
                                name={option}
                                checked={checkedItems.get(option) || false}
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
