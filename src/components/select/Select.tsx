import { StyledSelect } from './select.style';
import clsx from 'clsx';
import { SelectProps } from "./select.types";
import {FC, useState} from "react";
import { CloseIcon } from '../icon/Icon';

const Select: FC<SelectProps> = ({custom, id, disabled = false, onChange, size = "medium", theme = "classic", options = [], placeholder = "", value = ""}) => {

  const [localValue, setLocalValue] = useState(value);

  const onClose = () => {
    setLocalValue("");
    onChange("");
  }

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLocalValue(event.target.value);
    onChange(event.target.value);
  };

  const computedClasses = clsx(custom, {'disabled': disabled}, size);

  return (
    <StyledSelect className={`lazy-smart-ui-select select-${theme} ${computedClasses}`}>
      <select id={id} onChange={handleChange}>
        <option value="" disabled selected={localValue.length == 0}>{placeholder ?? "Select your option"}</option>
        {options.map(o => <option key={o} value={o} selected={localValue === o}>{o}</option>)}
      </select>
      <div className='clear' onClick={onClose}><CloseIcon/></div>
    </StyledSelect>
  );
};

export default Select;