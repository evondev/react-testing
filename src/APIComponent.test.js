import { render, screen } from "@testing-library/react";
import APIComponent from "./APIComponent";
test("Get the name from api", async () => {
  render(<APIComponent />);
  const result = await screen.findByRole("contentinfo");
  expect(result).toHaveTextContent("Your name is evondev");
});
