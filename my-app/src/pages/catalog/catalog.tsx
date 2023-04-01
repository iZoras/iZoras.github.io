import React, { useEffect, useMemo, useState } from "react";
import Product from "../../components/Product";
import { products } from "../../data/products";
import "../../styles/catalog-styles/catalog.css";
import { filters } from "../../pages/catalog/catalog_viewController";
import FilterButton from "../../components/FilterButton";
import SideBar from "../../components/SideBar/SiteBar";
import { IFilterItem, IProduct } from "../../models";

function Catalog(): JSX.Element {
    const [product, setProduct] = useState(products);
    //const [filteredProducts, setFilteredProducts] = useState(product);
    // const [filtersSettings, setFiltersSettings] = useState<string[]>([]);

    const [filtersSettings, setFiltersSettings] = useState<IFilterItem>({
        keywords: [],
        manufacturer: [],
        brand: [],
    });

    const testProduct = products[0];

    function testAddProduct() {
        setProduct([...product, testProduct]);
    }

    //Добавляем в масив фильтров опции по которым фильтруем

    const filteredProducts = useMemo(() => {
        let filteredProducts = [...products];

        // Apply keyword filter
        if (filtersSettings.keywords && filtersSettings.keywords.length > 0) {
            filteredProducts = filteredProducts.filter((product) =>
                filtersSettings.keywords?.some((keyword) =>
                    product.keywords.includes(keyword)
                )
            );
            console.log(`filter 1 worked`)
        }

        // Apply manufacturer filter
        if (
            filtersSettings.manufacturer &&
            filtersSettings.manufacturer.length > 0
        ) {
            filteredProducts = filteredProducts.filter((product) =>
                filtersSettings.manufacturer?.includes(product.manufacturer)
            );
            console.log(`filter 2 worked`)
        }

        // Apply brand filter
        if (filtersSettings.brand && filtersSettings.brand.length > 0) {
            filteredProducts = filteredProducts.filter((product) =>
                filtersSettings.brand?.includes(product.brand)
            );
            console.log(`filter 3 worked`)
        }

        return filteredProducts;
    }, [products, filtersSettings]);

    const handleFilters = (
        typeOfFilter: keyof IFilterItem,
        value: string,
        filterState: boolean
    ): void => {
        if (filterState) {
            setFiltersSettings((prevFilters) => ({
                ...prevFilters,
                [typeOfFilter]:
                    prevFilters[typeOfFilter]?.filter(
                        (item) => item !== value
                    ) || [],
            }));
            return;
        }

        setFiltersSettings((prevFilters) => ({
            ...prevFilters,
            [typeOfFilter]: prevFilters.hasOwnProperty(typeOfFilter)
                ? [...prevFilters[typeOfFilter]!, value]
                : [value],
        }));
    };

    // useEffect(() => {
    //     const resetFilters = () => {
    //         setFilteredProducts(products);
    //     };

    //     if (!filtersSettings.keywords?.length) {
    //         resetFilters();
    //     }

    //     if (filteredProducts.length && filtersSettings.keywords?.length) {

    //         const filtered = product.filter((t) =>
    //             t.keywords.some((r) => filtersSettings.keywords?.includes(r))
    //         );

    //         setFilteredProducts(filtered);
    //     }
    // }, [filtersSettings]);

    const checkTEST = () => {
        console.log(filtersSettings);
    };

    return (
        <div className="catalog-wrap">
            <button className = "fixed left-0" onClick={checkTEST}>CLICK ME</button>
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
                    <SideBar sortBy={handleFilters} />
                </div>
                <div className="product-show container ">
                    {filteredProducts ? (
                        filteredProducts.map((product) => (
                            <Product product={product} key={product.id} />
                        ))
                    ) : (
                        <p>No products found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Catalog;
