import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders an h1", () => {
  render(<App />);
  const h1 = screen.getByText(/Hello React testing library/);

  expect(h1).toHaveTextContent("Hello React testing library");
});
