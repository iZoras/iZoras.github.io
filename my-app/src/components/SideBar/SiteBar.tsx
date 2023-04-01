import { useEffect, useState } from "react";
import { IFilterItem } from "../../models";
import "../../styles/side-bar-style/side-bar.css";
import OrangeButton from "../button";
import GreyInput from "../greyInput";
import PriceRange from "../Price range/PriceRange";
import SideBarFilter from "../sideBarFilter/SideBarFilter";
import trash_can_img from "../../img/trash_can.png";

export interface SideBarProps {
    sortBy: (
        typeOfFilter: keyof IFilterItem,
        value: string,
        filterStatus: boolean
    ) => void;
    filterByPrice: (startPrice: number, endPrice: number) => void;
}

export default function SideBar(props: SideBarProps) {
    const [startPrice, setStartPrice] = useState<number>(0);

    const [endPrice, setEndPrice] = useState<number>(10000);

    const manufacturers = ["Hui", "Boyscout", "Paclan", "Булгари Грин"];
    const brands = ["Nivea", "GRIFON", "Paclan", "Домашний сундук"];

    const handleInputEnd = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const value = parseInt(event.target.value);
        setEndPrice(value);
    };

    const handleInputStart = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const value = parseInt(event.target.value);

        setStartPrice(value);
    };

    useEffect(() => {
        props.filterByPrice(startPrice, endPrice);
    }, [startPrice, endPrice]);

    return (
        <div className="sideBar-wrap ">
            <div className="flex flex-col">
                <h1 className="price-headline mb-2">ПОДБОР ПО ПАРАМЕТРАМ</h1>
                <div className="mb-2">
                    <span>Цена </span>
                    <span>₸</span>
                </div>
                <div className="flex justify-between mb-6">
                    <input
                        onChange={handleInputStart}
                        value={startPrice}
                        type="number"
                        className="flex outline-none items-center justify-center price-range text-center"
                    />

                    <span>-</span>
                    <input
                        onChange={handleInputEnd}
                        value={endPrice}
                        type="number"
                        className="flex outline-none items-center justify-center price-range text-center"
                    />
                </div>
                <SideBarFilter
                    filterKey="manufacturer"
                    sortBy={props.sortBy}
                    title={"Производитель"}
                    filterOptions={manufacturers}
                />
                <SideBarFilter
                    filterKey="brand"
                    sortBy={props.sortBy}
                    title={"Бренд"}
                    filterOptions={brands}
                />
                <br />
                <div className="filter-buttons-wrap flex gap-2">
                    <OrangeButton className="show-btn">Показать</OrangeButton>
                    <OrangeButton className="clear-filters-btn">
                        <img src={trash_can_img} alt="" />
                    </OrangeButton>
                </div>                
            </div>
        </div>
    );
}
