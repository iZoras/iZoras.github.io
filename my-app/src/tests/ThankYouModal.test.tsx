import { fireEvent, render, screen } from "@testing-library/react";
import ThankYouModal from "../components/modal/ThankYouModal";

describe("Modal", () => {
    test("modal is closed", () => {
const close = jest.fn()

        render(<ThankYouModal onClose={close} />);
        fireEvent.click(screen.getByTestId("modal"));

        expect(close).toHaveBeenCalledTimes(1)
        expect(close).toHaveBeenCalled()        
    });
});
