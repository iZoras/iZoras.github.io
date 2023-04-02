import * as React from "react";
import { products } from "../../data/products";
import { IProduct } from "../../models";
import OrangeButton from "../button";
import trash_can from "../../img/trash_can.png";
import "../../styles/cart-product-style/cart-product-style.css";

export interface ICartProductProps {
    product: IProduct;
    amount: number;
    removeFromCart: (id: number) => void;
}

export default function CartProduct({ product, amount, removeFromCart }: ICartProductProps) {
    return (
        <div className="cart-product-container flex">
            <div className="left-side flex">
                <img className="" src={product.url} alt="" />

                <div className="title-disk">
                    <div>
                        <img src="" alt="" /> {product.amount}{" "}
                        {product.typeOfMeasurement}
                    </div>
                    <h1 className="cart-product-headline">{product.title}</h1>
                    <p>{product.description}</p>
                </div>
            </div>

            <div className="right-side flex items-center">
                <span>{amount}</span>
                <div className="price">
                    {product.price.sum} {product.price.typeOfCurrency}
                </div>
                <OrangeButton onClick = {() => {removeFromCart(product.id)}} className={"mr-0 trash-can"}>
                    <img src={trash_can} alt="" />
                </OrangeButton>
            </div>
            <hr className="border-dashed dash" />
        </div>
    );
}
