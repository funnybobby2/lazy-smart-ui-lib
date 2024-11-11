import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Select from "../Select";

describe("Select component", () => {
  it("Select should render correctly", () => {
    render(<Select id="toto" value="test" onChange={(text) => console.log(text)}/>);
    const select = screen.getByText("test");
    expect(select).toBeInTheDocument();
  });
});
