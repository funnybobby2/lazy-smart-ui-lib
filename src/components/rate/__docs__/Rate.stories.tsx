import { StoryFn, Meta } from "@storybook/react";
import Rate from "../Rate";
import React from "react";

export default {
  title: "components/Rate",
  component: Rate,
  argTypes: {
    value: {
      control: { type: "number" },
    },
    isprecise: {
      control: { type: "boolean" },
    },
    isreadonly: {
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
    },
    position: {
      options: ["top", "right", "bottom", "left"],
      control: { type: "radio" },
    },
    max: {
      options: [5, 10],
      control: { type: "radio" },
    },
  },
} as Meta<typeof Rate>;

const Template: StoryFn<typeof Rate> = (args) => <Rate {...args} />;

export const RateClassic = Template.bind({});
RateClassic.args = {
  onChange: () => {},
  max: 5,
};
