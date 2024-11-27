import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card Component", () => {
  it("renders children correctly", () => {
    render(<Card>Test Content</Card>);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies default classes", () => {
    render(<Card>Default Card</Card>);
    const card = screen.getByText("Default Card");
    expect(card).toHaveClass("shadow-md");
    expect(card).toHaveClass("rounded-xl");
  });

  it("applies custom elevation classes", () => {
    render(<Card elevation="high">High Elevation</Card>);
    const card = screen.getByText("High Elevation");
    expect(card).toHaveClass("shadow-lg");
  });

  it("applies custom rounded classes", () => {
    render(<Card rounded="large">Large Borders</Card>);
    const card = screen.getByText("Large Borders");
    expect(card).toHaveClass("rounded-2xl");
  });

  it("merges custom class names", () => {
    render(<Card className="custom-class">Custom Class</Card>);
    const card = screen.getByText("Custom Class");
    expect(card).toHaveClass("custom-class");
  });

  it("handles a combination of elevation and rounded variants", () => {
    render(<Card elevation="low" rounded="small">Combination</Card>);
    const card = screen.getByText("Combination");
    expect(card).toHaveClass("shadow-sm");
    expect(card).toHaveClass("rounded-md");
  });
});
