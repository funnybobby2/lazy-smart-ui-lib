import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Badge from "../Badge";

describe("Badge component", () => {
  it("Badge should render correctly", () => {
    render(<Badge value={25} max={20}> Toto </Badge>);
    const badge = screen.getByText("Toto");
    expect(badge).toBeInTheDocument();
  });
});
