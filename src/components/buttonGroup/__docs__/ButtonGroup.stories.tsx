
import { StoryFn, Meta } from "@storybook/react";
import ButtonGroup from "../ButtonGroup";
import Button from "../../button/Button";
import React from "react";

export default {
  title: "components/ButtonGroup",
  component: ButtonGroup,
  argTypes: {
    custom: { control: 'text' },
    direction: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    }
  },
} as Meta<typeof ButtonGroup>;

const Template: StoryFn<typeof ButtonGroup> = (args) => <ButtonGroup {...args} />;

export const ButtonGroupHorizontal = Template.bind({});
ButtonGroupHorizontal.args = {
  children: <>
  <Button  onClick={() => console.log('1')}>Button # 1</Button>
  <Button  onClick={() => console.log('2')}>Button # 2</Button>
  <Button  onClick={() => console.log('3')}>Button # 3</Button>
</>
};

export const ButtonGroupVertical = Template.bind({});
ButtonGroupVertical.args = {
  children: <>
  <Button  onClick={() => console.log('1')}>Button # 1</Button>
  <Button  onClick={() => console.log('2')}>Button # 2</Button>
  <Button  onClick={() => console.log('3')}>Button # 3</Button>
</>,
direction: "vertical"
};

export const ButtonGroupOutlinedHorizontal = Template.bind({});
ButtonGroupOutlinedHorizontal.args = {
  children: <>
  <Button theme="outlined" onClick={() => console.log('1')}>Button # 1</Button>
  <Button theme="outlined" onClick={() => console.log('2')}>Button # 2</Button>
  <Button theme="outlined" onClick={() => console.log('3')}>Button # 3</Button>
</>
};

export const ButtonGroupOutlinedVertical = Template.bind({});
ButtonGroupOutlinedVertical.args = {
  children: <>
  <Button theme="outlined" onClick={() => console.log('1')}>Button # 1</Button>
  <Button theme="outlined" disabled onClick={() => console.log('2')}>Button # 2</Button>
  <Button theme="outlined" onClick={() => console.log('3')}>Button # 3</Button>
</>,
direction: "vertical"
};

export const ButtonGrouNakedHorizontal = Template.bind({});
ButtonGrouNakedHorizontal.args = {
  children: <>
  <Button theme="naked" onClick={() => console.log('1')}>Button # 1</Button>
  <Button theme="naked" onClick={() => console.log('2')}>Button # 2</Button>
  <Button theme="naked" onClick={() => console.log('3')}>Button # 3</Button>
</>
};

export const ButtonGrouNakedVertical = Template.bind({});
ButtonGrouNakedVertical.args = {
  children: <>
  <Button theme="naked" onClick={() => console.log('1')}>Button # 1</Button>
  <Button theme="naked" onClick={() => console.log('2')}>Button # 2</Button>
  <Button theme="naked" onClick={() => console.log('3')}>Button # 3</Button>
</>,
direction: "vertical"
};