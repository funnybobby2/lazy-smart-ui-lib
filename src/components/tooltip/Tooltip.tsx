import { StyledTooltip } from './tooltip.style';
import { TooltipProps } from "./tooltip.types";
import {FC, useState} from "react";

const Tooltip: FC<TooltipProps> = ({custom, children, position="bottom", content, theme="light"}) => {

  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  const customClass = custom ?? "";

  return (
      <StyledTooltip
        className={`lazy-smart-ui-tooltip-wrapper ${customClass}`}
        position={position}
        theme={theme}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
      >
        {children}
        {visible && (
          <div className={`tooltip-box`}>
            {content}
          </div>
        )}
      </StyledTooltip>
  );
};

export default Tooltip;