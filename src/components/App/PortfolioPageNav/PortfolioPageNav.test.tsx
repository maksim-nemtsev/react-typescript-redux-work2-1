import React from "react";
import { render, screen } from "@testing-library/react";
import PortfolioPageNav from "./PortfolioPageNav";

test("renders learn react link", () => {
  render(<PortfolioPageNav />);
  const linkElement = screen.getByText(/PortfolioPageNav/i);
  expect(linkElement).toBeInTheDocument();
});
