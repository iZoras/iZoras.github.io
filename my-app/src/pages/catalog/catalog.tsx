import React, { useEffect, useState } from "react";
import Product from "../../components/Product";
import { products } from "../../data/products";
import "../../styles/catalog-styles/catalog.css";
import { filters } from "../../pages/catalog/catalog_viewController";
import FilterButton from "../../components/FilterButton";
import SideBar from "../../components/SideBar/SiteBar";
import { IFilterItem, IProduct } from "../../models";

function Catalog(): JSX.Element {
    const [product, setProduct] = useState(products);   
    const [filteredProducts, setFilteredProducts] = useState(product);
    // const [filtersSettings, setFiltersSettings] = useState<string[]>([]);

    const [filtersSettings, setFiltersSettings] = useState<IFilterItem>({
        keywords: [],
        manufacturer: [],
        brand: []        
      });

    
    const testProduct = products[0];

    function testAddProduct() {
        setProduct([...product, testProduct]);
    }

    //Добавляем в масив фильтров опции по которым фильтруем

    function handleFilters(value: string, filterState: boolean): void {
        if (filterState) {
            setFiltersSettings(prevFilters => ({
                ...prevFilters,
                keywords: prevFilters.keywords?.filter(item => item !== value) || []
              }));
            return;
        }

        setFiltersSettings((prevFilters) => ({
            ...prevFilters,
            keywords: prevFilters?.keywords
              ? [...prevFilters.keywords, value]
              : [value],
          }));
    }

    useEffect(() => {
        const resetFilters = () => {
            setFilteredProducts(products);
        };

        if (!filtersSettings.keywords?.length) {
            resetFilters();
        }

        if (filteredProducts.length && filtersSettings.keywords?.length) {
            // const filtered = filteredProducts.filter((item) => {
            //     return item.keywords.some((keyword) =>
            //         filtersSettings.includes(keyword)
            //     );
            // });

            const filtered = product.filter((t) =>
                t.keywords.some((r) => filtersSettings.keywords?.includes(r))
            );

            setFilteredProducts(filtered);
        }
    }, [filtersSettings]);

    //ресетаем массив отфильтрованных продуктов

    return (
        <div className="catalog-wrap">
            {/*<div>{filtersSettings}</div>

             <button onClick={testAddProduct}>addTest</button>
            <button
                className=" bg-gray-400"
                onClick={() => {
                    console.log(filtersSettings.length);
                }}
            >
                TEST
            </button> */}
            <div>
                <span className=" text-gray-700">Главная</span>
                <span className=" text-sm text-gray-600"> | Косметика</span>
            </div>
            <h1 className="headline">Косметика и гигиена</h1>
            <div className="up-filters flex my-2">
                {filters.map((filter) => (
                    <FilterButton
                        filter={filter}
                        sortBy={handleFilters}
                        key={filter.id}
                    />
                ))}
            </div>

            <div className="flex flex-row max-w-screen-md">
                <div className="sidebar">
                    <SideBar />
                </div>
                <div className="product-show container ">
                {filteredProducts && filteredProducts.map((product) => (
                              <Product product={product} key={product.id} />
                          ))}
                </div>
            </div>
        </div>
    );
}

export default Catalog;
