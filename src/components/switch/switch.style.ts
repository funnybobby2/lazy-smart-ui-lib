import styled from "styled-components";

export const StyledSwitch = styled.div<{isSimple: boolean}>`
  &.lazy-smart-ui-switch {
    display: flex;
    flex-direction: row;
    align-items: center;

    &:hover .switch:not(.disabled) {
      background-color: ${(props) => props.isSimple ? "#1976d2" : "transparent"};
      border-color: ${(props) => props.isSimple ? "transparent" : "#1976d2"};

      .toggle-text-off{
        color: #1976d2;
      }

      .toggle-button{
        background-color: ${(props) => props.isSimple ? "#FFFFFF" : "#1976d2"};
      }
    }

    .switch{
      width: 36px;
      height: 20px;
      position: relative;
      border: 2px solid;
      border-color: ${(props) => props.isSimple ? "transparent" : "#444249"};
      border-radius: 20px;
      background-color: ${(props) => props.isSimple ? "#444249" : "transparent"};
      transition: border-color .3s  ease-out, background-color .3s ease-out;
      box-sizing: border-box;
      cursor: pointer;

      .toggle-text-off{
        display: ${(props) => props.isSimple ? "none" : "block"};
        position: absolute;
        top: 0;
        bottom: 0;
        right: 3px;
        line-height: 18px;
        text-align: center;
        font-family: 'Quicksand', sans-serif;
        font-size: 8px;
        font-weight: bold;
        user-select: none;
        color: #444249;
      }

      .toggle-button{
        position: absolute;
        top: ${(props) => props.isSimple ? "1px" : "4px"};
        bottom: 4px;
        right: ${(props) => props.isSimple ? "17px" : "21px"};
        width: ${(props) => props.isSimple ? "14px" : "8px"};
        height: ${(props) => props.isSimple ? "14px" : ""};
        background-color: ${(props) => props.isSimple ? "#FFFFFF" : "#444249"};
        border-radius: 19px;
        transition: all .3s  ease-out;
      }

      .toggle-text-on{
        display: ${(props) => props.isSimple ? "none" : "block"};
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        line-height: 18px;
        text-align: center;
        font-family: 'Quicksand', sans-serif;
        font-size: 8px;
        font-weight: normal;
        user-select: none;
        color: rgba(0,0,0,0);
        transition: color .3s  ease-out;
      }

      &.disabled {
        pointer-events: none;
        cursor: default;
        border: 2px solid;
        border-color: ${(props) => props.isSimple ? "transparent" : "rgba(0, 0, 0, 0.26)"};
        background-color: ${(props) => props.isSimple ? "#e2e2e3" : "transparent"};

        .toggle-button {
          background-color: ${(props) => props.isSimple ? "#FFFFFF" : "rgba(0, 0, 0, 0.26)"};
        }

        .toggle-text-on{
          color: transparent;
        }

        .toggle-text-off {
          color: rgba(0, 0, 0, 0.26);
        }
      }
    }

    &.toggle-on {

      .switch{
        border-color: ${(props) => props.isSimple ? "transparent" : "#1976d2"};
        background-color: ${(props) => props.isSimple ? "#1976d2" : "transparent"};

        .toggle-button{
          top: ${(props) => props.isSimple ? "1px" : "3px"};
          bottom: ${(props) => props.isSimple ? "4px" : "3px"};
          right: ${(props) => props.isSimple ? "1px" : "3px"};
          width: ${(props) => props.isSimple ? "14px" : "26px"};
          height: ${(props) => props.isSimple ? "14px" : ""};
          background-color: ${(props) => props.isSimple ? "#FFFFFF" : "#1976d2"};
          border-radius: 20px;
        }

        .toggle-text-on{
          color: #FFFFFF;
        }

        .toggle-text-off{
          color: rgba(0,0,0,0);
        }

        &.disabled {
          background-color: ${(props) => props.isSimple ? "#84acd3" : "transparent"};
          border-color: #84acd3;

          .toggle-button{
            background-color: ${(props) => props.isSimple ? "#FFFFFF" : "#84acd3"};
          }

        }
      }

      .label {
        color: #1976d2;
      }
    }

    .label {
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      font-weight: bold;
      color: #444249;
      transition: color .3s  ease-out;
      user-select: none;

      &.label-left {
        margin-right: 8px;
      }
      &.label-right {
        margin-left: 8px;
      }
    }
  }
`;