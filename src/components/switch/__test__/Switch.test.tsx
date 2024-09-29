import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Switch from "../Switch";

describe("Switch component", () => {
  it("Switch should render correctly", () => {
    render(<Switch label="Toggle" onClick={() => console.log('yo')}/>);
    const toggle = screen.getByText("Toggle");
    expect(toggle).toBeInTheDocument();
  });
});
