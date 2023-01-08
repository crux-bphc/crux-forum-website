import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TopicSwitch from './TopicSwitch';

const Component: ComponentMeta<typeof TopicSwitch> = {
	title: 'UI/TopicSwitch',
	component: TopicSwitch,
	argTypes: {
		color: {
			defaultValue: {
				color: 'teal',
			},
		},
		checked: {
			defaultValue: {
				checked: false,
			},
		},
		children: {
			defaultValue: 'cruX',
			control: {
				type: 'text',
			},
		},
		onClick: {
			control: false,
		},
	},
};

const Template: ComponentStory<typeof TopicSwitch> = (args) => (
	<TopicSwitch {...args} />
);

export const Default = Template.bind({});

Default.args = {};

export default Component;
