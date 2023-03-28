import React, { useState } from "react";
import { IProduct } from "../models";
import OrangeButton from "./Button";
import white_cart_img from "../img/cart_img_white.png";
import "../styles/product-style/product.css";

interface ProductProps {
    product: IProduct;   
}

export default function Product({ product }: ProductProps) {   

    return (
        <div className="product-container flex flex-col shadow p-4">
            <img src={product.url} alt={product.title} className="w-1/3 product-image" />
            <div className="flex flex-row">
                <img src="" alt="" />
                <p>
                    {product.amount}
                    {product.typeOfMeasurement}
                </p>
            </div>
            <h4 className="font-bold">{product.title}</h4>
            <p>
                <span className=" text-gray-500">Штрихкод: </span>
                <span className="font-bold">{product.barcode}</span>
            </p>
            <p>
                <span className=" text-gray-500">Производитель: </span>
                <span className="font-bold">{product.manufacturer}</span>
            </p>
            <p>
                <span className=" text-gray-500">Бренд: </span>
                <span className="font-bold">{product.brand}</span>
            </p>
            <div className="flex justify-between items-center ">
                <span className="font-bold">{product.price.sum}{product.price.typeOfCurrency}</span>
                <OrangeButton className={"flex flex-row "}>
                    <span>В корзину</span>
                    <img src={white_cart_img} alt="" />
                </OrangeButton>
            </div>
        </div>
    );
}
