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

    const [productToPurchase, setProductToPurchase] =
        React.useState<IProduct[]>(products);

    const productsInCart = productToPurchase.filter((p) => {
        console.log("hello");
        const cartItem = info.find((item) => item.info.id === p.id);
        return cartItem !== undefined;
    });

   

    React.useEffect(() => {
        const newSum = calcSum(productsInCart);
        setSum(newSum);
    }, [productsInCart]);

    const calcSum = (cartItem: IProduct[]) => {
        return cartItem.reduce((total, item) => {
            return total + item.price.sum;
        }, 0);
    };

    const closeModal = () => {
        setModal(!modal);
    };

    const handleClick = () => {
        clearCart();
        setModal(!modal);
    };

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
            {!info && <h1>Карзина пуста</h1>  }
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

            <div className="buy-product">
                <OrangeButton
                    onClick={handleClick}
                    className={"buy-product-btn"}
                >
                    <span>Оформить заказ</span>
                </OrangeButton>

                <div>
                    <span className="sum font-bold">{sum} ₸</span>
                </div>
            </div>
            {modal && <ThankYouModal onClose={closeModal} />}
        </div>
    );
}
