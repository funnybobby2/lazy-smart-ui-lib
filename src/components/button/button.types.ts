import { ReactNode } from "react";

export interface ButtonProps {
  custom?: string;
  disabled?: boolean;
  id?: string;
  label: ReactNode;
  onClick: () => void;
  size?: "small" | "medium" | "large";
  theme?: "naked" | "classic" | "outlined";
}
