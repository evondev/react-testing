import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders heading with text Learn testing", () => {
  render(<App />);
  const heading = screen.getByText(/Learn testing/i);
  expect(heading).toBeInTheDocument();
});

test("renders 3 list item", () => {
  render(<App />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toEqual(3);
});

test("render button with Submit text and type button", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toHaveTextContent("Submit");
  expect(buttonElement).toHaveAttribute("type", "button");
});
