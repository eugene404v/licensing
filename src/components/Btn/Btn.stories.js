import React from 'react';

import Btn from './Btn';

export default {
  component: Btn,
  title: 'Btn',
};

const Template = args => <Btn {...args} ></Btn>;

export const Default = Template.bind({});
Default.args = {
  text: 'Сохранить'
};

export const Large = Template.bind({});
Large.args = {
    ...Default.args,
    text: 'Войти',
    additionalClassnames: 'btn--large'
};

export const Outlined = Template.bind({});
Outlined.args = {
    ...Default.args.task,
    text: 'Отмена',
    additionalClassnames: 'btn--outlined'

};