import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Checkbox from "../Checkbox";

describe("Checkbox component", () => {
  it("Checkbox should render correctly", () => {
    render(<Checkbox onClick={() => console.log("checked")} checked label="checkbox"></Checkbox>);
    const checkox = screen.getByText("checkbox");
    expect(checkox).toBeInTheDocument();
  });
});
