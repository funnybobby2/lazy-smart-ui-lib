import { ReactNode } from "react";

export interface SwitchProps {
  custom?: string;
  disabled?: boolean;
  label?: ReactNode;
  labelPlacement?: "left" | "right";
  onClick: () => void;
}
