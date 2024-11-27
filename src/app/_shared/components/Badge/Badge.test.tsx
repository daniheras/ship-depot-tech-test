import React from "react";
import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders the children correctly", () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText("Test Badge")).toBeInTheDocument();
  });

  it("applies default variant and size classes", () => {
    render(<Badge>Default Badge</Badge>);
    const badge = screen.getByText("Default Badge");
    expect(badge).toHaveClass("bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-md");
  });

  it("applies dark mode classes for default variant", () => {
    render(<Badge>Dark Mode Badge</Badge>);
    const badge = screen.getByText("Dark Mode Badge");
    expect(badge).toHaveClass("dark:bg-gray-700 dark:text-gray-200");
  });

  it("applies dark mode classes for success variant", () => {
    render(<Badge variant="success">Success Badge</Badge>);
    const badge = screen.getByText("Success Badge");
    expect(badge).toHaveClass("dark:bg-green-900 dark:text-green-200");
  });

  it("applies large size classes", () => {
    render(<Badge size="large">Large Badge</Badge>);
    const badge = screen.getByText("Large Badge");
    expect(badge).toHaveClass("text-base px-4 py-1.5 rounded-lg");
  });

  it("allows custom class names", () => {
    render(<Badge className="custom-class">Custom Badge</Badge>);
    const badge = screen.getByText("Custom Badge");
    expect(badge).toHaveClass("custom-class");
  });
});
