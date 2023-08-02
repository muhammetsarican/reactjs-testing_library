import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToDoApp from "./app";

describe("To do app testing", ()=>{
    let button, input;
    beforeEach(()=>{
        render(<ToDoApp />)
        button=screen.getByText("Send");
        input=screen.getByLabelText("Text");
    })

    test("We checking 3 objects",()=>{
        const items=screen.getAllByText(/Item/i);

        expect(items.length).toEqual(3);
    })

    test("We check input and button",()=>{
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    })

    test("Input and button must be in document",()=>{
        let name="Mustafa";
        userEvent.type(input, name);

        userEvent.click(button);

        expect(screen.getByText(name)).toBeInTheDocument();
    })
})