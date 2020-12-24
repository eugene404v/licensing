import React from 'react';

import Link from './Link';

export default {
  component: Link,
  title: 'Link',
};

const Template = args => <Link {...args} ></Link>;

export const Default = Template.bind({});
Default.args = {
  text: 'Забыли пароль?',
  to: '',
  btnIcon: 'addWidget'
};

