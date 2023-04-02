import * as React from "react";
import CartProduct from "../../components/CartProduct/CartProduct";
import { products } from "../../data/products";
import { InfoAboutPurchase, IProduct } from "../../models";
import "../../styles/cart-styles/cart-styles.css";

export interface ICartProps {
    info: InfoAboutPurchase[];
    removeFromCart: (id: number) => void;
}

export default function Cart({ info, removeFromCart }: ICartProps) {
    const [productToPurchase, setProductToPurchase] =
        React.useState<IProduct[]>(products);

    const productsInCart = productToPurchase.filter((p) => {
        console.log("hello");
        const cartItem = info.find((item) => item.info.id === p.id);
        return cartItem !== undefined;
    });

    return (
        <div className="cart-container">
            <div className="bread-crumbs-container">
                <ul className="flex bread">
                    <li>Главня</li>
                    <li>Корзина</li>
                </ul>
            </div>
            <h1 className="cart-headline">Корзина</h1>
            <hr className="border-dashed dash" />

            {productsInCart.map((cartItem) => {
                const product = products.find((p) => p.id === cartItem.id);
                if (product) {
                    return (
                        <CartProduct
                            removeFromCart={removeFromCart}
                            key={product.id}
                            product={product}
                            amount={cartItem.amount || 0}
                        />
                    );
                }
                return null;
            })}
        </div>
    );
}
