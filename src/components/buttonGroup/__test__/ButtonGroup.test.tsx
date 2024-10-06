import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ButtonGroup from '../ButtonGroup';
import Button from "../../button/Button";

describe("ButtonGroup component", () => {
  it("ButtonGroup should render correctly", () => {
    render(<ButtonGroup><Button onClick={() => console.log('yo')}>Click me</Button></ButtonGroup>);
    const buttonGroup = screen.getByText("Click me");
    expect(buttonGroup).toBeInTheDocument();
  });
});
