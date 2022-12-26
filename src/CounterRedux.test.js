import { fireEvent, render, screen } from "@testing-library/react";
import { CounterRedux } from "./CounterRedux";
import { Provider } from "react-redux";
import { createStore } from "./store";
test("should increment by one", () => {
  render(
    <Provider store={createStore()}>
      <CounterRedux></CounterRedux>
    </Provider>
  );
  const countText = screen.getByRole("contentinfo");
  expect(countText).toHaveTextContent("0");
  const incrementButton = screen.getByText("Increment");
  fireEvent.click(incrementButton);
  expect(countText).toHaveTextContent("1");
});
test("should increment by one again", () => {
  render(
    <Provider store={createStore()}>
      <CounterRedux></CounterRedux>
    </Provider>
  );
  const countText = screen.getByRole("contentinfo");
  expect(countText).toHaveTextContent("0");
  const incrementButton = screen.getByText("Increment");
  fireEvent.click(incrementButton);
  expect(countText).toHaveTextContent("1");
});
