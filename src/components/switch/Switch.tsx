import { StyledSwitch } from './switch.style';
import clsx from 'clsx';
import { SwitchProps } from "./switch.types";
import {FC, useState} from "react";

const Switch: FC<SwitchProps> = ({custom, disabled, label, labelPlacement = 'left', onClick, isSimple=false}) => {
  const [value, setValue] = useState(false);

  const handleClick = () => {
    setValue(!value);

    if(value){
      onClick();
    }
  }

  const classState = `toggle-${value ? 'on' : 'off'}`;
  const labelPosition = `label-${labelPlacement}`;

  const computedClasses = clsx(custom, {'disabled': disabled});

  return (
    <StyledSwitch className={`lazy-smart-ui-switch ${classState}`} isSimple={isSimple}>
      {label && labelPlacement === 'left' && <div className={`label ${labelPosition}`}>{label}</div>}
      <div className={`switch ${computedClasses}`} onClick={handleClick}>
        <div className='toggle-text-off'>OFF</div>
        <div className='toggle-button'></div>
        <div className='toggle-text-on'>ON</div>
      </div>
      {label  && labelPlacement === 'right' && <div className={`label ${labelPosition}`}>{label}</div>}
    </StyledSwitch>
  );
};

export default Switch;