import styled from "styled-components";
import { NotifProps } from "./notif.types";

export const StyledNotif = styled.span<NotifProps>`
  z-index: 9999;
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  left: ${(props) => props.position?.endsWith('left') ? "24px" : props.position?.endsWith('center') ? "50%" : "auto"};
  right: ${(props) => props.position?.endsWith('right') ? "24px" : "auto"};
  bottom: ${(props) => props.position?.startsWith('bottom') ? "24px" : "auto"};
  top: ${(props) => props.position?.startsWith('top') ? "24px" : "auto"};
  transform: ${(props) => {
    let transformState = props.open ? 'scale(1) ' : 'scale(0) ';
    transformState += props.position?.endsWith('center') ? "translateX(-50%)" : "";
    return transformState.trim();
  }};
  opacity: ${(props) => props.open ? 1 : 0};
  visibility: ${(props) => props.open ? "visible" : "hidden"};
  transition: opacity 1s ease;

  .notif-content{
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    color: ${(props) => props.type === 'error' || props.type === 'warning' ?
      '#323232' : "#FFFFFF"};
    font-weight: bold;
    background-color: ${(props) => props.type === 'error' ? '#da4932' :
      props.type === 'warning' ? '#fc9700' :
      props.type === 'success' ? '#43AC6A' :
      props.type === 'info' ? '#3b82f6' : '#323232'};
    //rgb(50, 50, 50);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    padding: 6px 16px;
    border-radius: 4px;
    min-width: 300px;
    user-select: none;

    .notif-content-right{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      padding-left: 8px;
    }
  }
`;