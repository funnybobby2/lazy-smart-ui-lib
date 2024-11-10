import styled from "styled-components";

export const StyledTextBox = styled.div`
  &.lazy-smart-ui-textBox{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;

    input{
      color: #313131;
      box-sizing: content-box;
      height: 18px;
      margin: 0px;
      display: block;
      min-width: 0px;
      width: 100%;
      padding: 8px 12px 8px;
      border-radius: 4px;
      outline: none;
      font-size: 0.875rem;
    }

    &.textBox-classic {
      input{
        border: 0px;
        background-color: #f5f5f5;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 1px solid #b3b3b3;
        &:focus {
          border-bottom: 1px solid #1976d2;
          box-shadow: 0 1px 0 0 #1976d2;
        }
      }
      &.error input{
        color: #db4444;
        background-color: #f3dbdb;
        border-bottom: 1px solid #db4444;

        &:focus{
          border-bottom: 1px solid #db4444;
          box-shadow: 0 1px 0 0 #db4444;
        }
      }
    }

    &.textBox-naked {
      input {
        border: 0px;
        background-color: transparent;
        border-bottom-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom: 1px solid #b3b3b3;
        &:focus {
          border-bottom: 1px solid #1976d2;
          box-shadow: 0 1px 0 0 #1976d2;
        }
      }

      &.error input{
        color: #db4444;
        border-bottom: 1px solid #db4444;

        &:focus{
          border-bottom: 1px solid #db4444;
          box-shadow: 0 1px 0 0 #db4444;
        }
      }
    }

    &.textBox-outlined {
      input {
        border: 1px solid #b3b3b3;
        background-color: transparent;
        &:focus {
          border: 1px solid #1976d2;
        }
      }

      &.error input{
        color: #db4444;
        border: 1px solid #db4444;

        &:focus{
          border: 1px solid #db4444;
        }
      }
    }

    &.small input {
      height: 16px;
      padding: 6px 10px 6px;
      font-size: 0.8125rem;
    }

    &.large input {
      height: 20px;
      padding: 10px 14px 10px;
      font-size: 0.9375rem;
    }

    &.disabled {
      opacity: 0.6;
      pointer-events: none;
      cursor: default;
    }
  }`;