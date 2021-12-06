import React from "react";
import { render, screen } from "@testing-library/react";
import { Link } from ".";

describe("Link", () => {
  it("renders it with a text", () => {
    render(<Link href="/my-link" text="anything" />);

    const children = screen.getByText(/anything/i)

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/my-link')
  });
});
