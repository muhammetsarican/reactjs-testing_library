import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CounterApp from "./index";

describe("counter tests", () => {
    let counter, increaseBtn, decreaseBtn;
    beforeEach(() => {
        render(<CounterApp />);
        counter = screen.getByText("0");
        increaseBtn = screen.getByText("Increase");
        decreaseBtn = screen.getByText("Decrease");
    })
    afterEach(()=>{
        console.log("I will start after each")
    })
    beforeAll(()=>{
        console.log("I will start before all");
    })
    afterAll(()=>{
        console.log("I will start after all")
    })
    test("increase testing", () => {
        userEvent.click(increaseBtn);
        expect(counter).toHaveTextContent("1");
    })
    test("decrease testing", () => {
        userEvent.click(decreaseBtn);
        expect(counter).toHaveTextContent("-1");
    })
})