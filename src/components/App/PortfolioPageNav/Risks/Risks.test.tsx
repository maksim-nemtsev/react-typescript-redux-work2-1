import React from "react";
import { render, screen } from "@testing-library/react";
import Risks from "./Risks";

test("renders learn react link", () => {
  render(<Risks />);
  const linkElement = screen.getByText(/Risks/i);
  expect(linkElement).toBeInTheDocument();
});
