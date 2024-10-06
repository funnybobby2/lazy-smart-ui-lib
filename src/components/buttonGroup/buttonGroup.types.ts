import { ReactNode } from "react";

export interface ButtonGroupProps {
  custom?: string;
  direction?: 'horizontal' | 'vertical';
  children: ReactNode;
}
