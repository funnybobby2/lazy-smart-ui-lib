import { ReactNode } from "react";

export interface TooltipProps {
  custom?: string;
  position?: 'top' | 'right' | 'left' | 'bottom';
  children?: ReactNode;
  theme?: "dark" | "light";
  content?: ReactNode;
}