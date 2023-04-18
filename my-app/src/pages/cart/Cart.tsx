import * as React from "react";
import OrangeButton from "../../components/button";
import CartProduct from "../../components/CartProduct/CartProduct";
import ThankYouModal from "../../components/modal/ThankYouModal";
import { products } from "../../data/products";
import { InfoAboutPurchase, IProduct } from "../../models";
import "../../styles/cart-styles/cart-styles.css";

export interface ICartProps {
    info: InfoAboutPurchase[];
    removeFromCart: (id: number) => void;
    clearCart: () => void;
}

export default function Cart({ info, removeFromCart, clearCart }: ICartProps) {
    const [sum, setSum] = React.useState(0);
    const [modal, setModal] = React.useState(false);

    const productToPurchase = products;

    const productsInCart = productToPurchase.filter((p) => {
        const cartItem = info.find((item) => item.info.id === p.id);
        return cartItem !== undefined;
    });

    React.useEffect(() => {
        const newSum = calcSum(productsInCart);
        setSum(newSum);
    }, [productsInCart]);

    const calcSum = (cartItem: IProduct[]) => {
        return cartItem.reduce((total, item) => {
            return total + item.price.sum * findAmount(item.id);
        }, 0);
    };

    const closeModal = () => {
        setModal(!modal);
    };

    const handleClick = () => {
        clearCart();
        closeModal();
    };

    const findAmount = (id: number) => {
        const productInfo = info.find((e) => e.info.id === id);
        if (productInfo === undefined) {
            return 0;
        } else return productInfo.info.amount;
    };

    return (
        <div data-testid="main" className="cart-container">
            <div className="bread-crumbs-container">
                <ul className="flex bread">
                    <li>Главня</li>
                    <li>Корзина</li>
                </ul>
            </div>
            <h1 data-testid="cart" className="cart-headline">
                Корзина
            </h1>
            <hr className="border-dashed dash" />
            {!productsInCart.length && (
                <h1 data-testid="empty">Карзина пуста</h1>
            )}
            {productsInCart.map((cartItem) => {
                const product = products.find((p) => p.id === cartItem.id);
                if (product) {
                    return (
                        <CartProduct
                            removeFromCart={removeFromCart}
                            key={product.id}
                            product={product}
                            amount={findAmount(product.id)}
                        />
                    );
                }
                return null;
            })}

            <div className="buy-product">
                <OrangeButton
                    onClick={handleClick}
                    className={"buy-product-btn"}
                >
                    <span data-testid="buy">Оформить заказ</span>
                </OrangeButton>

                <div>
                    <span className="sum font-bold">{sum} ₸</span>
                </div>
            </div>
            {modal && <ThankYouModal onClose={closeModal} />}
        </div>
    );
}
