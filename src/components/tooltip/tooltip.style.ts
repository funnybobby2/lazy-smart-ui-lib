import styled from "styled-components";
import { TooltipProps } from "./tooltip.types";

export const StyledTooltip = styled.span<TooltipProps>`
  position: relative;
  display: inline-block;

  .tooltip-box {
    position: absolute;
    z-index: 1000;
    padding: 8px;
    font-family: Roboto, sans-serif;
    padding: 4px 8px;
    margin: 2px;
    font-size: 0.6875rem;
    max-width: 300px;
    border-radius: 4px;
    color: ${(props) => props.theme === "light" ? "#f5f5f5" : "#202327"};
    white-space: nowrap;
    opacity: 0.9;
    background-color: ${(props) => props.theme === "light" ? "#202327" : "#f5f5f5"};
    margin: ${(props) => props.position === "top" ? "0 0 8px 0" :
      props.position === "right" ? "0 0 0 8px" :
      props.position === "bottom" ? "8px 0 0 0" : "0 8px 0 0"
    };
    transform: ${(props) => (props.position === "top" || props.position === "bottom") ? "translateX(-50%)" : "translateY(-50%)"};
    top: ${(props) => props.position === "bottom" ? "100%" : props.position === "top" ? "" : "50%" };
    bottom: ${(props) => props.position === "top" ? "100%" : ""};
    left: ${(props) => props.position === "right" ? "100%" : props.position === "left" ? "" : "50%" };
    right: ${(props) => props.position === "left" ? "100%" : ""};
  }
`;