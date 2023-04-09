import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { IProduct } from "../models";
import "../styles/product-card/product-card-styles.css";
import shopping_cart from "../img/cart_img_white.png";
import OrangeButton from "../components/button";
import share_img from "../img/share_img.png";
import down_arrow_img from "../img/grey_down_arrow.png";
import lil_arrow from "../img/lil_description_arrow.png";

interface ProductCardProps {
    productId: number;
    amountInCart: number;
    addToCart: (id: number) => void;
    removeFromCart: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
    productId,
    amountInCart,
    addToCart,
    removeFromCart,
}) => {
    const navigate = useNavigate();
    const [descShown, setIfDescShown] = useState<boolean>(false);

    // Get the product object from localStorage using the productId
    const products: IProduct[] = JSON.parse(
        localStorage.getItem("products") || "[]"
    );
    const product = products.find((p: IProduct) => p.id === productId);

    // If no product is found, redirect to the catalog page
    if (!product) {
        navigate("/catalog");
        return null;
    }

    const handleDescriptionShow = () => {
        setIfDescShown(!descShown);
    };

    const handleAddToCart = () => {
        addToCart(product.id);
    };

    const handleRemoveFromCart = () => {
        removeFromCart(product.id);
    };

    // Destructure the product object for easier access to its properties

    return (
        <div className="product-card-container container">
            <div className="bread-crumbs-container">
                <ul className="flex bread-crumbs">
                    <li>Главная</li>
                    <li>Каталог</li>
                    <li>{product.title}</li>
                </ul>
            </div>
            <div className="product-card-wrap gray-color">
                <div className="img-container">
                    <img className="w-1/2 mx-auto" src={product.url} alt="" />
                </div>
                <div className="product-card-info">
                    <span className="text-green-500">В наличии</span>
                    <h1 className="product-title text-black">
                        {product.title}
                    </h1>
                    <div className="amount whitespace-nowrap">
                        <img src="" alt="" />
                        {product.amount}{product.typeOfMeasurement}
                        
                    </div>
                    <div className="price-and-add flex items-center text-black">
                        <span className="price">
                            {`${product.price.sum} ${product.price.typeOfCurrency}`}
                        </span>
                        <div className="amount-change">
                            <button
                                onClick={handleRemoveFromCart}
                                className="amount-btn"
                            >
                                -
                            </button>
                            {amountInCart}
                            <button
                                onClick={handleAddToCart}
                                className="amount-btn"
                            >
                                +
                            </button>
                        </div>
                        <OrangeButton className={"flex "}>
                            <div
                                onClick={handleAddToCart}
                                className="flex add-to-cart"
                            >
                                <span className="text-white">В корзину</span>
                                <img src={shopping_cart} alt="" />
                            </div>
                        </OrangeButton>
                    </div>
                    <div className="three-btn flex">
                        <div className="white-shadow">
                            <img src={share_img} alt="" />{" "}
                        </div>
                        <div className="white-shadow hide">
                            <span>
                                При покупке от{" "}
                                <span className="font-bold">10 000 ₸</span>{" "}
                                бесплатная
                                <br />
                                доставка по Кокчетаву и области
                            </span>
                        </div>
                        <div className="white-shadow hide">
                            <span className="font-bold">Прайс-лист</span>
                            <img src={down_arrow_img} alt="" />
                        </div>
                    </div>
                    <div className="product-details flex flex-col ">
                        <div>
                            <span className="gray-color">Производитель: </span>
                            <span className="text-black">
                                {product.manufacturer}
                            </span>
                        </div>
                        <div>
                            <span className="gray-color">Бренд: </span>
                            <span className="text-black">{product.brand}</span>
                        </div>
                        <div>
                            <span className="gray-color">Штрихкод: </span>
                            <span className="text-black">
                                {product.barcode}
                            </span>
                        </div>
                    </div>

                    <div className="product-description ">
                        <div
                            onClick={handleDescriptionShow}
                            className="show-description flex gap-1 items-center cursor-pointer"
                        >
                            <span className="font-bold">Описание</span>
                            <img
                                className={descShown ? "down" : "up"}
                                src={lil_arrow}
                                alt=""
                            />
                        </div>
                        {descShown && <div>{product.description}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
