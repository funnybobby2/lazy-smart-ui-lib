import { StyledCheckbox } from './checkbox.style';
import clsx from 'clsx';
import { CheckboxProps } from "./checkbox.types";
import {FC, useState} from "react";

const CheckIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g id="ic_fluent_checkbox_checked_24_filled" fill="#1976d2" fillRule="nonzero">
      <path d="M18,3 C19.6568542,3 21,4.34314575 21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 L18,3 Z M16.4696699,7.96966991 L10,14.4393398 L7.53033009,11.9696699 C7.23743687,11.6767767 6.76256313,11.6767767 6.46966991,11.9696699 C6.1767767,12.2625631 6.1767767,12.7374369 6.46966991,13.0303301 L9.46966991,16.0303301 C9.76256313,16.3232233 10.2374369,16.3232233 10.5303301,16.0303301 L17.5303301,9.03033009 C17.8232233,8.73743687 17.8232233,8.26256313 17.5303301,7.96966991 C17.2374369,7.6767767 16.7625631,7.6767767 16.4696699,7.96966991 Z">
      </path>
    </g>
  </g>
</svg>
);

const UncheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g fill="#212121" fillRule="nonzero">
          <path d="M5.75,3 L18.25,3 C19.7687831,3 21,4.23121694 21,5.75 L21,18.25 C21,19.7687831 19.7687831,21 18.25,21 L5.75,21 C4.23121694,21 3,19.7687831 3,18.25 L3,5.75 C3,4.23121694 4.23121694,3 5.75,3 Z M5.75,4.5 C5.05964406,4.5 4.5,5.05964406 4.5,5.75 L4.5,18.25 C4.5,18.9403559 5.05964406,19.5 5.75,19.5 L18.25,19.5 C18.9403559,19.5 19.5,18.9403559 19.5,18.25 L19.5,5.75 C19.5,5.05964406 18.9403559,4.5 18.25,4.5 L5.75,4.5 Z">
          </path>
      </g>
    </g>
</svg>
);

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