
import { StoryFn, Meta } from "@storybook/react";
import RadioGroup from "../RadioGroup";
import React from "react";

export default {
  title: "components/RadioGroup",
  component: RadioGroup,
  argTypes: {
    custom: { control: 'text' },
    disabled: {
      control: {type: 'boolean'}
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    labelPosition: {
      options: ['left', 'right'],
      control: { type: 'radio' },
    },
    selectedValue: { control: 'text' }
  },
} as Meta<typeof RadioGroup>;

const Template: StoryFn<typeof RadioGroup> = (args) => <RadioGroup {...args} />;

export const RadioClassic = Template.bind({});
const changeTestVal = (newVal: string) => console.log(newVal);
RadioClassic.args = {
  onChange: changeTestVal,
  selectedValue: "#1",
  options: [{label: "Radio #1", value: "#1"}, {label: "Radio #2", value: "#2"},{label: "Radio #3", value: "#3"}]
};
