export interface RadioProps {
  checked: boolean;
  disabled?: boolean;
  label?: string;
  radiovalue: string;
  labelPosition?: "left" | "right";
  size?: "small" | "medium" | "large";
  onClick: (value:string) => void;
}
