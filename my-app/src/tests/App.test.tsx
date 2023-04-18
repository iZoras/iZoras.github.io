import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";



describe("App", () => {
    test("renders header", () => {
        render(<App />, { wrapper: MemoryRouter });
        const header = screen.getByTestId("header");
        expect(header).toBeInTheDocument();
    });

    test("renders catalog link", () => {
        render(<App />, { wrapper: MemoryRouter });
        const linkElement = screen.getByText(/catalog/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("renders catalog upon link click", () => {
        render(<App />, { wrapper: MemoryRouter });
        const linkElement = screen.getByText(/catalog/i);
        const catalog = screen.getByText("Каталог");

        fireEvent.click(linkElement);

        expect(catalog).toBeInTheDocument();
    });

    describe("Cart", () => {
        test("Product added to cart and then removed upon buying", () => {
            render(<App />, { wrapper: MemoryRouter });

            fireEvent.click(screen.getByText("CATALOG"));
            fireEvent.click(screen.getByTestId("click1"));
            fireEvent.click(screen.getByTestId("link-to-cart"));

            expect(screen.getByTestId("cart-product-1")).toBeInTheDocument();

            fireEvent.click(screen.getByTestId("buy"));
            fireEvent.click(screen.getByTestId("modal"));

            expect(screen.getByTestId("empty")).toBeInTheDocument();
        });
    });

    
    
});
