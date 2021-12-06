import React from "react";
import { render } from "@testing-library/react";
import { AuthenticatedHeader } from ".";

describe("AuthenticatedHeader", () => {
  it("renders the component properly", () => {
    const { container } = render(<AuthenticatedHeader />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders logo in the header", () => {
    const { getByRole } = render(<AuthenticatedHeader />);

    expect(getByRole("img")).toBeInTheDocument();
  });

  it("renders greeting message in the header", () => {
    const { getByText } = render(<AuthenticatedHeader />);

    expect(getByText(/hello there!/i)).toBeInTheDocument();
  });
});
