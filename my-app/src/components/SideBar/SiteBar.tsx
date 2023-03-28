import { useState } from "react";
import "../../styles/side-bar-style/side-bar.css";

export interface SideBarProps {}

export default function SideBar(props: SideBarProps) {
    const [startPrice, setStartPrice] = useState<number>(0);

    const [endPrice, setEndPrice] = useState<number>(10000);

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
            </div>
        </div>
    );
}
