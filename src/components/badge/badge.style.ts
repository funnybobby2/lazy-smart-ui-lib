import styled from "styled-components";
import { BadgeProps } from "./badge.types";

export const StyledBadge = styled.span<BadgeProps>`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  flex-shrink: 0;

  .lazy-smart-ui-badge{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    position: absolute;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 0.75rem;
    min-width: ${(props) => props.value ? '20px' : '10px'};
    line-height: 1;
    height: ${(props) => props.value ? '20px' : '14px'};
    z-index: 1;
    background-color: ${(props) =>
      props.type === 'info' ? '#1976d2' :
      props.type === 'success' ? '#2e7d32' :
      props.type === 'warning' ? '#fd9b53' :
      props.type === 'error' ? '#fd5361' : '#9c27b0'};
    color: rgb(255, 255, 255);
    top: ${(props) => props.position === 'top' ? '0px' : '100%'};
    right: 0px;
    transform: scale(1) translate(50%, -50%);
    transform-origin: 100% 0%;
    padding: 0px 6px;
    border-radius: 10px;
    border: 1px solid;
    transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;