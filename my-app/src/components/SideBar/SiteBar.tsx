import { useState } from "react";
import { IFilterItem } from "../../models";
import "../../styles/side-bar-style/side-bar.css";
import GreyInput from "../greyInput";
import SideBarFilter from "../sideBarFilter/SideBarFilter";

export interface SideBarProps {
    sortBy: (
        typeOfFilter: keyof IFilterItem,
        value: string,
        filterStatus: boolean
    ) => void;
}

export default function SideBar(props: SideBarProps) {
  const [startPrice, setStartPrice] = useState<number>(0);

  const [endPrice, setEndPrice] = useState<number>(10000);

  const manufacturers = ["Hui", "Boyscout", "Paclan", "Булгари Грин"];
  const brands = ["Nivea", "GRIFON", "Paclan", "Домашний сундук"];

  return (
    <div className="sideBar-wrap ">
      <div className="flex flex-col">
        <h1 className="price-headline mb-2">ПОДБОР ПО ПАРАМЕТРАМ</h1>
        <div className="mb-2">
          <span>Цена </span>
          <span>₸</span>
        </div>
        <div className="flex justify-between mb-6">
          <div className="flex items-center justify-center price-range">
            {startPrice}
          </div>
          <span>-</span>
          <div className="flex items-center justify-center price-range">
            {endPrice}
          </div>
        </div>
        <SideBarFilter filterKey="manufacturer" sortBy={props.sortBy} title={'Производитель'} filterOptions={manufacturers}/>
        <SideBarFilter filterKey="brand" sortBy={props.sortBy} title={'Бренд'} filterOptions={brands}/>
      </div>
    </div>
  );
}
