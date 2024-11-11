
import { StoryFn, Meta } from "@storybook/react";
import Select from "../Select";
import React from "react";

export default {
  title: "components/Select",
  component: Select,
  argTypes: {
    custom: { control: 'text' },
    disabled: {
      control: {type: 'boolean'}
    },
    id: { control: 'text' },
    placeholder: { control: 'text' },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    theme: {
      options: ['naked', 'classic', 'outlined'],
      control: { type: 'radio' },
    },
    value: { control: 'text' }
  },
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />;

export const SelectClassic = Template.bind({});
SelectClassic.args = {
  onChange: (text: string) => {console.log(text)},
  id: "test",
  placeholder: "placeholder",
  options: ["option#1", "option#2", "option#3"]
};

export const SelectNaked = Template.bind({});
SelectNaked.args = {
  onChange: (text: string) => {console.log(text)},
  id: "test",
  theme: "naked",
  placeholder: "placeholder",
  options: ["option#1", "option#2", "option#3"]
};

export const SelectOutlined = Template.bind({});
SelectOutlined.args = {
  onChange: (text: string) => {console.log(text)},
  id: "test",
  theme: "outlined",
  placeholder: "placeholder",
  options: ["option#1", "option#2", "option#3"]
};