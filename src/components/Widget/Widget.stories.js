import React from 'react';

import Widget from './Widget';

export default {
  component: Widget,
  title: 'Widget',
};

const Template = args => <Widget {...args} ></Widget>;

export const Default = Template.bind({});
Default.args = {
    cornerFill: '#fff',
    type: 'inProgress',
    title: 'Сейчас в работе:',
    count: 52
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

