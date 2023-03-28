import React, { useState } from "react";
import Product from "../../components/Product";
import { products } from "../../data/products";
import "../../styles/catalog-styles/catalog.css";
import { filters } from "../../pages/catalog/catalog_viewController";
import FilterButton from "../../components/FilterButton";
import SideBar from "../../components/SideBar/SiteBar";

function Catalog(): JSX.Element {
    const [product, setProduct] = useState(products);

    const testProduct = products[0];

    function testAddProduct() {
        setProduct([...product, testProduct]);
    }

    function sortBy() {}

    return (
        <div className="catalog-wrap">
            {/* <button onClick={testAddProduct}>addTest</button> */}

            <div>
                <span className=" text-gray-700">Главная</span>
                <span className=" text-sm text-gray-600"> | Косметика</span>
            </div>
            <h1 className="headline">Косметика и гигиена</h1>
            <div className="up-filters flex my-2">
                {filters.map((filter) => (
                    <FilterButton
                        filter={filter}
                        sortBy={sortBy}
                        key={filter.id}
                    />
                ))}
            </div>

            <div className="flex flex-row max-w-screen-md">
                <div className="sidebar">
                    <SideBar></SideBar>
                </div>
                <div className="product-show container ">
                    {product.map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Catalog;
