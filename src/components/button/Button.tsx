import { StyledButton } from './button.style';
import clsx from 'clsx';
import { ButtonProps } from "./button.types";
import {FC} from "react";

const Button: FC<ButtonProps> = ({custom, disabled, children, onClick, size = "medium", theme = "classic"}) => {

  const computedClasses = clsx(custom, {'disabled': disabled}, size);

  return (
    <StyledButton className={`lazy-smart-ui-button button-${theme} ${computedClasses}`} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;