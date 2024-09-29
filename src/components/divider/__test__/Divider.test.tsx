import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Divider from "../Divider";

describe("Divider component", () => {
  it("Divider should render correctly", () => {
    render(<Divider label="toto"/>);
    const divider = screen.getByText("toto");
    expect(divider).toBeInTheDocument(); // Vérifie que l'élément <hr> existe
  });
});
