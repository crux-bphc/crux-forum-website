import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';

const Component: ComponentMeta<typeof Input> = {
	title: 'UI/Input',
	component: Input,
};

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {};

export const Error = Template.bind({});

Error.args = {
	hasError: true,
};

export default Component;
