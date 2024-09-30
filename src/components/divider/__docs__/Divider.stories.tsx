
import { StoryFn, Meta } from "@storybook/react";
import Divider from "../Divider";
import React from "react";

export default {
  title: "components/Divider",
  component: Divider,
  argTypes: {
    custom: { control: 'text' },
    label: { control: 'text' },
    labelPlacement: {
      options: ['left', 'center', 'right'],
      control: { type: 'radio' },
    },
    size: {
      options: ['thin', 'medium', 'thick'],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Divider>;

const Template: StoryFn<typeof Divider> = (args) => <Divider {...args} />;

export const DividerEmpty = Template.bind({});
DividerEmpty.args = {};

export const DividerText = Template.bind({});
DividerText.args = {
  label: "Separate"
};