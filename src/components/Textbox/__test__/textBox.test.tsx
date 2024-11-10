import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import TextBox from "../TextBox";

describe("Button component", () => {
  it("Button should render correctly", () => {
    render(<TextBox id="toto" value="test"/>);
    const textBox = screen.getByText("test");
    expect(textBox).toBeInTheDocument();
  });
});