import React from 'react';

import BtnPrefix from './BtnPrefix';

export default {
  component: BtnPrefix,
  title: 'BtnPrefix',
};

const Template = args => <BtnPrefix {...args} ></BtnPrefix>;

export const Default = Template.bind({});
Default.args = {
  text: 'Добавить виджет',
  btnIcon: 'addWidget'
};

export const Plus = Template.bind({});
Plus.args = {
    ...Default.args,
    text: 'Создать реестр',
    btnIcon: 'plus'
};
