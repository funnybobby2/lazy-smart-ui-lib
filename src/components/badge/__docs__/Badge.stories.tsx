
import { StoryFn, Meta } from "@storybook/react";
import Badge from "../Badge";
import React from "react";

export default {
  title: "components/Badge",
  component: Badge,
  argTypes: {
    custom: { control: 'text' },
    value: {
      control: {type: 'number'}
    },
    max: {
      control: {type: 'number'}
    },
    type: {
      options: ['info', 'success', 'warning', 'error', 'other'],
      control: { type: 'radio' },
    },
    position: {
      options: ['top', 'bottom'],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Badge>;

const Template: StoryFn<typeof Badge> = (args) => <Badge {...args} />;

export const BadgeClassic = Template.bind({});
BadgeClassic.args = {
  value: 2,
  children: <span>yo</span>,
};

export const BadgeLimited = Template.bind({});
BadgeLimited.args = {
  value: 12,
  max: 10,
  children: <span>yo</span>,
};
