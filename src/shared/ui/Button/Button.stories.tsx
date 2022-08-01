import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';
import { MdSend } from 'react-icons/md';
import Empty from '@/shared/components/Empty';

const icons = { MdSend: <MdSend size={20} />, Empty };

const Component: ComponentMeta<typeof Button> = {
	title: 'UI/Button',
	component: Button,
	argTypes: {
		color: {
			control: {
				type: 'inline-radio',
			},
		},
		spinnerPlacement: {
			control: {
				type: 'inline-radio',
			},
		},
		size: {
			control: {
				type: 'inline-radio',
			},
		},
		variant: {
			control: {
				type: 'inline-radio',
			},
		},
		leftIcon: {
			options: Object.keys(icons),
			mapping: icons,
			control: {
				type: 'inline-radio',
				labels: {
					Empty: 'hide',
					MdSend: 'show',
				},
			},
		},
		rightIcon: {
			options: Object.keys(icons),
			mapping: icons,
			control: {
				type: 'inline-radio',
				labels: {
					Empty: 'hide',
					MdSend: 'show',
				},
			},
		},
		className: {
			control: false,
		},
		type: {
			control: false,
		},
		onClick: {
			control: false,
		},
	},
	args: {
		children: 'Button',
		isLoading: false,
		fullWidth: false,
		disabled: false,
		loadingText: 'Loading...',
	},
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
	color: 'teal',
};

export default Component;
