import React from 'react';

import Radio from './Radio';

export default {
  component: Radio,
  title: 'Radio',
};

const Template = args => <Radio {...args} ></Radio>;

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
