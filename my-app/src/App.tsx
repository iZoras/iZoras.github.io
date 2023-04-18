import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import { InfoAboutPurchase } from "./models";
import Cart from "./pages/cart/Cart";

import Catalog from "./pages/catalog/catalog";
import ProductCard from "./pages/product-card";

function App() {
    const [productToPurchase, setProductToPurchase] = useState<
        InfoAboutPurchase[]
    >([]);

    const clearCart = () => {
        setProductToPurchase([]);
    };

    const addToCart = (id: number) => {
        const index = productToPurchase.findIndex(
            (item) => item.info.id === id
        );
        if (index !== -1) {
            const newProductToPurchase = [...productToPurchase];
            const productToUpdate = newProductToPurchase[index];
            if (productToUpdate) {
                productToUpdate.info.amount =
                    (productToUpdate.info.amount || 0) + 1;
                setProductToPurchase(newProductToPurchase);
            }
        } else {
            setProductToPurchase([
                ...productToPurchase,
                { info: { id: id, amount: 1 } },
            ]);
        }
        console.log(productToPurchase);
    };

    const removeFromCart = (id: number) => {
        const index = productToPurchase.findIndex(
            (item) => item.info.id === id
        );
        if (index !== -1) {
            const newProductToPurchase = [...productToPurchase];
            const productToRemove = newProductToPurchase[index];
            if (productToRemove) {
                if (productToRemove.info.amount === 1) {
                    newProductToPurchase.splice(index, 1);
                } else {
                    productToRemove.info.amount =
                        (productToRemove.info.amount || 0) - 1;
                }
                setProductToPurchase(newProductToPurchase);
            }
        }
    };

    return (
        <div className="App">
            <div>learn react</div>
            <div className="fixed left-0 top-10 flex flex-col">
                <Link data-testid="link-to-catalog" to={"/catalog"}>
                    CATALOG
                </Link>
                <Link
                    data-testid="link-to-product-card"
                    to={`/product-card?id=${1}`}
                >
                    PRODUCT-CARRD
                </Link>
                <Link data-testid="link-to-cart" to={"/cart"}>
                    CART
                </Link>
            </div>

            <Header
                title=""
                cart_price={1000}
                itemsInCart={productToPurchase.length}
            />
            <Routes>
                <Route
                    path="/catalog"
                    element={
                        <Catalog
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                        />
                    }
                />
                <Route
                    path={`/product-card`}
                    element={
                        <ProductCard
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                            amountInCart={0}
                        />
                    }
                />
                <Route
                    path="/cart"
                    element={
                        <Cart
                            data-testid="cart"
                            clearCart={clearCart}
                            removeFromCart={removeFromCart}
                            info={productToPurchase}
                        />
                    }
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
