import { useMemo, useState } from "react";
import Product from "../../components/Product";
import { products } from "../../data/products";
import "../../styles/catalog-styles/catalog.css";
import { filters } from "../../pages/catalog/catalog_viewController";
import FilterButton from "../../components/FilterButton";
import SideBar from "../../components/SideBar/SiteBar";
import { IFilterItem } from "../../models";

interface CatalogProps {
    addToCart: (id: number) => void;
    removeFromCart: (id: number) => void;
}

function Catalog({ addToCart, ...props }: CatalogProps): JSX.Element {
    localStorage.setItem("products", JSON.stringify(products));

    const [filtersSettings, setFiltersSettings] = useState<IFilterItem>({
        keywords: [],
        manufacturer: [],
        brand: [],
    });

    const [startPrice, setStartPrice] = useState(0);
    const [endPrice, setEndPrice] = useState(10000);

    const getPrice = (end: number, start: number) => {
        setStartPrice(start);
        setEndPrice(end);
    };

    //Добавляем в масив фильтров опции по которым фильтруем

    function inRange(num: number, start: number, end: number) {
        return num >= end && num <= start;
    }

    const filteredProducts = useMemo(() => {
        let filteredProducts = [...products];

        filteredProducts = filteredProducts.filter((product) =>
            inRange(product.price.sum, startPrice, endPrice)
        );

        if (filtersSettings.keywords && filtersSettings.keywords.length)
            if (
                filtersSettings.keywords &&
                filtersSettings.keywords.length > 0
            ) {
                // Apply keyword filter
                filteredProducts = filteredProducts.filter((product) =>
                    filtersSettings.keywords?.some((keyword) =>
                        product.keywords.includes(keyword)
                    )
                );
            }

        // Apply manufacturer filter
        if (
            filtersSettings.manufacturer &&
            filtersSettings.manufacturer.length > 0
        ) {
            filteredProducts = filteredProducts.filter((product) =>
                filtersSettings.manufacturer?.includes(product.manufacturer)
            );
        }

        // Apply brand filter
        if (filtersSettings.brand && filtersSettings.brand.length > 0) {
            filteredProducts = filteredProducts.filter((product) =>
                filtersSettings.brand?.includes(product.brand)
            );
        }

        return filteredProducts;
    }, [products, filtersSettings, startPrice, endPrice]);

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

    return (
        <div data-testid="catalog" className="catalog-wrap">
            <div>
                <span className=" text-gray-700">Главная</span>
                <span className=" text-sm text-gray-600"> | Каталог</span>
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

            <div className="flex flex-row max-w-screen-md catalog-container">
                <div className="sidebar">
                    <SideBar sortBy={handleFilters} filterByPrice={getPrice} />
                </div>
                <div className="product-show container ">
                    {filteredProducts ? (
                        filteredProducts.map((product) => (
                            <Product
                                addToCart={addToCart}
                                product={product}
                                key={product.id}
                            />
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
