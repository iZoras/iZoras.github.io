import { fireEvent, render, screen } from "@testing-library/react";
import Catalog from "../pages/catalog/catalog";
import { MemoryRouter } from "react-router-dom";

describe("Catalog", () => {
    test("renders catalog of 11 components", () => {
        const addToCart = jest.fn();
        const removeFromCart = jest.fn();

        render(
            <Catalog addToCart={addToCart} removeFromCart={removeFromCart} />,
            { wrapper: MemoryRouter }
        );        

        expect(screen.queryAllByTestId("title")).toHaveLength(11);        
    });

    test("renders 2 after filtering and then all 11 upon unchecking", () => {
        const addToCart = jest.fn();
        const removeFromCart = jest.fn();

        render(
            <Catalog addToCart={addToCart} removeFromCart={removeFromCart} />,
            { wrapper: MemoryRouter }
        );
        
        fireEvent.click(screen.getByTestId("option-Toyota"));

        expect(screen.queryAllByTestId("title")).toHaveLength(2);

        fireEvent.click(screen.getByTestId("option-Toyota"));

        expect(screen.queryAllByTestId("title")).toHaveLength(11);
    });
});
