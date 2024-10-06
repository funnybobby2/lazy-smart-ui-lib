import { StyledButtonGroup } from './buttonGroup.style';
import { ButtonGroupProps } from "./buttonGroup.types";
import {FC} from "react";

const ButtonGroup: FC<ButtonGroupProps> = ({custom, direction='horizontal', children}) => {

  return (
    <StyledButtonGroup className={`lazy-smart-ui-button-group ${custom}`} direction={direction}>
      {children}
    </StyledButtonGroup>
  );
};

export default ButtonGroup;