import clsx from 'clsx';
import { StyledTextBox } from './textBox.style';
import { TextBoxProps } from "./textBox.types";
import {FC, useState} from "react";
import { CloseIcon } from '../icon/Icon';

const TextBox: FC<TextBoxProps> = ({custom, id, disabled = false, onChange, onError, readonly = false, size = "medium", theme = "classic", completion = [], placeholder = "", validator, value = ""}) => {

  const [localValue, setLocalValue] = useState(value);
  const [error, setError] = useState(false);

  const onClose = () => {
    setError(false);
    if(onError) onError(false);
    setLocalValue("");
    onChange("");
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (validator && !validator(event.target.value)) {
      setError(true);
      if(onError) onError(true);
    } else {
      setError(false);
      if(onError) onError(false);
    }
    setLocalValue(event.target.value);
    onChange(event.target.value);
  };

  const computedClasses = clsx(custom, {'disabled': disabled, 'error': error}, size);

  const listName = `${id}-list`;

  return (
    <StyledTextBox className={`lazy-smart-ui-textBox textBox-${theme} ${computedClasses}`}>
      <input
        id = {id}
        readOnly = {readonly}
        autoComplete='off'
        { ...(completion.length > 0 ? { "list": listName } : {}) }
        { ...(placeholder.length > 0) ? {placeholder} : {}}
        value={localValue}
        onChange={handleChange}
      />
      {
        completion.length > 0 && <datalist id={listName}> {completion.map(c => <option key={c}>{c}</option>)}</datalist>
      }
      <div className='clear' onClick={onClose}><CloseIcon/></div>
    </StyledTextBox>
  );
};

export default TextBox;