import { StyledRadio } from './radio.style';
import clsx from 'clsx';
import { RadioProps } from "./radio.types";
import {FC} from "react";
import { RadioOn, RadioOff } from '../icon/Icon';

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