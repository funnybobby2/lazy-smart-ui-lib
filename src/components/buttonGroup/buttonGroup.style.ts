import styled from "styled-components";
import { ButtonGroupProps } from "./buttonGroup.types";

export const StyledButtonGroup = styled.div<ButtonGroupProps>`
  display: flex;
  flex-direction: ${(props) => props.direction === 'horizontal' ? "row" : "column"};
  justify-content: center;

  .lazy-smart-ui-button {
    border-radius: 0px !important;
    &:first-of-type {
      border-top-left-radius:4px !important;
      border-top-right-radius: ${(props) => props.direction === 'horizontal' ? "0px" : "4px !important"};
      border-bottom-left-radius: ${(props) => props.direction === 'horizontal' ? "4px !important" : "0px"};
    }
    &:last-of-type {
      border-top-right-radius: ${(props) => props.direction === 'horizontal' ? "4px !important" : "0px"};
      border-bottom-right-radius: 4px !important;
      border-bottom-left-radius: ${(props) => props.direction === 'horizontal' ? "0px" : "4px !important"};
    }
    &.button-classic:not(:first-of-type):not(:last-of-type) {
      border-left: ${(props) => props.direction === 'horizontal' ? "2px solid #1565c0" : "none"};
      border-right: ${(props) => props.direction === 'horizontal' ? "2px solid #1565c0" : "none"};
      border-top: ${(props) => props.direction === 'horizontal' ?  "none" : "2px solid #1565c0"};
      border-bottom: ${(props) => props.direction === 'horizontal' ?  "none" : "2px solid #1565c0"};
    }
    &.button-naked:not(:first-of-type):not(:last-of-type) {
      border-left: ${(props) => props.direction === 'horizontal' ? "1px solid #1565c0" : "none"};
      border-right: ${(props) => props.direction === 'horizontal' ? "1px solid #1565c0" : "none"};
      border-top: ${(props) => props.direction === 'horizontal' ?  "none" : "1px solid #1565c0"};
      border-bottom: ${(props) => props.direction === 'horizontal' ?  "none" : "1px solid #1565c0"};
    }
  }
`;