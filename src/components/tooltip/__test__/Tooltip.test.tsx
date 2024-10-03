import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Tooltip from "../Tooltip";

describe("Tooltip component", () => {
  it("Tooltip should render correctly", () => {
    render(<Tooltip content={"yo"}> Toto </Tooltip>);
    const tooltip = screen.getByText("Toto");
    expect(tooltip).toBeInTheDocument();
  });
});
