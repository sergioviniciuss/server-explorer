import React from "react";
import { render, screen } from "@testing-library/react";
import { Error } from ".";

describe("Error", () => {
  it("renders Error component with error message", () => {
    const { container } = render(<Error error="An error occurred..." />);

    expect(screen.getByText(/An error occurred.../i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
