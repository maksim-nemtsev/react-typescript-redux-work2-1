import React from "react";
import { render, screen } from "@testing-library/react";
import Segment from "./Segment";

test("renders learn react link", () => {
  render(<Segment />);
  const linkElement = screen.getByText(/Segment/i);
  expect(linkElement).toBeInTheDocument();
});
