import React from 'react';

import BtnIcon from './BtnIcon';

export default {
  component: BtnIcon,
  title: 'BtnIcon',
};

const Template = args => <BtnIcon {...args} ></BtnIcon>;

export const Default = Template.bind({});
Default.args = {
    icon: 'BackIcon'
};

export const Filled = Template.bind({});
Filled.args = {
    ...Default.args,
    additionalClassnames: 'btn-icon--filled',
    icon: 'PlusIcon'
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...Default.args,
    disabled: true
};

export const DisabledFilled = Template.bind({});
DisabledFilled.args = {
    ...Filled.args,
    disabled: true,
};

export const Search = Template.bind({});
Search.args = {
    ...Default.args,
    icon: 'SearchIcon'
};

export const DocumentDown = Template.bind({});
DocumentDown.args = {
    ...Default.args,
    icon: 'DocumentDownIcon'
};