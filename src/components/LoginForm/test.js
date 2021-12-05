import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { LoginForm } from ".";

describe("LoginForm", () => {
  it("renders component properly", () => {
    const { container } = render(<LoginForm />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should display username input", () => {
    render(<LoginForm />);
    expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument();
  });

  it("Should display password input", () => {
    render(<LoginForm />);
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  });

  it("Should display a button with login text", () => {
    render(<LoginForm />);
    expect(
      screen.getByRole("button", {
        name: /login/i,
      })
    ).toBeInTheDocument();
  });
});
