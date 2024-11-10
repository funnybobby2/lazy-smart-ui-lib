import { ReactNode } from "react";

export interface RateProps {
  custom?: string;
  value?: number;
  isprecise?: boolean;
  isreadonly?: boolean;
  label?: ReactNode;
  position?: "top" | "right" | "bottom" | "left";
  max?: 5 | 10;
  size?: "small" | "medium" | "large";
  onChange: (val: number) => void;
}
