import React from 'react';

import Switch from './Switch';

export default {
  component: Switch,
  title: 'Switch',
};

const Template = args => <Switch {...args} ></Switch>;

export const Default = Template.bind({});
Default.args = {
};

export const Labeled = Template.bind({});
Labeled.args = {
    ...Default.args,
    label: 'Запомнить меня',
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...Default.args,
    disabled: true
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
    ...Default.args,
    disabled: true,
    defaultChecked: true
};
