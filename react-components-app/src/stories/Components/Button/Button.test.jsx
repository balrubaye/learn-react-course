import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { Primary } from "./Button.stories";

test ("should render Button", () => {
    const label = "Click Me!";
    render(<Button label = {label} />) 
    const btnElm = screen.getByRole("button")
    expect(btnElm).toBeInTheDocument();
    expect(btnElm).toHaveTextContent("Click");
    }
);

test ("This should render the primary button", () => {
    render (<Primary {...Primary.args} />)
    const butElm = screen.getByRole("button")
    expect(butElm).toHaveClass("storybook-button--primary")
});
