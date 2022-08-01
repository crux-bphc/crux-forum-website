import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tag from './Tag';

const Component: ComponentMeta<typeof Tag> = {
	title: 'UI/Tag',
	component: Tag,
	argTypes: {
		color: {
			defaultValue: {
				color: 'teal',
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

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = {};

export default Component;
