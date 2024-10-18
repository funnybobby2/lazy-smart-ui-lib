import styled from "styled-components";

export const StarWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  user-select: none;
`;

export const StarBackground = styled.span`
  font-size: 2rem;
  line-height: 1.8rem;
  color: #ccc;
`;

export const StarForeground = styled.span<{ filledPercentage: number }>`
  font-size: 2rem;
  line-height: 1.8rem;
  color: #ffd700;
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ filledPercentage }) => `${filledPercentage}%`};
  overflow: hidden;
  pointer-events: none;
`;

export const RateWrapper = styled.div<{ position: string }>`
  display: flex;
  flex-direction: ${({ position }) =>
    position === "top" || position === "bottom" ? "column" : "row"};
  align-items: center;

  ${({ position }) =>
    position === "right" && "flex-direction: row-reverse;"}
  ${({ position }) =>
    position === "bottom" && "flex-direction: column-reverse;"}

  .label {
    font-size: 1.3rem;
    line-height: 1.4rem;
    padding-right: 8px;
  }
`;
