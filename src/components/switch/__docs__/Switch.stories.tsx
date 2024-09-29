
import { StoryFn, Meta } from "@storybook/react";
import Switch from "../Switch";
import React from "react";

export default {
  title: "components/Switch",
  component: Switch,
  argTypes: {
    custom: { control: 'text' },
    disabled: {
      control: {type: 'boolean'}
    },
    labelPlacement: {
      options: ['left', 'right'],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Switch>;

const Template: StoryFn<typeof Switch> = (args) => <Switch {...args} />;

export const SwitchClassic = Template.bind({});
SwitchClassic.args = {
  onClick: () => {},
};

export const SwitchLabel = Template.bind({});
SwitchLabel.args = {
  label: "switch",
  onClick: () => {},
};