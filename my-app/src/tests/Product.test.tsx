import { fireEvent, render, screen } from "@testing-library/react";
import Product from "../components/Product";
import { products } from "../data/products"; // assuming this is an array of products
import { IProduct } from "../models";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("Product", () => {
    test("renders product details", () => {
        const product: IProduct = products[0];
        const addToCart = jest.fn();

        render(<Product product={product} addToCart={addToCart} />, {
            wrapper: MemoryRouter,
        });
        const title = screen.getByTestId("title");

        expect(title).toBeInTheDocument();
    });

    test("adding to cart is call once if clicked on", () => {
        const product: IProduct = products[0];
        const addToCart = jest.fn();

        render(<Product product={product} addToCart={addToCart} />, {
            wrapper: MemoryRouter,
        });
        fireEvent.click(screen.getByTestId("click1"))

        expect(addToCart).toBeCalled();
    });
});
