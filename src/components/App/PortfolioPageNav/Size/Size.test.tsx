import React from "react";
import { render, screen } from "@testing-library/react";
import Size from "./Size";

test("renders learn react link", () => {
  render(<Size />);
  const linkElement = screen.getByText(/Size/i);
  expect(linkElement).toBeInTheDocument();
});
