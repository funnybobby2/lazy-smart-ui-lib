import styled from "styled-components";
import { CheckboxProps } from "./checkbox.types";
// disabled

export const StyledCheckbox = styled.div<CheckboxProps & {checked: boolean}>`
  cursor: ${(props) => props.disabled ? "default" : "pointer"};
  pointer-events: ${(props) => props.disabled ? "none" : "auto"};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  &:hover{
    svg > g > g {
      fill: #1976d2;
    }
  }

  &.disabled {
    svg > g > g {
      fill: #e2e2e3;
    }
    &:hover {
      svg > g > g {
        fill: #e2e2e3;
      }
    }
  }

  .label {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: bold;
    color: ${(props) => props.checked ? "#1976d2" : " #444249"};
    transition: color .3s  ease-out;
    user-select: none;

    &.label-left {
      margin-right: 8px;
    }
    &.label-right {
      margin-left: 8px;
    }
  }

  &.small{
    svg {
      width: 16px;
      height: 16px;
    }
    .label {
      font-size: 0.8125rem;
    }
  }

  &.large {
    .label {
      font-size: 0.9375rem;
    }
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;