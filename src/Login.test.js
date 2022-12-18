import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";

test("username input should be rendered", () => {
  render(<Login />);
  const userInput = screen.getByPlaceholderText(/username/i);
  expect(userInput).toBeInTheDocument();
});
test("username input should change", () => {
  render(<Login />);
  const input = screen.getByPlaceholderText(/username/i);
  const testValue = "evondev";
  fireEvent.change(input, {
    target: {
      value: testValue,
    },
  });
  expect(input.value).toBe(testValue);
});
