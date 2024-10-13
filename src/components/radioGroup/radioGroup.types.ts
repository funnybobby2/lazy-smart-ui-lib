export interface RadioGroupProps {
  custom?: string;
  options: { label: string; value: string }[];
  selectedValue: string;
  labelPosition?: "left" | "right";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onChange: (value:string) => void;
}
