import styled from "styled-components";
import { RadioProps } from "./radio.types";
// disabled

export const StyledRadio = styled.div<RadioProps>`
  cursor: ${(props) => props.disabled ? "default" : "pointer"};
  pointer-events: ${(props) => props.disabled ? "none" : "auto"};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  &:hover{
    svg > path {
      fill: #1976d2;
    }
  }

  &.disabled {
    svg > path {
      fill: #e2e2e3;
    }
    svg > g > path:last-child{
      fill: #84acd3;
    }
    &:hover {
      svg > path {
        fill: #e2e2e3;
      }
      svg > g > path:last-child{
        fill: #84acd3;
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