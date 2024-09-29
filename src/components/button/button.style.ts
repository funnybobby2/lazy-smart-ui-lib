import styled from "styled-components";

export const StyledButton = styled.div`
  &.lazy-smart-ui-button{

    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    width: fit-content;

    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;

    border-radius: 4px;
    padding: 6px 16px;
    margin: 0px;
    cursor: pointer;
    user-select: none;

    transition: background-color 250ms ease-in-out, border-color 250ms ease-in-out, color 250ms ease-in-out;

    &.small{
      font-size: 0.8125rem;
      padding: 4px 10px;
    }

    &.large {
      font-size: 0.9375rem;
      padding: 8px 22px;
    }

    &.button-naked {
      color: #1976d2;
      background-color: transparent;
      border: none;

      &:hover{
        background-color: rgba(25, 118, 210, 0.04);
      }

      &.disabled{
        color: rgba(0, 0, 0, 0.26);
        pointer-events: none;
        cursor: default;
      }
    }

    &.button-classic {
      color: #FFFFFF;
      background-color: #1976d2;
      border: none;

      &:hover{
        background-color: #1565c0;
      }

      &.disabled {
        color: rgba(0, 0, 0, 0.26);
        background-color: rgba(0, 0, 0, 0.12);
        pointer-events: none;
        cursor: default;
      }
    }

    &.button-outlined{
      color: #1976d2;
      background-color: transparent;
      border: 1px solid rgba(25, 118, 210, 0.5);

      &:hover{
        background-color: rgba(25, 118, 210, 0.04);
        border: 1px solid #1976d2;
      }

      &.disabled{
        border: 1px solid rgba(0, 0, 0, 0.12);
        color: rgba(0, 0, 0, 0.26);
        pointer-events: none;
        cursor: default;
      }
    }
  }`;