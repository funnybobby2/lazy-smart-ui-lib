import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button component", () => {
  it("Button should render correctly", () => {
    render(<Button label="Click me" onClick={() => console.log('yo')}/>);
    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
  });
});
