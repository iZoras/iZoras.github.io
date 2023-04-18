import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CartProduct from "../components/CartProduct/CartProduct";

const product = {
    id: 1,
    url: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    title: "Mens Casual Premium Slim Fit T-Shirts",
    typeOfMeasurement: "unit",
    amount: 1,
    barcode: 89736567,
    manufacturer: "Toyota",
    brand: "H&M",
    description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    price: {
        sum: 9999,
        typeOfCurrency: "₸",
    },
    keywords: ["руки"],
};

describe("CartProduct", () => {
    it("renders product details and allows removing from cart", () => {
        const removeFromCart = jest.fn();
        const amount = 2;
        render(
            <CartProduct
                product={product}
                amount={amount}
                removeFromCart={removeFromCart}
            />
        );

        expect(screen.getByTestId("title")).toBeInTheDocument();
        expect(screen.getByTestId(`price`)).toBeInTheDocument();
        
        expect(screen.getByTestId("description")).toBeInTheDocument();
       
        expect(screen.getByTestId("amount")).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("trash-can"));

        expect(removeFromCart).toHaveBeenCalledWith(product.id);
    });
});
