import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './Card';

const Component: ComponentMeta<typeof Card> = {
	title: 'UI/Card',
	component: Card,
	argTypes: {
		children: {
			control: false,
		},
	},
};

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
	children: <p>Card Component Works!!</p>,
};

export default Component;
