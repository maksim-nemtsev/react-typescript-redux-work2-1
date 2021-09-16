import React from "react";
import { render, screen } from "@testing-library/react";
import Industries from "./Industries";

test("renders learn react link", () => {
  render(<Industries />);
  const linkElement = screen.getByText(/Industries/i);
  expect(linkElement).toBeInTheDocument();
});
