
import { StoryFn, Meta } from "@storybook/react";
import Notif from "../Notif";
import React from "react";

export default {
  title: "components/Notif",
  component: Notif,
  argTypes: {
    custom: { control: 'text' },
    open: {
      control: {type: 'boolean'}
    },
    duration: {
      control: {type: 'number'}
    },
    type: {
      options: ['info', 'success', 'warning', 'error', 'other'],
      control: { type: 'radio' },
    },
    position: {
      options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Notif>;

const Template: StoryFn<typeof Notif> = (args) => <Notif {...args} />;

export const NotifClassic = Template.bind({});
NotifClassic.args = {
  open: true,
  children: <span>yo !</span>,
  onClose: undefined
};

export const NotifClosable = Template.bind({});
NotifClosable.args = {
  open: true,
  children: <span>yo !</span>
};

export const NotifTopRight = Template.bind({});
NotifTopRight.args = {
  open: true,
  children: <span>yo !</span>,
  position: "top-right"
};

export const NotifDuration = Template.bind({});
NotifDuration.args = {
  open: true,
  children: <span>yo !</span>,
  onClose: () => {
    console.log('Notification fermée');
  },
  duration: 5000
};