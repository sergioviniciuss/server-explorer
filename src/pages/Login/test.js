import React from "react";
import { render } from "@testing-library/react";
import { Login } from ".";

describe("Login", () => {
  it("renders component properly", () => {
    const { container } = render(<Login />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders logo in the header", () => {
    const { getByRole } = render(<Login />);

    expect(getByRole("img")).toBeInTheDocument();
  });
});
