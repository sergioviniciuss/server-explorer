import React from "react";
import { render, screen } from "@testing-library/react";
import { ServerCard } from ".";

describe("ServerCard", () => {
  it("renders with name and distance", () => {
    const { container } = render(<ServerCard name="Germany #01" distance={123} />);

    expect(screen.getByText(/Germany #01/i)).toBeInTheDocument();
    expect(screen.getByText(/123/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
