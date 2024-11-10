export interface TextBoxProps {
  completion?: string[];
  custom?: string;
  disabled?: boolean;
  id: string;
  onChange: (text: string) => void;
  placeholder?: string;
  readonly?: boolean;
  size?: "small" | "medium" | "large";
  theme?: "naked" | "classic" | "outlined";
  validator?: (text: string) => boolean;
  value?: string;
}
