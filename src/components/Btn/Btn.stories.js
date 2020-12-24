import React from 'react';

import Btn from './Btn';

export default {
  component: Btn,
  title: 'Btn',
};

const Template = args => <Btn {...args} ></Btn>;

export const Default = Template.bind({});
Default.args = {
  text: 'wwwwwwwwww'
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};