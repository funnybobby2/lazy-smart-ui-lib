import { ReactNode } from "react";

export interface BadgeProps {
  custom?: string;
  value?: number;
  type?: "info" | "success" | "warning" | "error" | "other";
  max?: number;
  position?: "top" | "bottom";
  children: ReactNode;
}