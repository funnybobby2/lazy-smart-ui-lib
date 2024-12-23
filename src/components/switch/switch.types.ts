import { ReactNode } from "react";

export interface SwitchProps {
  custom?: string;
  disabled?: boolean;
  initialChecked?: boolean;
  label?: ReactNode;
  labelPosition?: "left" | "right";
  onClick: (val: boolean) => void;
  isSimple?: boolean;
}
