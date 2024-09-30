import { StyledDivider } from './divider.style';
import { DividerProps } from "./divider.types";
import {FC} from "react";

const Divider: FC<DividerProps> = ({custom, label, labelPlacement="center", size="medium"}) => {

  const customClass = custom ?? "";
  return (
      <StyledDivider
        className={`lazy-smart-ui-hr ${customClass}`}
        labelPlacement={labelPlacement}
        role="separator"
        size={size}
      >
        { label && <span className="text">{label}</span>}
      </StyledDivider>
  );
};

export default Divider;