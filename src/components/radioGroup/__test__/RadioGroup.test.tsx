import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import RadioGroup from "../RadioGroup";

describe("Radio component", () => {
  it("Radio should render correctly", () => {
    render(<RadioGroup options={[{label: "Radio#1", value: "#1"}, {label: "Radio#2", value: "#2"}]} selectedValue="#1" onChange={() => console.log("checked")} ></RadioGroup>);
    const radio = screen.getByText("Radio#1");
    expect(radio).toBeInTheDocument();
  });
});
