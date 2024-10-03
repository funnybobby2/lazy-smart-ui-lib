import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Notif from "../Notif";

describe("Notif component", () => {
  it("Notif should render correctly", () => {
    render(<Notif> Toto </Notif>);
    const notif = screen.getByText("Toto");
    expect(notif).toBeInTheDocument();
  });
});
