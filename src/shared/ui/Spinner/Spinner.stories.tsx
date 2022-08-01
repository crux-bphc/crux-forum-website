import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Spinner from './Spinner';

const Component: ComponentMeta<typeof Spinner> = {
	title: 'UI/Spinner',
	component: Spinner,
	argTypes: {
		variant: {
			defaultValue: 'default',
		},
	},
};

const Template: ComponentStory<typeof Spinner> = (args) => (
	<Spinner {...args} />
);

export const Default = Template.bind({});

Default.args = {};

export default Component;
