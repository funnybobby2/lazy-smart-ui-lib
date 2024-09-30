import styled from "styled-components";
import { DividerProps } from "./divider.types";

export const StyledDivider = styled.div<DividerProps>`
  margin: 16px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: none;
  border-width: 0px;
  border-top-style: solid;

  &::before, &::after{
    border-top-width: ${(props) => props.size};
    border-top-color: rgba(0, 0, 0, 0.2);
    border-top-style: inherit;
    content: "";
    align-self: center;
  }

  &::before {
    width: ${(props) => props.labelPlacement === 'left' ? "10%" : "100%"};
  }

  &::after{
    width: ${(props) => props.labelPlacement === 'right' ? "10%" : "100%"};
  }

  .text{
    display: inline-block;
    padding-left: calc(9.6px);
    padding-right: calc(9.6px);
    font-size: ${(props) => props.size === 'thin' ? '14px' :
      props.size === 'medium' ? '18px' : '22px'};
    font-weight: bold;
    font-family: 'Roboto';
  }
`;