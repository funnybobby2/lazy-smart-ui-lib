import styled from "styled-components";

export const StyledSelect = styled.div`
  &.lazy-smart-ui-select{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;

    select{
      color: #444249;
      box-sizing: content-box;
      height: 18px;
      margin: 0px;
      display: block;
      min-width: 0px;
      width: 100%;
      padding: 8px 22px 8px 12px;
      border-radius: 4px;
      outline: none;
      font-size: 0.875rem;
      cursor: pointer;
    }

    &.select-classic {
      select{
        border: 0px;
        background-color: rgba(0, 0, 0, 0.04);
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        &:focus {
          border-bottom: 1px solid #1976d2;
          box-shadow: 0 1px 0 0 #1976d2;
        }
      }
    }

    &.select-naked {
      select {
        border: 0px;
        background-color: transparent;
        border-bottom-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        &:focus {
          border-bottom: 1px solid #1976d2;
          box-shadow: 0 1px 0 0 #1976d2;
        }
      }
    }

    &.select-outlined {
      select {
        border: 1px solid rgba(0, 0, 0, 0.2);
        background-color: transparent;
        &:focus {
          border: 1px solid #1976d2;
        }
      }
    }

    &.small select {
      height: 16px;
      padding: 6px 10px 6px;
      font-size: 0.8125rem;
    }

    &.large select {
      height: 20px;
      padding: 10px 14px 10px;
      font-size: 0.9375rem;
    }

    &.disabled {
      opacity: 0.6;
      pointer-events: none;
      cursor: default;
    }

    .clear {
      position: absolute;
      right: 0px;
      color: grey;
      cursor: pointer;
      opacity: 0;
      pointer-events: none;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 22px;
    }

    &.textBox-classic.error .clear {
      color: #ab4242;
      &:hover{
        color: #ffffff;
        background-color: #ab4242;
      }
    }

    &:hover {
      select {
        -webkit-appearance: none;
        -moz-appearance: none;
      }
      .clear {
        opacity: 1;
        pointer-events: all;

        &:hover {
          background-color: #ff3c41;
          color: #ffffff;
        }
      }
    }
  }`;