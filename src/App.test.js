import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders 3 list items", () => {
  render(<App />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toBe(3);
});
test("renders title with Hello text", () => {
  render(<App />);
  const title = screen.getByTestId("mytestid");
  expect(title).toHaveTextContent("Hello");
});
