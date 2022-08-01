import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BsGoogle } from 'react-icons/bs';

import IconButton from './IconButton';

const Component: ComponentMeta<typeof IconButton> = {
	title: 'UI/IconButton',
	component: IconButton,
	argTypes: {
		icon: {
			control: false,
		},
		isLink: {
			defaultValue: false,
		},
		className: {
			control: false,
		},
		onClick: {
			control: 'false',
		},
		variant: {
			defaultValue: 'solid',
			control: {
				type: 'inline-radio',
			},
		},
		color: {
			defaultValue: 'teal',
			control: {
				type: 'inline-radio',
			},
		},
	},
};

const Template: ComponentStory<typeof IconButton> = (args) => (
	<IconButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
	icon: <BsGoogle />,
};

export default Component;
