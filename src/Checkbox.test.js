import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Checkbox } from "./Checkbox";

test("Selection checkbox", () => {
  render(<Checkbox />);
  const checkbox = screen.getByLabelText(/not checked/);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
});
