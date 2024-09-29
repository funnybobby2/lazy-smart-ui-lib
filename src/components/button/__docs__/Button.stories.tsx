
import { StoryFn, Meta } from "@storybook/react";
import Button from "../Button";
import React from "react";

export default {
  title: "components/Button",
  component: Button,
  argTypes: {
    custom: { control: 'text' },
    disabled: {
      control: {type: 'boolean'}
    },
    id: { control: 'text' },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    theme: {
      options: ['naked', 'classic', 'outlined'],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const ButtonClassic = Template.bind({});
ButtonClassic.args = {
  label: "Click me !",
  onClick: () => {},
};

export const ButtonDisabled = Template.bind({});
ButtonDisabled.args = {
  label: "Click me !",
  disabled: true,
  onClick: () => {},
};

export const ButtonSmall = Template.bind({});
ButtonSmall.args = {
  label: "Click me !",
  size: "small",
  onClick: () => {},
};

export const ButtonLarge = Template.bind({});
ButtonLarge.args = {
  label: "Click me !",
  size: "large",
  onClick: () => {},
};

export const ButtonNaked = Template.bind({});
ButtonNaked.args = {
  label: "Click me !",
  theme: "naked",
  onClick: () => {},
};

export const ButtonOutlined = Template.bind({});
ButtonOutlined.args = {
  label: "Click me !",
  theme: "outlined",
  onClick: () => {},
};