import { StyledRadio } from './radio.style';
import clsx from 'clsx';
import { RadioProps } from "./radio.types";
import {FC} from "react";

const RadioOn = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
  <g>
    <path fill="none" d="M0 0h24v24H0z"/>
    <path fill="#1976d2" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-3a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
  </g>
</svg>
);

const RadioOff = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" fill="#080341" d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"/>
</svg>
);

const Radio: FC<RadioProps> = ({checked=false, radiovalue, disabled, label, labelPosition='left', onClick, size = "medium"}) => {

  const handleClick = () => {
    onClick(radiovalue);
  }

  const computedClasses = clsx({'disabled': disabled}, size);
  const labelPlacement = `label-${labelPosition}`;

  return (
    <StyledRadio className={`lazy-smart-ui-radio ${computedClasses}`} radiovalue={radiovalue} onClick={handleClick} checked={checked} disabled={disabled}>
      {label && labelPosition === 'left' && <div className={`label ${labelPlacement}`}>{label}</div>}
        {checked && <RadioOn/>}
        {!checked && <RadioOff/>}
      {label && labelPosition === 'right' && <div className={`label ${labelPlacement}`}>{label}</div>}
    </StyledRadio>
  );
};

export default Radio;