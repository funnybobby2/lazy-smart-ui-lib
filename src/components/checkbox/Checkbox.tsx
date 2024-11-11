import { StyledCheckbox } from './checkbox.style';
import clsx from 'clsx';
import { CheckboxProps } from "./checkbox.types";
import {FC, useState} from "react";
import { CheckIcon, UncheckIcon } from '../icon/Icon';

const Checkbox: FC<CheckboxProps> = ({initialChecked=false, custom, disabled, label, labelPosition='left', onClick, size = "medium"}) => {
  const [value, setValue] = useState(initialChecked);

  const handleClick = () => {
    setValue(!value);
    onClick(value);
  }

  const computedClasses = clsx(custom, {'disabled': disabled}, size);
  const labelPlacement = `label-${labelPosition}`;

  return (
    <StyledCheckbox className={`lazy-smart-ui-checkbox ${computedClasses}`} onClick={handleClick} checked={value} disabled={disabled}>
      {label && labelPosition === 'left' && <div className={`label ${labelPlacement}`}>{label}</div>}
        {value && <CheckIcon/>}
        {!value && <UncheckIcon/>}
      {label && labelPosition === 'right' && <div className={`label ${labelPlacement}`}>{label}</div>}
    </StyledCheckbox>
  );
};

export default Checkbox;