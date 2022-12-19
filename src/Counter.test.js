import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("render count is 1", () => {
  render(<Counter />);
  const incrementButton = screen.getByRole("button");
  const result = screen.getByRole("contentinfo");
  fireEvent.click(incrementButton);
  expect(result).toHaveTextContent("Count is 1");
});
