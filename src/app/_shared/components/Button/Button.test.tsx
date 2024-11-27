import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button Component", () => {
  it("renders children correctly", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("applies the primary variant by default", () => {
    render(<Button>Primary Button</Button>);
    const button = screen.getByText("Primary Button");
    expect(button).toHaveClass("bg-gray-800");
    expect(button).toHaveClass("text-white");
  });

  it("applies the secondary variant when specified", () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const button = screen.getByText("Secondary Button");
    expect(button).toHaveClass("bg-white");
    expect(button).toHaveClass("text-gray-900");
  });

  it("adds custom class names", () => {
    render(<Button className="custom-class">Custom Class</Button>);
    const button = screen.getByText("Custom Class");
    expect(button).toHaveClass("custom-class");
  });

  it("is disabled when the disabled prop is true", () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByText("Disabled Button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass("disabled:pointer-events-none");
    expect(button).toHaveClass("disabled:opacity-50");
  });

  it("calls the onClick handler when clicked", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click Me</Button>);
    const button = screen.getByText("Click Me");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does not call the onClick handler when disabled", () => {
    const onClick = jest.fn();
    render(
      <Button disabled onClick={onClick}>
        Disabled Click
      </Button>
    );
    const button = screen.getByText("Disabled Click");
    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("renders with the correct type attribute", () => {
    render(<Button type="submit">Submit</Button>);
    const button = screen.getByText("Submit");
    expect(button).toHaveAttribute("type", "submit");
  });
});
