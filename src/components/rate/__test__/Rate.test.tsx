import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Rate from "../Rate";

describe("Rate component", () => {
  it("Rate should render correctly", () => {
    render(<Rate value={3} max={5} onChange={(x: number) => console.log(x)} />);
    const stars = screen.getAllByText("★");
    expect(stars.length).toBe(5);
  });
});
