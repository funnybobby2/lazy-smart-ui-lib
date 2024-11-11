export interface SelectProps {
  options?: string[];
  custom?: string;
  disabled?: boolean;
  id: string;
  onChange: (text: string) => void;
  placeholder?: string;
  size?: "small" | "medium" | "large";
  theme?: "naked" | "classic" | "outlined";
  value?: string;
}
