
import { StoryFn, Meta } from "@storybook/react";
import TextBox from "../TextBox";
import React from "react";

export default {
  title: "components/TextBox",
  component: TextBox,
  argTypes: {
    custom: { control: 'text' },
    disabled: {
      control: {type: 'boolean'}
    },
    id: { control: 'text' },
    placeholder: { control: 'text' },
    readonly: {
      control: {type: 'boolean'}
    },
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
} as Meta<typeof TextBox>;

const Template: StoryFn<typeof TextBox> = (args) => <TextBox {...args} />;

export const TextBoxClassic = Template.bind({});
TextBoxClassic.args = {
  onChange: (text: string) => {console.log(text)},
  id: "test",
  placeholder: "placeholder"
};

export const TextBoxNaked = Template.bind({});
TextBoxNaked.args = {
  onChange: (text: string) => {console.log(text)},
  id: "test",
  theme: "naked",
  placeholder: "placeholder"
};

export const TextBoxOutlined = Template.bind({});
TextBoxOutlined.args = {
  onChange: (text: string) => {console.log(text)},
  id: "test",
  theme: "outlined",
  placeholder: "placeholder"
};

export const TextBoxCompletion = Template.bind({});
TextBoxCompletion.args = {
  onChange: (text: string) => {console.log(text)},
  id: "test",
  placeholder: "placeholder",
  completion: ["aaa", "bbb", "ccc", "ddd"]
};

export const TextBoxValidator = Template.bind({});
TextBoxValidator.args = {
  onChange: (text: string) => {console.log(text)},
  id: "test",
  placeholder: "placeholder",
  validator: (text) => /^[A-Z]+$/.test(text)
};