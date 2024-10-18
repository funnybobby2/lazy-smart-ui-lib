import { ReactNode } from "react";

export interface RateProps {
  value?: number;
  isprecise?: boolean;
  isreadonly?: boolean;
  label?: ReactNode;
  position?: "top" | "right" | "bottom" | "left";
  max?: 5 | 10;
  onChange: (val: number) => void;
}
