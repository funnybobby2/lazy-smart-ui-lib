import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Radio from "../Radio";

describe("Radio component", () => {
  it("Radio should render correctly", () => {
    render(<Radio onClick={() => console.log("checked")} checked label="checkbox"></Radio>);
    const radio = screen.getByText("checkbox");
    expect(radio).toBeInTheDocument();
  });
});
