import styled from "styled-components";

export const StyledSwitch = styled.div`
  &.lazy-smart-ui-switch {
    display: flex;
    flex-direction: row;
    align-items: center;

    .switch{
      width: 36px;
      height: 20px;
      position: relative;
      border: 2px solid #444249;
      border-radius: 20px;
      transition: border-color .3s  ease-out;
      box-sizing: border-box;

      .toggle-text-off{
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
        cursor: pointer;
        color: #444249;
      }

      .toggle-button{
        position: absolute;
        top: 4px;
        width: 8px;
        bottom: 4px;
        right: 21px;
        background-color: #444249;
        border-radius: 19px;
        cursor: pointer;
        transition: all .3s  ease-out;
      }

      .toggle-text-on{
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
        cursor: pointer;
        user-select: none;
        color: rgba(0,0,0,0);
        transition: color .3s  ease-out;
      }

      &.disabled {
        pointer-events: none;
        cursor: default;
        border: 2px solid rgba(0, 0, 0, 0.26);

        .toggle-button {
          background-color: rgba(0, 0, 0, 0.26);
        }

        .toggle-text-on{
          color: transparent;
        }

        .toggle-text-off {
          color: rgba(0, 0, 0, 0.26);
        }

        &.toggle-on{
          border: 2px solid #1976d25c;

          .toggle-button {
            background-color: #1976d25c;
          }

          .toggle-text-on{
            color: #FFFFFF;
          }

          .toggle-text-off {
            color: transparent;
          }
        }
      }
    }

    &.toggle-on {

      .switch{
        border-color: #1976d2;

        .toggle-button{
          top: 3px;
          width: 26px;
          bottom: 3px;
          right: 3px;
          border-radius: 20px;
          background-color: #1976d2;
        }

        .toggle-text-on{
          color: #FFFFFF;
        }

        .toggle-text-off{
          color: rgba(0,0,0,0);
        }
      }

      .label {
        color: #1976d2;
      }
    }

    .label {
      font-family: 'Roboto', sans-serif;
      font-size: 12px;
      font-weight: bold;
      color: #444249;
      transition: color .3s  ease-out;

      &.label-left {
        margin-right: 8px;
      }
      &.label-right {
        margin-left: 8px;
      }
    }
  }
`;