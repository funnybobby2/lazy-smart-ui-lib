import { StyledRadioGroup } from './radioGroup.style';
import { RadioGroupProps } from "./radioGroup.types";
import Radio from '../radio/Radio';
import {FC, useState} from "react";

const RadioGroup: FC<RadioGroupProps> = ({selectedValue, options, disabled, custom, labelPosition='left', onChange, size = "medium"}) => {
  const [value, setValue] = useState(selectedValue);

  const handleChange = (val: string) => {
    setValue(val);
    onChange(val);
  }
  
  return (
    <StyledRadioGroup className={custom}>
      {options.map((option) => (
        <Radio key={option.value}
          checked={option.value === value}
          disabled={disabled}
          label={option.label}
          radiovalue={option.value}
          labelPosition={labelPosition}
          size={size}
          onClick={() => handleChange(option.value)}/>
      ))}
    </StyledRadioGroup>
  );
};

export default RadioGroup;