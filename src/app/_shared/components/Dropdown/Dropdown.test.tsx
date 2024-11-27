import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { DropdownRoot, DropdownItem } from "./index";

describe("Dropdown Component", () => {
  it("renders the trigger element correctly", () => {
    const { container } = render(
      <DropdownRoot trigger={<button>Open Menu</button>}>
        <DropdownItem label="Item 1" onClick={() => {}} />
        <DropdownItem label="Item 2" onClick={() => {}} />
      </DropdownRoot>
    );

    expect(container.querySelector("button")).toBeInTheDocument();
  });

  it("displays the menu items when the trigger is clicked", () => {
    const { container } = render(
      <DropdownRoot trigger={<button>Open Menu</button>}>
        <DropdownItem label="Item 1" onClick={() => {}} />
        <DropdownItem label="Item 2" onClick={() => {}} />
      </DropdownRoot>
    );

    const trigger = screen.getByText("Open Menu");
    fireEvent.click(trigger);

    expect(container.querySelector("button[type='button']")).toBeInTheDocument();
  });

  it("calls the onClick handler when an item is clicked", () => {
    const handleClick = jest.fn();
  
    render(
      <DropdownRoot trigger={<button>Open Menu</button>} testMode open>
        <DropdownItem label="Item 1" onClick={handleClick} />
      </DropdownRoot>
    );
  
    const item = screen.getByText("Item 1");
    fireEvent.click(item);
  
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  

  it("renders items with icons correctly", () => {
    render(
      <DropdownRoot trigger={<button>Open Menu</button>} testMode open>
        <DropdownItem label="Item 1" icon={<span>Icon</span>} />
      </DropdownRoot>
    );
  
    const icon = screen.getByText("Icon");
    expect(icon).toBeInTheDocument();
  });
});
