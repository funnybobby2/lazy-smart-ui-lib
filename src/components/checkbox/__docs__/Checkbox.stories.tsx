
import { StoryFn, Meta } from "@storybook/react";
import Checkbox from "../Checkbox";
import React from "react";

export default {
  title: "components/Checkbox",
  component: Checkbox,
  argTypes: {
    custom: { control: 'text' },
    disabled: {
      control: {type: 'boolean'}
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    label: { control: 'text' },
    labelPosition: {
      options: ['left', 'right'],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const CheckboxClassic = Template.bind({});
CheckboxClassic.args = {
  onClick: () => {},
};

export const CheckboxDisabled = Template.bind({});
CheckboxDisabled.args = {
  disabled: true,
  onClick: () => {},
};

export const CheckboxSmall = Template.bind({});
CheckboxSmall.args = {
  size: "small",
  onClick: () => {},
};

export const CheckboxLarge = Template.bind({});
CheckboxLarge.args = {
  size: "large",
  onClick: () => {},
};

export const CheckboxLabel = Template.bind({});
CheckboxLabel.args = {
  label: "Click me !",
  size: "medium",
  onClick: () => {},
};
