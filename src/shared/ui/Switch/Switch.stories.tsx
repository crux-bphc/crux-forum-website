import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Switch from './Switch';

const Component: ComponentMeta<typeof Switch> = {
	title: 'UI/Switch',
	component: Switch,
	argTypes: {
		color: {
			defaultValue: 'teal',
		},
		checked: {
			defaultValue: false,
		},
		onChange: {
			control: false,
		},
		label: {
			defaultValue: '',
		},
	},
};

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});

Default.args = {};

export default Component;
