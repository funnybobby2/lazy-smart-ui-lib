export interface CheckboxProps {
  initialChecked?: boolean;
  custom?: string;
  disabled?: boolean;
  label?: string;
  labelPosition?: "left" | "right";
  size?: "small" | "medium" | "large";
  onClick: (value:boolean) => void;
}
