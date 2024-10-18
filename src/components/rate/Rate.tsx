import { StarWrapper, StarBackground, StarForeground, RateWrapper } from "./rate.style";
import { RateProps } from "./rate.types";
import React, { FC, useState } from "react";

const Rate: FC<RateProps> = ({
  value = 0,
  max = 5,
  label,
  position = "top",
  onChange,
  isprecise = false,
  isreadonly = false,
}) => {
  const [rate, setRate] = useState(value);
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const currentRating = hoverValue !== null ? hoverValue : rate;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (!isreadonly && isprecise) {
      const { left, width } = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - left;
      const percentage = x / width;
      const newRating = percentage > 0.5 ? index + 1 : index + 0.5;
      setHoverValue(newRating);
    } else if (!isreadonly) {
      setHoverValue(index + 1);
    }
  };

  const handleClick = (index: number, event: React.MouseEvent<HTMLDivElement>) => {
    if (!isreadonly) {
      let newRating = index + 1;

      if (isprecise) {
        const { left, width } = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - left;
        const percentage = x / width;
        newRating = percentage > 0.5 ? index + 1 : index + 0.5;
      }

      setRate(newRating);
      onChange(newRating);
    }
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
  };

  return (
    <RateWrapper position={position}>
      {label && <span className="label">{label}</span>}
      <div>
        {[...Array(max)].map((_, index) => {
          const starValue = index + 1;
          let filledPercentage = 0;

          if (currentRating >= starValue) {
            filledPercentage = 100; // full star
          } else if (currentRating >= starValue - 0.5) {
            filledPercentage = 50; // half star
          }

          return (
            <StarWrapper
              key={starValue}
              onMouseMove={(event) => handleMouseMove(event, index)}
              onClick={(event) => handleClick(index, event)}
              onMouseLeave={handleMouseLeave}
            >
              <StarBackground>★</StarBackground>
              <StarForeground filledPercentage={filledPercentage}>★</StarForeground>
            </StarWrapper>
          );
        })}
      </div>
    </RateWrapper>
  );
};

export default Rate;