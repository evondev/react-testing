import { render, renderHook, act } from "@testing-library/react";
import useCounter from "./useCounter";

test("useCounter", () => {
  const { result } = renderHook(() => useCounter());
  act(() => {
    result.current.handleIncrement();
  });
  expect(result.current.count).toBe(1);
});
