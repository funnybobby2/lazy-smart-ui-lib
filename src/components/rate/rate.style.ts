import styled from "styled-components";

export const StarWrapper = styled.div<{ isHovered: boolean }>`
  position: relative;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s ease-in-out;
  transform: ${({ isHovered }) => (isHovered ? "scale(1.3)" : "scale(1)")};
`;

export const StarBackground = styled.span<{ size: "small" | "medium" | "large" }>`
  font-size:  ${(props) => (props.size === "medium") ? "22px" :
    (props.size === "small") ? "18px" : "26px"};
  color: #ccc;
`;

export const StarForeground = styled.span<{ filledPercentage: number, size: "small" | "medium" | "large" }>`
  font-size:  ${(props) => (props.size === "medium") ? "22px" :
    (props.size === "small") ? "18px" : "26px"};
  color: #f5c226;
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ filledPercentage }) => `${filledPercentage}%`};
  overflow: hidden;
  pointer-events: none;
`;

export const RateWrapper = styled.div<{ position: string, size: "small" | "medium" | "large" }>`
  display: flex;
  flex-direction: ${({ position }) =>
    position === "top" || position === "bottom" ? "column" : "row"};
  align-items: center;

  ${({ position }) =>
    position === "right" && "flex-direction: row-reverse;"}
  ${({ position }) =>
    position === "bottom" && "flex-direction: column-reverse;"}

  .label {
    font-size: ${(props) => (props.size === "medium") ? "0.875rem;" :
      (props.size === "small") ? "0.8125rem" : "0.9375rem"};
    line-height:  ${(props) => (props.size === "medium") ? "1rem" :
    (props.size === "small") ? "0.8rem" : "1.2rem"};
    font-weight: bold;
    padding: 8px;
  }
`;
