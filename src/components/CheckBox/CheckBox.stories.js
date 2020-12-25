import React from 'react';

import CheckBox from './CheckBox';

export default {
  component: CheckBox,
  title: 'CheckBox',
};

const Template = args => <CheckBox {...args} ></CheckBox>;

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
    label: 'Запомнить меня',
    disabled: true
};
