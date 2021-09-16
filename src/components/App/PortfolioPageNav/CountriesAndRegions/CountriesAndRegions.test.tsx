import React from "react";
import { render, screen } from "@testing-library/react";
import CountriesAndRegions from "./CountriesAndRegions";

test("renders learn react link", () => {
  render(<CountriesAndRegions />);
  const linkElement = screen.getByText(/CountriesAndRegions/i);
  expect(linkElement).toBeInTheDocument();
});
