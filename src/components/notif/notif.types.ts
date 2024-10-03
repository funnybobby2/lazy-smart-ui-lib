import { ReactNode } from "react";

export interface NotifProps {
  custom?: string;
  open?: boolean;
  duration?: number;
  onClose?: () => void;
  children?: ReactNode;
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  type?: 'error' | 'warning' | 'success' | 'info' | 'other';
}