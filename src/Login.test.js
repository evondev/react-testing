import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";

test("input username should render", () => {
  render(<Login />);
  const inputUserName = screen.getByPlaceholderText("username");
  expect(inputUserName).toBeInTheDocument();
});

test("input password should render", () => {
  render(<Login />);
  const inputPassword = screen.getByPlaceholderText("password");
  expect(inputPassword).toBeInTheDocument();
});

test("button should be disabled", () => {
  render(<Login />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeDisabled();
});

test("button should not be disabled if 2 inputs have value", () => {
  render(<Login />);
  const buttonElement = screen.getByRole("button");
  const testValue = "test";
  const inputUserName = screen.getByPlaceholderText("username");
  const inputPassword = screen.getByPlaceholderText("password");
  fireEvent.change(inputUserName, { target: { value: testValue } });
  fireEvent.change(inputPassword, { target: { value: testValue } });
  expect(buttonElement).not.toBeDisabled();
});

test("div element have text Leanne Graham", async () => {
  render(<Login />);
  const buttonElement = screen.getByRole("button");
  const testValue = "test";
  const inputUserName = screen.getByPlaceholderText("username");
  const inputPassword = screen.getByPlaceholderText("password");
  fireEvent.change(inputUserName, { target: { value: testValue } });
  fireEvent.change(inputPassword, { target: { value: testValue } });
  expect(buttonElement).not.toBeDisabled();
  fireEvent.click(buttonElement);
  const divElement = await screen.findByTestId("contentinfo");
  expect(divElement).toHaveTextContent("Leanne Graham");
});
