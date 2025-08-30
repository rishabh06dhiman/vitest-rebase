import { render, screen, fireEvent } from "@testing-library/react";
import { Adder } from "./Adder";


test("adds two numbers and shows the result", () => {
  render(<Adder />);

  const input1 = screen.getByPlaceholderText("Enter first number");
  const input2 = screen.getByPlaceholderText("Enter second number");
  const button = screen.getByText("Add Numbers");

  fireEvent.change(input1, { target: { value: "5" } });
  fireEvent.change(input2, { target: { value: "7" } });
  fireEvent.click(button);

  expect(screen.getByText("Result: 12")).toBeInTheDocument();
});
