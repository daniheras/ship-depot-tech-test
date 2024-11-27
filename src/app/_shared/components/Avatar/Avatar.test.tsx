import React from "react";
import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("Avatar Component", () => {
  it("renders with a background image", () => {
    const testImage = "https://example.com/image.jpg";
    render(<Avatar img={testImage} />);
    const avatar = screen.getByRole("avatar");
    expect(avatar).toHaveStyle(`background-image: url('${testImage}')`);
  });

  it("applies default size and shape classes", () => {
    render(<Avatar />);
    const avatar = screen.getByRole("avatar");
    expect(avatar).toHaveClass("w-8 h-8");
    expect(avatar).toHaveClass("rounded-full");
  });

  it("applies custom size classes", () => {
    render(<Avatar size="large" />);
    const avatar = screen.getByRole("avatar");
    expect(avatar).toHaveClass("w-12 h-12");
  });

  it("applies custom shape classes", () => {
    render(<Avatar shape="rounded" />);
    const avatar = screen.getByRole("avatar");
    expect(avatar).toHaveClass("rounded-md");
  });

  it("merges additional class names", () => {
    render(<Avatar className="custom-class" />);
    const avatar = screen.getByRole("avatar");
    expect(avatar).toHaveClass("custom-class");
  });

  it("supports a combination of custom size, shape, and additional classes", () => {
    render(<Avatar size="small" shape="rounded" className="extra-class" />);
    const avatar = screen.getByRole("avatar");
    expect(avatar).toHaveClass("w-4 h-4");
    expect(avatar).toHaveClass("rounded-md");
    expect(avatar).toHaveClass("extra-class");
  });
});
