
import { StoryFn, Meta } from "@storybook/react";
import Tooltip from "../Tooltip";
import React from "react";

export default {
  title: "components/Tooltip",
  component: Tooltip,
  argTypes: {
    custom: { control: 'text' },
    theme: {
      options: ['dark', 'light'],
      control: { type: 'radio' },
    },
    position: {
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Tooltip>;

const Template: StoryFn<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const TooltipClassic = Template.bind({});
TooltipClassic.args = {
  content: "popopo",
  children: <span>yo</span>,
};

