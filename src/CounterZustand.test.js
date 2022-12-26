import { fireEvent, render, screen } from "@testing-library/react";
import { useCounterStore } from "./counterStore";
import CounterZustand from "./CounterZustand";

const originalState = useCounterStore.getState();
beforeEach(() => {
  useCounterStore.setState(originalState);
});

test("should increment by one", () => {
  render(<CounterZustand></CounterZustand>);
  const countText = screen.getByRole("contentinfo");
  expect(countText).toHaveTextContent("0");
  const incrementButton = screen.getByText("Increment");
  fireEvent.click(incrementButton);
  expect(countText).toHaveTextContent("1");
});
test("should decrement by one", () => {
  render(<CounterZustand></CounterZustand>);
  const countText = screen.getByRole("contentinfo");
  expect(countText).toHaveTextContent("0");
  const decrementButton = screen.getByText("Decrement");
  fireEvent.click(decrementButton);
  expect(countText).toHaveTextContent("-1");
});
