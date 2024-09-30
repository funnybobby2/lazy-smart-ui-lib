import { StyledBadge } from './badge.style';
import { BadgeProps } from "./badge.types";
import {FC} from "react";

const Badge: FC<BadgeProps> = ({custom, value, type="info", max, position="top", children}) => {

  const customClass = custom ?? "";

  let valueLimited = '';
  if(value) {
    if(max && value > max){
      valueLimited = `${max}+`;
    } else {
      valueLimited = `${value}`;
    }
  }

  return (
      <StyledBadge
        className={`lazy-smart-ui-badge-wrapper ${customClass}`}
        position={position}
        type={type}
      >
        {children}
        <span className="lazy-smart-ui-badge">
          {valueLimited}
        </span>
      </StyledBadge>
  );
};

export default Badge;