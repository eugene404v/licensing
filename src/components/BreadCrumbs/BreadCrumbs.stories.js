import React from 'react';

import BreadCrumbs from './BreadCrumbs';


export default {
  component: BreadCrumbs,
  title: 'BreadCrumbs',
};

const Template = args => <BreadCrumbs {...args} ></BreadCrumbs>;

export const Default = Template.bind({});
Default.args = {
    crumbs: [
        {
            to: '/1',
            text: 'library'
        },
        {
            to: '1/2',
            text: 'assets'
        }
    ],
    lastItem: 'current'
};

export const New = Template.bind({});
New.args = {
    ...Default.args,
    title: 'Поступило за период:',
    type: 'new'
};

export const Done = Template.bind({});
Done.args = {
    ...Default.args,
    title: 'Выполнено:',
    type: 'done'
};

export const Circle = Template.bind({});
Circle.args = {
    ...Default.args,
    title: 'Выполнено:',
    type: 'circle',

};

